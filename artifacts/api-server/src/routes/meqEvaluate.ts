import { Router } from "express";
import Anthropic from "@anthropic-ai/sdk";

const router = Router();

const client = new Anthropic({
  baseURL: process.env.AI_INTEGRATIONS_ANTHROPIC_BASE_URL,
  apiKey: process.env.AI_INTEGRATIONS_ANTHROPIC_API_KEY ?? "placeholder",
});

router.post("/meq-evaluate", async (req, res) => {
  const { prompt } = req.body as { prompt?: string };

  if (!prompt || typeof prompt !== "string") {
    res.status(400).json({ error: "prompt is required" });
    return;
  }

  if (!process.env.AI_INTEGRATIONS_ANTHROPIC_BASE_URL) {
    res.status(503).json({ error: "Assessment unavailable — please try again" });
    return;
  }

  try {
    const message = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 4000,
      system:
        "You are a senior RANZCP MEQ examiner with deep expertise in Australian postgraduate psychiatry assessment. Evaluate candidate answers strictly against the marking domains and command word requirements provided. Award marks only for points that match the key points in the marking guide. Apply command word gates with no exceptions. Return only valid JSON — no markdown, no preamble, no explanation outside the JSON structure.",
      messages: [{ role: "user", content: prompt }],
    });

    const block = message.content[0];
    const text = block.type === "text" ? block.text : "";

    res.json({ text });
  } catch (err: any) {
    const detail = {
      name: err?.name,
      message: err?.message,
      status: err?.status,
      type: err?.type,
      promptLength: prompt?.length,
      model: "claude-sonnet-4-6",
      maxTokens: 4000,
    };
    req.log?.error(detail, "MEQ evaluate failed");
    res.status(502).json({
      error: "Assessment unavailable — please try again",
      detail: process.env.NODE_ENV === "development" ? detail : undefined,
    });
  }
});

export default router;
