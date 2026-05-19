import { Router } from "express";
import Anthropic from "@anthropic-ai/sdk";

const router = Router();

const client = new Anthropic({
  baseURL: process.env.AI_INTEGRATIONS_ANTHROPIC_BASE_URL,
  apiKey: process.env.AI_INTEGRATIONS_ANTHROPIC_API_KEY ?? "placeholder",
});

interface MissedSignalDetail {
  name: string;
  clueInStem: string;
  whyItMatters: string;
}

router.post("/ai-feedback", async (req, res) => {
  const { stem, identifiedSignalNames, missedSignalDetails } = req.body as {
    stem: string;
    identifiedSignalNames: string[];
    missedSignalDetails: MissedSignalDetail[];
  };

  if (!stem) {
    res.status(400).json({ error: "stem is required" });
    return;
  }

  if (!process.env.AI_INTEGRATIONS_ANTHROPIC_BASE_URL) {
    res.status(503).json({ error: "AI feedback unavailable" });
    return;
  }

  const identifiedList =
    identifiedSignalNames && identifiedSignalNames.length > 0
      ? identifiedSignalNames.join(", ")
      : "none";

  const missedList =
    missedSignalDetails && missedSignalDetails.length > 0
      ? missedSignalDetails
          .map(
            (s) =>
              `- ${s.name}: clue in stem — "${s.clueInStem}" | why it matters — "${s.whyItMatters}"`
          )
          .join("\n")
      : "none";

  const userMessage = `STEM: ${stem}

SIGNALS THE CANDIDATE IDENTIFIED: ${identifiedList}

SIGNALS THE CANDIDATE MISSED:
${missedList}

Give feedback in this format only:

IDENTIFIED: Brief acknowledgment of what they spotted correctly. One sentence.

MISSED: For each missed signal — one sentence naming the signal, the clue they should have seen, and why it matters clinically.

Do not rewrite their answer. Do not give generic advice.`;

  try {
    const message = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 800,
      system:
        "You are an RANZCP MEQ examiner. Give concise signal-detection feedback only. Maximum 200 words total.",
      messages: [{ role: "user", content: userMessage }],
    });

    const block = message.content[0];
    const text = block.type === "text" ? block.text : "";

    res.json({ feedback: text });
  } catch {
    res.status(502).json({ error: "AI feedback unavailable" });
  }
});

export default router;
