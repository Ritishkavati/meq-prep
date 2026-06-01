import { QuizStem, TopicKey, DifficultyKey, QUIZ_STEMS } from "./quizData";

const STORAGE_KEY = "meq_quiz_session_v2";

interface SessionState {
  seenByTopic: Record<string, string[]>;
}

function load(): SessionState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return { seenByTopic: {} };
}

function save(state: SessionState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {}
}

function poolFor(topic: TopicKey, difficulty?: DifficultyKey): QuizStem[] {
  let pool = topic === "random" ? [...QUIZ_STEMS] : QUIZ_STEMS.filter((s) => s.topic === topic);
  if (difficulty) {
    const filtered = pool.filter((s) => s.difficulty === difficulty);
    if (filtered.length > 0) pool = filtered;
  }
  return pool;
}

export interface TopicStats {
  available: number;
  attempted: number;
  remaining: number;
}

export function getTopicStats(topic: TopicKey, difficulty?: DifficultyKey): TopicStats {
  const pool = poolFor(topic, difficulty);
  const state = load();
  const seen = state.seenByTopic[topic] ?? [];
  const attempted = seen.filter((id) => pool.some((s) => s.id === id)).length;
  const remaining = pool.filter((s) => !seen.includes(s.id)).length;
  return { available: pool.length, attempted, remaining };
}

export function getNextStem(
  topic: TopicKey,
  difficulty?: DifficultyKey,
  currentStemId?: string,
  completedStemIds?: string[]
): QuizStem {
  const pool = poolFor(topic, difficulty);
  if (pool.length === 0) return QUIZ_STEMS[0];

  const state = load();
  const topicKey = topic + (difficulty ? `:${difficulty}` : "");
  const seen: string[] = state.seenByTopic[topicKey] ?? [];
  const completed = new Set(completedStemIds ?? []);

  // Priority 1: never completed by this candidate AND not seen this session
  let candidates = pool.filter(
    (s) => !completed.has(s.id) && !seen.includes(s.id) && s.id !== currentStemId
  );

  // Priority 2: never completed by this candidate (seen this session is ok)
  if (candidates.length === 0) {
    candidates = pool.filter((s) => !completed.has(s.id) && s.id !== currentStemId);
  }

  // Priority 3: all completed — fall back to unseen this session
  if (candidates.length === 0) {
    candidates = pool.filter((s) => !seen.includes(s.id) && s.id !== currentStemId);
  }

  // Priority 4: full reset — everything has been seen this session too
  if (candidates.length === 0) {
    state.seenByTopic[topicKey] = currentStemId ? [currentStemId] : [];
    save(state);
    candidates = pool.filter((s) => s.id !== currentStemId);
    if (candidates.length === 0) candidates = pool;
  }

  const stem = candidates[Math.floor(Math.random() * candidates.length)];

  const newSeen = [...(state.seenByTopic[topicKey] ?? [])];
  if (!newSeen.includes(stem.id)) newSeen.push(stem.id);
  state.seenByTopic[topicKey] = newSeen;
  save(state);

  return stem;
}

export function resetTopicProgress(topic: TopicKey) {
  const state = load();
  Object.keys(state.seenByTopic).forEach((k) => {
    if (k === topic || k.startsWith(topic + ":")) delete state.seenByTopic[k];
  });
  save(state);
}

export function resetAllProgress() {
  try { localStorage.removeItem(STORAGE_KEY); } catch {}
}
