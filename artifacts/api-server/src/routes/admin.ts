import { Router } from "express";
import crypto from "crypto";
import fs from "fs";
import path from "path";

const router = Router();

const SESSION_SECRET = process.env.SESSION_SECRET;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "";
const TOKEN_EXPIRY_MS = 8 * 60 * 60 * 1000;
const LOG_PATH = path.resolve(process.cwd(), "logs", "attempts.json");

function getSecret(): string {
  if (!SESSION_SECRET) {
    throw new Error("SESSION_SECRET environment variable is not set — admin auth unavailable");
  }
  return SESSION_SECRET;
}

function sign(payload: object): string {
  const secret = getSecret();
  const data = JSON.stringify(payload);
  const b64 = Buffer.from(data).toString("base64url");
  const sig = crypto
    .createHmac("sha256", secret)
    .update(b64)
    .digest("base64url");
  return `${b64}.${sig}`;
}

function verify(token: string): { role?: string; exp?: number } | null {
  try {
    const secret = getSecret();
    const [b64, sig] = token.split(".");
    if (!b64 || !sig) return null;
    const expected = crypto
      .createHmac("sha256", secret)
      .update(b64)
      .digest("base64url");
    if (
      sig.length !== expected.length ||
      !crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected))
    ) return null;
    const payload = JSON.parse(Buffer.from(b64, "base64url").toString()) as {
      exp?: number;
      role?: string;
    };
    if (!payload.exp || Date.now() > payload.exp) return null;
    if (payload.role !== "admin") return null;
    return payload;
  } catch {
    return null;
  }
}

function requireAdmin(req: any, res: any, next: any) {
  if (!SESSION_SECRET) {
    res.status(503).json({ error: "Admin auth not configured — SESSION_SECRET missing" });
    return;
  }
  const auth = (req.headers.authorization as string) ?? "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";
  const payload = verify(token);
  if (!payload) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  next();
}

router.post("/admin/login", (req, res) => {
  const { password } = req.body as { password?: string };
  if (!ADMIN_PASSWORD) {
    res.status(500).json({ error: "Admin password not configured" });
    return;
  }
  if (!password) {
    res.status(400).json({ error: "Password required" });
    return;
  }
  const inputHash = crypto.createHash("sha256").update(password).digest("hex");
  const storedHash = crypto.createHash("sha256").update(ADMIN_PASSWORD).digest("hex");
  if (!crypto.timingSafeEqual(Buffer.from(inputHash), Buffer.from(storedHash))) {
    res.status(401).json({ error: "Invalid password" });
    return;
  }
  const token = sign({
    role: "admin",
    iat: Date.now(),
    exp: Date.now() + TOKEN_EXPIRY_MS,
  });
  res.json({ token, expiresIn: TOKEN_EXPIRY_MS });
});

router.get("/admin/verify", (req, res) => {
  const auth = req.headers.authorization ?? "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";
  const payload = verify(token);
  if (!payload) {
    res.status(401).json({ valid: false });
    return;
  }
  res.json({ valid: true, payload });
});

router.get("/admin/stats", requireAdmin, (_req, res) => {
  if (!fs.existsSync(LOG_PATH)) {
    res.json({
      totalAttempts: 0,
      totalCandidates: 0,
      avgScore: null,
      candidates: [],
      recentAttempts: [],
      questionStats: [],
      scoreDistribution: [],
      dailyActivity: [],
    });
    return;
  }

  let entries: Array<Record<string, unknown>> = [];
  try {
    entries = JSON.parse(fs.readFileSync(LOG_PATH, "utf8")) as Array<Record<string, unknown>>;
  } catch {
    res.status(500).json({ error: "Failed to parse log file" });
    return;
  }

  // ── Candidate map ──────────────────────────────────────────────────────
  const candidateMap: Record<string, {
    count: number;
    scores: number[];
    lastActive: string | null;
    attempts: Array<{ timestamp: string; questionId: string | null; estimatedMarks: number | null; totalMarks: number | null; pct: number | null }>;
  }> = {};

  for (const e of entries) {
    const id = ((e.candidateId as string) ?? "unknown");
    if (!candidateMap[id]) {
      candidateMap[id] = { count: 0, scores: [], lastActive: null, attempts: [] };
    }
    const rec = candidateMap[id];
    rec.count += 1;

    const ts = (e.timestamp as string) ?? null;
    if (ts && (!rec.lastActive || ts > rec.lastActive)) rec.lastActive = ts;

    const est = typeof e.estimatedMarks === "number" ? e.estimatedMarks : null;
    const tot = typeof e.totalMarks === "number" ? e.totalMarks : null;
    const pct = est != null && tot && tot > 0 ? Math.round((est / tot) * 100) : null;
    if (pct != null) rec.scores.push(pct);

    rec.attempts.push({
      timestamp: ts ?? "",
      questionId: (e.questionId as string) ?? null,
      estimatedMarks: est,
      totalMarks: tot,
      pct,
    });
  }

  const candidates = Object.entries(candidateMap)
    .map(([id, d]) => ({
      id,
      count: d.count,
      avgScore: d.scores.length ? Math.round(d.scores.reduce((a, b) => a + b, 0) / d.scores.length) : null,
      lastActive: d.lastActive,
      attempts: d.attempts.sort((a, b) => (b.timestamp > a.timestamp ? 1 : -1)),
    }))
    .sort((a, b) => b.count - a.count);

  // ── Overall avg score ──────────────────────────────────────────────────
  const allScores: number[] = [];
  for (const c of candidates) {
    if (c.avgScore != null) allScores.push(...candidateMap[c.id].scores);
  }
  const avgScore = allScores.length
    ? Math.round(allScores.reduce((a, b) => a + b, 0) / allScores.length)
    : null;

  // ── Recent attempts ────────────────────────────────────────────────────
  const recentAttempts = entries
    .slice(-50)
    .reverse()
    .map((e) => ({
      timestamp: e.timestamp,
      questionId: e.questionId,
      candidateId: e.candidateId ?? "unknown",
      estimatedMarks: e.estimatedMarks,
      totalMarks: e.totalMarks,
    }));

  // ── Question stats ─────────────────────────────────────────────────────
  const qMap: Record<string, { count: number; scores: number[] }> = {};
  for (const e of entries) {
    const qid = ((e.questionId as string) ?? "unknown");
    if (!qMap[qid]) qMap[qid] = { count: 0, scores: [] };
    qMap[qid].count += 1;
    const est = typeof e.estimatedMarks === "number" ? e.estimatedMarks : null;
    const tot = typeof e.totalMarks === "number" ? e.totalMarks : null;
    if (est != null && tot && tot > 0) qMap[qid].scores.push(Math.round((est / tot) * 100));
  }
  const questionStats = Object.entries(qMap)
    .map(([questionId, d]) => ({
      questionId,
      count: d.count,
      avgScore: d.scores.length ? Math.round(d.scores.reduce((a, b) => a + b, 0) / d.scores.length) : null,
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 20);

  // ── Score distribution ─────────────────────────────────────────────────
  const buckets = [
    { label: "0–20%", min: 0, max: 20, count: 0 },
    { label: "21–40%", min: 21, max: 40, count: 0 },
    { label: "41–60%", min: 41, max: 60, count: 0 },
    { label: "61–80%", min: 61, max: 80, count: 0 },
    { label: "81–100%", min: 81, max: 100, count: 0 },
  ];
  for (const s of allScores) {
    const b = buckets.find((bk) => s >= bk.min && s <= bk.max);
    if (b) b.count += 1;
  }
  const scoreDistribution = buckets.map(({ label, count }) => ({ label, count }));

  // ── Daily activity (last 14 days) ──────────────────────────────────────
  const dayMap: Record<string, number> = {};
  const now = new Date();
  for (let i = 13; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    dayMap[d.toISOString().slice(0, 10)] = 0;
  }
  for (const e of entries) {
    const ts = e.timestamp as string;
    if (!ts) continue;
    const day = ts.slice(0, 10);
    if (day in dayMap) dayMap[day] += 1;
  }
  const dailyActivity = Object.entries(dayMap).map(([date, count]) => ({ date, count }));

  res.json({
    totalAttempts: entries.length,
    totalCandidates: candidates.length,
    avgScore,
    candidates,
    recentAttempts,
    questionStats,
    scoreDistribution,
    dailyActivity,
  });
});

router.delete("/admin/logs", requireAdmin, (_req, res) => {
  try {
    if (fs.existsSync(LOG_PATH)) {
      fs.writeFileSync(LOG_PATH, "[]", "utf8");
    }
    res.json({ success: true });
  } catch {
    res.status(500).json({ error: "Failed to clear logs" });
  }
});

export { requireAdmin };
export default router;
