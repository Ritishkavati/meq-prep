import { Router } from "express";
import Anthropic from "@anthropic-ai/sdk";

const router = Router();

router.post("/ai-feedback", async (req, res) => {
  const { stem, candidateAnswer, missedSignals } = req.body as {
    stem: string;
    candidateAnswer: string;
    missedSignals: string[];
  };

  if (!stem || !candidateAnswer) {
    res.status(400).json({ error: "stem and candidateAnswer are required" });
    return;
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    res.status(503).json({ error: "AI feedback unavailable" });
    return;
  }

  try {
    const client = new Anthropic({ apiKey });

    const missedList =
      missedSignals && missedSignals.length > 0
        ? missedSignals.join(", ")
        : "none";

    const message = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 1000,
      system:
        "You are an RANZCP MEQ examiner. You give feedback like a senior consultant psychiatrist. Be specific, direct, and educational. Maximum 200 words.",
      messages: [
        {
          role: "user",
          content: `Stem: ${stem}\nCandidate answer: ${candidateAnswer}\nSignals they missed: ${missedList}\nGive examiner-level feedback on what they missed and why it matters clinically.`,
        },
      ],
    });

    const block = message.content[0];
    const text = block.type === "text" ? block.text : "";

    res.json({ feedback: text });
  } catch {
    res.status(502).json({ error: "AI feedback unavailable" });
  }
});

export default router;
