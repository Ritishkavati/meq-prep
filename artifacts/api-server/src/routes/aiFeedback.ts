import { Router } from "express";
import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";

const router = Router();

const client = new Anthropic({
  baseURL: process.env.AI_INTEGRATIONS_ANTHROPIC_BASE_URL,
  apiKey: process.env.AI_INTEGRATIONS_ANTHROPIC_API_KEY ?? "placeholder",
});

const LOG_PATH = path.resolve(process.cwd(), "logs", "attempts.json");

function anonymise(text: string): string {
  return text
    .replace(/\b([A-Z][a-z]{1,14} [A-Z][a-z]{1,14})\b/g, "[NAME]")
    .replace(/\bDr\.?\s+[A-Z][a-z]+\b/g, "Dr. [NAME]")
    .replace(/\bMr\.?\s+[A-Z][a-z]+\b/g, "Mr. [NAME]")
    .replace(/\bMs\.?\s+[A-Z][a-z]+\b/g, "Ms. [NAME]")
    .replace(/\bMrs\.?\s+[A-Z][a-z]+\b/g, "Mrs. [NAME]");
}

function appendLog(entry: Record<string, unknown>): void {
  try {
    const dir = path.dirname(LOG_PATH);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    let existing: unknown[] = [];
    if (fs.existsSync(LOG_PATH)) {
      try {
        existing = JSON.parse(fs.readFileSync(LOG_PATH, "utf8")) as unknown[];
      } catch {
        existing = [];
      }
    }
    existing.push(entry);
    fs.writeFileSync(LOG_PATH, JSON.stringify(existing, null, 2), "utf8");
  } catch (err) {
    console.error("Failed to write attempt log:", err);
  }
}

interface MissedSignalDetail {
  name: string;
  clueInStem: string;
  whyItMatters: string;
}

router.post("/ai-feedback", async (req, res) => {
  const {
    stem,
    identifiedSignalNames,
    missedSignalDetails,
    questionId,
    identifiedSignalIds,
    missedSignalIds,
    candidateAnswer,
    totalMarks,
    estimatedMarks,
  } = req.body as {
    stem: string;
    identifiedSignalNames: string[];
    missedSignalDetails: MissedSignalDetail[];
    questionId?: string;
    identifiedSignalIds?: string[];
    missedSignalIds?: string[];
    candidateAnswer?: string;
    totalMarks?: number;
    estimatedMarks?: number;
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

  const answerSection = candidateAnswer
    ? `\nCANDIDATE'S WRITTEN ANSWER:\n${candidateAnswer.trim()}\n`
    : "";

  const userMessage = `STEM: ${stem}
${answerSection}
SIGNALS THE CANDIDATE IDENTIFIED: ${identifiedList}

SIGNALS THE CANDIDATE MISSED:
${missedList}

Give feedback in this format only:

IDENTIFIED: What they got right — use their exact words from the answer above. Be specific.

MISSED: For each missed signal — the stem clue they should have seen, the clinical threshold or obligation, and one example sentence showing consultant-level response.

TEACHING POINT: One paragraph. The most important clinical reasoning gap between this answer and consultant-level thinking.

Do not give generic advice. Quote the stem and the candidate's words directly.`;

  try {
    const message = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 800,
      system:
        "You are a senior RANZCP examiner and clinical teacher. You are giving feedback after a 2-minute signal detection exercise.\n\nYour job is not just to list what was missed. Your job is to teach the candidate why each missed signal matters clinically and what a consultant would actually do — not just identify.\n\nRULES:\n1. Read every line the candidate wrote carefully before responding\n2. Credit specifically what they wrote — use their exact words\n3. For each missed signal: explain the clinical threshold, the consequence of missing it, and write one example sentence showing consultant-level response\n4. If a candidate identified a risk but did not act on it — name that gap specifically. Naming a risk and acting on it are different things at consultant level.\n5. Connect feedback to the stem — quote the specific clue they missed\n6. Never give generic feedback\n7. Maximum 350 words\n\nFORMAT:\nIDENTIFIED: What they got right with their exact words. Be specific.\n\nMISSED: For each missed signal — the stem clue, the clinical threshold or obligation, what a consultant would say in one sentence.\n\nTEACHING POINT: One paragraph. The most important clinical reasoning gap between this answer and consultant-level thinking.",
      messages: [{ role: "user", content: userMessage }],
    });

    const block = message.content[0];
    const text = block.type === "text" ? block.text : "";

    appendLog({
      timestamp: new Date().toISOString(),
      questionId: questionId ?? null,
      identifiedSignalIds: identifiedSignalIds ?? [],
      missedSignalIds: missedSignalIds ?? [],
      candidateAnswer: candidateAnswer ? anonymise(candidateAnswer) : null,
      totalMarks: totalMarks ?? null,
      estimatedMarks: estimatedMarks ?? null,
    });

    res.json({ feedback: text });
  } catch {
    res.status(502).json({ error: "AI feedback unavailable" });
  }
});

export default router;
