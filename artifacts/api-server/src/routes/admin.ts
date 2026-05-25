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
    res.json({ totalAttempts: 0, candidates: [], recentAttempts: [] });
    return;
  }
  let entries: Array<Record<string, unknown>> = [];
  try {
    entries = JSON.parse(fs.readFileSync(LOG_PATH, "utf8")) as Array<
      Record<string, unknown>
    >;
  } catch {
    res.status(500).json({ error: "Failed to parse log file" });
    return;
  }

  const candidateMap: Record<string, number> = {};
  for (const e of entries) {
    const id = (e.candidateId as string) ?? "unknown";
    candidateMap[id] = (candidateMap[id] ?? 0) + 1;
  }
  const candidates = Object.entries(candidateMap)
    .map(([id, count]) => ({ id, count }))
    .sort((a, b) => b.count - a.count);

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

  res.json({
    totalAttempts: entries.length,
    totalCandidates: candidates.length,
    candidates,
    recentAttempts,
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
