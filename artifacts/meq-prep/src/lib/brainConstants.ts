import type { UploadCategory, PermissionStatus, ProcessingStatus } from "./brainStore";

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
