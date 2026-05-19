import { Router } from "express";
import fs from "fs";
import path from "path";

const router = Router();

const LOG_PATH = path.resolve(process.cwd(), "logs", "attempts.json");

interface AttemptEntry {
  timestamp: string;
  questionId: string | null;
  identifiedSignalIds: string[];
  missedSignalIds: string[];
  candidateAnswer: string | null;
  totalMarks: number | null;
  estimatedMarks: number | null;
}

router.get("/stats", (_req, res) => {
  if (!fs.existsSync(LOG_PATH)) {
    res.json({
      totalAttempts: 0,
      attemptsPerQuestion: {},
      missRatePerSignal: {},
      mostCommonlyMissed: [],
    });
    return;
  }

  let entries: AttemptEntry[] = [];
  try {
    entries = JSON.parse(fs.readFileSync(LOG_PATH, "utf8")) as AttemptEntry[];
  } catch {
    res.status(500).json({ error: "Failed to parse log file" });
    return;
  }

  const attemptsPerQuestion: Record<string, number> = {};
  const signalSeenCount: Record<string, number> = {};
  const signalMissedCount: Record<string, number> = {};

  for (const entry of entries) {
    if (entry.questionId) {
      attemptsPerQuestion[entry.questionId] =
        (attemptsPerQuestion[entry.questionId] ?? 0) + 1;
    }

    const allSignals = [
      ...(entry.identifiedSignalIds ?? []),
      ...(entry.missedSignalIds ?? []),
    ];
    for (const id of allSignals) {
      signalSeenCount[id] = (signalSeenCount[id] ?? 0) + 1;
    }
    for (const id of entry.missedSignalIds ?? []) {
      signalMissedCount[id] = (signalMissedCount[id] ?? 0) + 1;
    }
  }

  const missRatePerSignal: Record<string, number> = {};
  for (const [id, seen] of Object.entries(signalSeenCount)) {
    const missed = signalMissedCount[id] ?? 0;
    missRatePerSignal[id] = seen > 0 ? Math.round((missed / seen) * 100) : 0;
  }

  const mostCommonlyMissed = Object.entries(missRatePerSignal)
    .filter(([id]) => (signalSeenCount[id] ?? 0) >= 3)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 20)
    .map(([signalId, missRate]) => ({
      signalId,
      missRate,
      timesAppeared: signalSeenCount[signalId] ?? 0,
      timesMissed: signalMissedCount[signalId] ?? 0,
    }));

  res.json({
    totalAttempts: entries.length,
    attemptsPerQuestion,
    missRatePerSignal,
    mostCommonlyMissed,
  });
});

export default router;
