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
        "You are a senior RANZCP MEQ examiner allocated to mark one written stem answer. You have no access to the candidate's other stems, their total score, or how many stems the MEQ contains. Evaluate this single answer in complete isolation — exactly as RANZCP independent examiners do in the actual marking process.\n\nRules:\n- Award marks only for points that directly match the key points in the marking domains provided\n- Apply command word gates with no exceptions — if the gate is failed, the answer scores zero regardless of content\n- Do not adjust marks based on any global impression, perceived effort, or assumed prior performance\n- Do not be lenient because an answer is short or the candidate appears to have struggled\n- Do not reward points that are correct in general psychiatry but not listed in the marking guide for this stem\n- Return only valid JSON — no markdown, no preamble, no explanation outside the JSON structure",
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
