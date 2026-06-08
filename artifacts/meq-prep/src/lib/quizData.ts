import { DOCX_STEMS } from "./questions/docxQuestions";

export type SignalSeverity = "critical" | "important" | "optional";
export type SignalCategory =
  | "immediate_safety"
  | "diagnosis_formulation"
  | "risk_self"
  | "risk_others"
  | "risk_vulnerable"
  | "substance_use"
  | "physical_health"
  | "capacity"
  | "mental_health_act"
  | "consent_refusal"
  | "cultural_safety"
  | "trauma"
  | "family_carer"
  | "child_protection"
  | "collateral"
  | "mdt_conflict"
  | "system_pressure"
  | "governance"
  | "ethics"
  | "disposition";

export interface ExpectedSignal {
  id: string;
  name: string;
  category: SignalCategory;
  severity: SignalSeverity;
  clueInStem: string;
  whyItMatters: string;
  relatedRisk?: string;
  relatedLegal?: string;
  relatedCultural?: string;
  relatedSystem?: string;
  modelWording: string;
  keywords: string[];
}

export interface QuizStem {
  id: string;
  questionNumber: string;
  topic: TopicKey;
  difficulty: DifficultyKey;
  title: string;
  candidateRole: string;
  setting: string;
  stem: string;
  totalMarks: number;
  signals: ExpectedSignal[];
  priorityOrder?: { urgent: string[]; secondary: string[]; lowYield: string[] };
  modelAnswer?: string;
  broadDomains?: string;
  pointsInEachDomain?: string;
  missedInformation?: string;
  conceptExplanation?: string;
  markingGuide?: { letter: string; heading: string; points: string[] }[];
}

export type TopicKey =
  | "random"
  | "ed"
  | "perinatal"
  | "cl_psychiatry"
  | "forensic"
  | "old_age"
  | "child_adolescent"
  | "governance"
  | "cultural_safety"
  | "substance_use"
  | "risk"
  | "capacity_mha"
  | "quality_assurance"
  | "supervision"
  | "documentation"
  | "discharge_review"
  | "mdt_systems"
  | "rural"
  | "psychotherapy"
  | "ethics";

export type DifficultyKey = "standard" | "difficult" | "consultant";

export const TOPIC_LABELS: Record<TopicKey, string> = {
  random: "Random",
  ed: "Emergency Department",
  perinatal: "Perinatal Psychiatry",
  cl_psychiatry: "Consultation-Liaison",
  forensic: "Forensic Psychiatry",
  old_age: "Old Age Psychiatry",
  child_adolescent: "Child & Adolescent",
  governance: "Governance & Leadership",
  cultural_safety: "Cultural Safety",
  substance_use: "Substance Use",
  risk: "Risk Assessment",
  capacity_mha: "Capacity & Mental Health Act",
  quality_assurance: "Quality & Safety Review",
  supervision: "Supervision & Feedback",
  documentation: "Documentation & Communication",
  discharge_review: "Discharge / Report Review",
  mdt_systems: "MDT Conflict & Systems Pressure",
  rural: "Rural & Resource-Limited",
  psychotherapy: "Psychotherapy & Boundaries",
  ethics: "Ethics & Professionalism",
};

export const DIFFICULTY_LABELS: Record<DifficultyKey, string> = {
  standard: "Standard",
  difficult: "Difficult",
  consultant: "Consultant-level",
};

export const QUIZ_STEMS: QuizStem[] = [...DOCX_STEMS];

export function getStemsByTopic(topic: TopicKey): QuizStem[] {
  if (topic === "random") return QUIZ_STEMS;
  return QUIZ_STEMS.filter((s) => s.topic === topic);
}

export function getRandomStem(topic: TopicKey, difficulty?: DifficultyKey): QuizStem {
  let pool = getStemsByTopic(topic);
  if (difficulty) {
    const filtered = pool.filter((s) => s.difficulty === difficulty);
    if (filtered.length > 0) pool = filtered;
  }
  return pool[Math.floor(Math.random() * pool.length)];
}
