import React, { createContext, useContext, useState, useCallback } from "react";

export type PermissionStatus =
  | "personal_study_only"
  | "original_content"
  | "publicly_usable"
  | "copyright_restricted";

export type UploadCategory =
  | "old_meq_questions"
  | "marking_guide"
  | "model_answers"
  | "personal_notes"
  | "clinical_framework"
  | "guidelines_reference"
  | "other";

export type ProcessingStatus =
  | "uploaded"
  | "extracting_text"
  | "splitting_sections"
  | "detecting_stems"
  | "detecting_tags"
  | "detecting_signals"
  | "ready"
  | "error";

export interface UploadedFile {
  id: string;
  filename: string;
  fileType: string;
  uploadCategory: UploadCategory;
  sourceName: string;
  year: string;
  permissionStatus: PermissionStatus;
  uploadedAt: Date;
  processingStatus: ProcessingStatus;
  topicTags: string[];
}

export interface KnowledgeChunk {
  id: string;
  fileId: string;
  chunkText: string;
  chunkType: string;
  topicTags: string[];
  sourceReference: string;
  copyrightStatus: PermissionStatus;
}

export interface MeqPattern {
  id: string;
  sourceFileId: string;
  setting: string;
  topic: string;
  stemCount: number;
  totalMarks: number;
  commonSignals: string[];
  examinerFocus: string;
  commonMissedPoints: string[];
  notes: string;
}

export type SignalCategory =
  | "Clinical"
  | "Risk"
  | "Capacity"
  | "Legal"
  | "Cultural"
  | "Family"
  | "MDT"
  | "Systems";

export interface SignalMap {
  id: string;
  topic: string;
  signalName: string;
  signalCategory: SignalCategory;
  whyItMatters: string;
  relatedRisk: string;
  relatedLegalIssue: string;
  relatedSystemIssue: string;
  sampleCandidateWording: string;
}

export type ExtractedItemStatus = "pending" | "approved" | "archived";

export interface ExtractedItem {
  id: string;
  fileId: string;
  scenario: string;
  question: string;
  marks: number;
  topic: string;
  stemNumber: number;
  expectedSignals: string[];
  examinerFocus: string;
  riskLegalCultural: string;
  candidatePitfalls: string;
  status: ExtractedItemStatus;
}

interface BrainState {
  uploadedFiles: UploadedFile[];
  knowledgeChunks: KnowledgeChunk[];
  meqPatterns: MeqPattern[];
  signalMaps: SignalMap[];
  extractedItems: ExtractedItem[];
  addFile: (file: Omit<UploadedFile, "id" | "uploadedAt" | "processingStatus">) => string;
  advanceProcessing: (id: string) => void;
  updateExtractedItem: (id: string, patch: Partial<ExtractedItem>) => void;
  deleteExtractedItem: (id: string) => void;
  deleteFile: (id: string) => void;
}

const BrainContext = createContext<BrainState | null>(null);

const PROCESSING_STEPS: ProcessingStatus[] = [
  "uploaded",
  "extracting_text",
  "splitting_sections",
  "detecting_stems",
  "detecting_tags",
  "detecting_signals",
  "ready",
];

function uid() {
  return Math.random().toString(36).slice(2, 10);
}

const SEED_FILES: UploadedFile[] = [
  {
    id: "f1",
    filename: "MEQ_2023_Practice_Set.pdf",
    fileType: "pdf",
    uploadCategory: "old_meq_questions",
    sourceName: "Personal study notes",
    year: "2023",
    permissionStatus: "personal_study_only",
    uploadedAt: new Date("2026-05-10T09:00:00"),
    processingStatus: "ready",
    topicTags: ["psychosis", "risk", "MHA"],
  },
  {
    id: "f2",
    filename: "Examiner_Marking_Guide_2022.docx",
    fileType: "docx",
    uploadCategory: "marking_guide",
    sourceName: "Study group materials",
    year: "2022",
    permissionStatus: "personal_study_only",
    uploadedAt: new Date("2026-05-12T14:30:00"),
    processingStatus: "ready",
    topicTags: ["depression", "capacity", "MDT"],
  },
];

const SEED_EXTRACTED: ExtractedItem[] = [
  {
    id: "e1",
    fileId: "f1",
    scenario:
      "Marcus, 28, is brought to the emergency department by police after neighbours called reporting he had been shouting at traffic and appeared dishevelled. He has a known history of schizophrenia and has not taken his depot for six weeks.",
    question: "What are the immediate psychiatric and risk management priorities?",
    marks: 25,
    topic: "Psychosis & Risk",
    stemNumber: 1,
    expectedSignals: [
      "Acute psychotic relapse",
      "Non-adherence to depot",
      "Risk to self and others",
      "Mental Health Act assessment",
      "Collateral history",
    ],
    examinerFocus: "Structured risk assessment and safe management plan",
    riskLegalCultural: "MHA s12 assessment, risk of harm to others, capacity assessment",
    candidatePitfalls: "Focusing only on medication without addressing immediate safety",
    status: "approved",
  },
  {
    id: "e2",
    fileId: "f2",
    scenario:
      "Dr Patel, a 45-year-old GP, is referred by her own GP with a six-month history of low mood, poor concentration, and early morning waking. She discloses she has been prescribing herself benzodiazepines.",
    question: "Outline your approach to assessment and management.",
    marks: 25,
    topic: "Depression & Capacity",
    stemNumber: 1,
    expectedSignals: [
      "Major depressive episode",
      "Self-prescribing / professional conduct issue",
      "Confidentiality vs duty to report",
      "Occupational implications",
      "AHPRA notification considerations",
    ],
    examinerFocus: "Balancing therapeutic relationship with regulatory obligations",
    riskLegalCultural: "AHPRA mandatory reporting, fitness to practise, confidentiality limits",
    candidatePitfalls: "Missing the regulatory and occupational dimensions entirely",
    status: "pending",
  },
];

const SEED_SIGNALS: SignalMap[] = [
  {
    id: "s1",
    topic: "Acute Psychosis",
    signalName: "Mental Health Act assessment required",
    signalCategory: "Legal",
    whyItMatters: "Involuntary treatment may be necessary when insight is absent",
    relatedRisk: "Risk to self and others if untreated",
    relatedLegalIssue: "Mental Health Act criteria, s12 doctor assessment",
    relatedSystemIssue: "ED capacity, psychiatric liaison availability",
    sampleCandidateWording: "I would consider whether criteria for involuntary assessment under the MHA are met",
  },
  {
    id: "s2",
    topic: "Depression in Health Professional",
    signalName: "AHPRA mandatory reporting",
    signalCategory: "Legal",
    whyItMatters: "Treating psychiatrist may have notification obligations",
    relatedRisk: "Patient safety risk if practitioner is impaired",
    relatedLegalIssue: "National Law mandatory reporting provisions",
    relatedSystemIssue: "Coordination with treating GP, medical defence organisations",
    sampleCandidateWording: "I would seek advice regarding mandatory reporting obligations while maintaining therapeutic alliance",
  },
];

export function BrainProvider({ children }: { children: React.ReactNode }) {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>(SEED_FILES);
  const [knowledgeChunks] = useState<KnowledgeChunk[]>([]);
  const [meqPatterns] = useState<MeqPattern[]>([]);
  const [signalMaps] = useState<SignalMap[]>(SEED_SIGNALS);
  const [extractedItems, setExtractedItems] = useState<ExtractedItem[]>(SEED_EXTRACTED);

  const addFile = useCallback(
    (file: Omit<UploadedFile, "id" | "uploadedAt" | "processingStatus">) => {
      const id = uid();
      setUploadedFiles((prev) => [
        ...prev,
        { ...file, id, uploadedAt: new Date(), processingStatus: "uploaded" },
      ]);
      return id;
    },
    []
  );

  const advanceProcessing = useCallback((id: string) => {
    setUploadedFiles((prev) =>
      prev.map((f) => {
        if (f.id !== id) return f;
        const idx = PROCESSING_STEPS.indexOf(f.processingStatus);
        const next = PROCESSING_STEPS[idx + 1] ?? "ready";
        return { ...f, processingStatus: next };
      })
    );
  }, []);

  const updateExtractedItem = useCallback((id: string, patch: Partial<ExtractedItem>) => {
    setExtractedItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...patch } : item))
    );
  }, []);

  const deleteExtractedItem = useCallback((id: string) => {
    setExtractedItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const deleteFile = useCallback((id: string) => {
    setUploadedFiles((prev) => prev.filter((f) => f.id !== id));
  }, []);

  return (
    <BrainContext.Provider
      value={{
        uploadedFiles,
        knowledgeChunks,
        meqPatterns,
        signalMaps,
        extractedItems,
        addFile,
        advanceProcessing,
        updateExtractedItem,
        deleteExtractedItem,
        deleteFile,
      }}
    >
      {children}
    </BrainContext.Provider>
  );
}

export function useBrain() {
  const ctx = useContext(BrainContext);
  if (!ctx) throw new Error("useBrain must be used inside BrainProvider");
  return ctx;
}

export const UPLOAD_CATEGORY_LABELS: Record<UploadCategory, string> = {
  old_meq_questions: "Old MEQ Questions",
  marking_guide: "Marking Guide",
  model_answers: "Model Answers",
  personal_notes: "Personal Notes",
  clinical_framework: "Clinical Framework",
  guidelines_reference: "Guidelines / Reference Material",
  other: "Other",
};

export const PERMISSION_LABELS: Record<PermissionStatus, string> = {
  personal_study_only: "Personal study only",
  original_content: "Original content",
  publicly_usable: "Publicly usable",
  copyright_restricted: "Copyright restricted",
};

export const PROCESSING_LABELS: Record<ProcessingStatus, string> = {
  uploaded: "Uploaded",
  extracting_text: "Extracting text",
  splitting_sections: "Splitting into sections",
  detecting_stems: "Detecting MEQ stems",
  detecting_tags: "Detecting topic tags",
  detecting_signals: "Detecting key signals",
  ready: "Ready for retrieval",
  error: "Error",
};
