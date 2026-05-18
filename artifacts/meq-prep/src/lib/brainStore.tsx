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
  // ── Real uploaded files (registered May 2026) ──
  {
    id: "f_risk_ed",
    filename: "Risk-assessment-in-ED_Feb2018.pdf",
    fileType: "pdf",
    uploadCategory: "marking_guide",
    sourceName: "RANZCP February 2018 Writtens",
    year: "2018",
    permissionStatus: "personal_study_only",
    uploadedAt: new Date("2026-05-18T09:00:00"),
    processingStatus: "ready",
    topicTags: ["risk", "ED", "suicide", "forensic", "sexual assault", "marking guide"],
  },
  {
    id: "f_schiz_cloz",
    filename: "Schizophrenia-side-effects-and-clozapine_Aug2018.pdf",
    fileType: "pdf",
    uploadCategory: "marking_guide",
    sourceName: "RANZCP August 2018 Writtens",
    year: "2018",
    permissionStatus: "personal_study_only",
    uploadedAt: new Date("2026-05-18T09:01:00"),
    processingStatus: "ready",
    topicTags: ["schizophrenia", "clozapine", "antipsychotics", "EPSE", "medication", "marking guide"],
  },
  {
    id: "f_severe_dep",
    filename: "Severe-depression_Feb2019.pdf",
    fileType: "pdf",
    uploadCategory: "marking_guide",
    sourceName: "RANZCP February 2019 Writtens",
    year: "2019",
    permissionStatus: "personal_study_only",
    uploadedAt: new Date("2026-05-18T09:02:00"),
    processingStatus: "ready",
    topicTags: ["depression", "elderly", "suicide risk", "ECT", "inpatient", "marking guide"],
  },
  {
    id: "f_tony_mva",
    filename: "Tony-MVA-pain_Aug2015.pdf",
    fileType: "pdf",
    uploadCategory: "marking_guide",
    sourceName: "RANZCP August 2015 Writtens",
    year: "2015",
    permissionStatus: "personal_study_only",
    uploadedAt: new Date("2026-05-18T09:03:00"),
    processingStatus: "ready",
    topicTags: ["CL psychiatry", "pain", "substance use", "personality", "delirium", "marking guide"],
  },
  {
    id: "f_sample_q",
    filename: "MEQ-Sample-Questions.pdf",
    fileType: "pdf",
    uploadCategory: "old_meq_questions",
    sourceName: "MEQ preparation materials",
    year: "2022",
    permissionStatus: "personal_study_only",
    uploadedAt: new Date("2026-05-18T09:04:00"),
    processingStatus: "ready",
    topicTags: [
      "treatment-resistant depression", "Indigenous", "schizophrenia", "eating disorders",
      "drug and alcohol", "CL", "pseudoseizure", "Parkinson's", "hunger strike",
      "chronic fatigue", "anorexia", "OCD", "PTSD",
    ],
  },
  {
    id: "f_psych_therapy",
    filename: "Psychological-Therapies-Notes-MEQ.pdf",
    fileType: "pdf",
    uploadCategory: "clinical_framework",
    sourceName: "MEQ preparation materials",
    year: "2023",
    permissionStatus: "personal_study_only",
    uploadedAt: new Date("2026-05-18T09:05:00"),
    processingStatus: "ready",
    topicTags: [
      "CBT", "DBT", "IPT", "motivational interviewing", "BPD", "family therapy",
      "psychotherapy", "adherence", "Linehan", "transtheoretical model",
    ],
  },
  {
    id: "f_diag_interview",
    filename: "The-Diagnostic-Interview-History-taking_MEQ.pdf",
    fileType: "pdf",
    uploadCategory: "clinical_framework",
    sourceName: "MEQ preparation materials",
    year: "2023",
    permissionStatus: "personal_study_only",
    uploadedAt: new Date("2026-05-18T09:06:00"),
    processingStatus: "ready",
    topicTags: [
      "diagnostic interview", "psychosis", "depression", "mania", "DSM-5",
      "first-rank symptoms", "comorbidity", "suicide assessment", "history-taking",
    ],
  },
  {
    id: "f_meq_v6",
    filename: "MEQ-Practice-Questions_Video-6.pdf",
    fileType: "pdf",
    uploadCategory: "old_meq_questions",
    sourceName: "MEQ video series practice questions",
    year: "2024",
    permissionStatus: "personal_study_only",
    uploadedAt: new Date("2026-05-18T09:07:00"),
    processingStatus: "ready",
    topicTags: [
      "CTO", "community treatment order", "paliperidone depot", "supervision",
      "CALD", "interpreter", "QTc", "OCD", "engagement",
    ],
  },
  {
    id: "f_meq_v7",
    filename: "MEQ-Practice-Questions_Video-7.pdf",
    fileType: "pdf",
    uploadCategory: "old_meq_questions",
    sourceName: "MEQ video series practice questions",
    year: "2024",
    permissionStatus: "personal_study_only",
    uploadedAt: new Date("2026-05-18T09:08:00"),
    processingStatus: "ready",
    topicTags: [
      "ECT", "root cause analysis", "clozapine", "antipsychotic transition",
      "ADHD", "stimulants", "prescribing outlier", "Indonesian", "stigma",
    ],
  },
  {
    id: "f_meq_p5",
    filename: "Modified-Essay-Questions-Practice-Questions-Part-5.pdf",
    fileType: "pdf",
    uploadCategory: "old_meq_questions",
    sourceName: "MEQ practice questions Part 5",
    year: "2024",
    permissionStatus: "personal_study_only",
    uploadedAt: new Date("2026-05-18T09:09:00"),
    processingStatus: "ready",
    topicTags: [
      "schizoaffective", "methamphetamine", "MHA", "ethics", "benzodiazepine",
      "ED", "Aboriginal", "child and adolescent", "group home", "polypharmacy",
    ],
  },
];

const SEED_EXTRACTED: ExtractedItem[] = [
  // ── From Risk-assessment-in-ED Feb 2018 ──
  {
    id: "e_mark_4_1",
    fileId: "f_risk_ed",
    scenario:
      "Mark is a 45-year-old single successful car salesman presenting to ED with suicidal ideation, plan and intent. He was recently charged with sexual assault after a work function. No previous psychiatric history.",
    question: "Outline what specific information you would expect the registrar to have obtained from Mark. (12 marks)",
    marks: 12,
    topic: "Risk Assessment / Forensic",
    stemNumber: 1,
    expectedSignals: [
      "Precipitant for current presentation and primary/secondary gain",
      "Symptoms of depression or mania",
      "History of substance use and current intoxication",
      "Risk to self: plan, intent, imminence, means",
      "Risk to others: threats to victim, intent, history",
      "Reputational risk: impact of charge on employment, family, social media",
      "Shame and anger in mental state",
      "Collateral from GP, family, next-of-kin",
      "Social supports and fear of legal consequences",
    ],
    examinerFocus:
      "Structured risk assessment including risk to others and reputation; secondary gain must be explored; collateral essential",
    riskLegalCultural:
      "Suicide risk; risk to alleged victim; legal proceedings as precipitant; shame-driven suicidality; secondary gain in context of pending charges",
    candidatePitfalls:
      "Missing risk to others (victim); failing to explore secondary gain; not addressing shame/reputational risk",
    status: "approved",
  },
  {
    id: "e_mark_4_2",
    fileId: "f_risk_ed",
    scenario:
      "Mark, 45yo. On exam: distressed, tearful, fearful of legal costs, cannot recall the incident (was intoxicated), says he will kill himself if jailed, too ashamed to discuss with parents.",
    question: "Outline what in Mark's history and presentation would indicate that he needs admission. (6 marks)",
    marks: 6,
    topic: "Risk Assessment / Disposition",
    stemNumber: 2,
    expectedSignals: [
      "Dynamic risk: imminent intent and plan, means",
      "Static risk: male gender, single, no psychiatric history",
      "Ongoing substance use",
      "Imminence of legal proceedings and social consequences",
      "Absence of family/social supports",
      "Staff reactions and fear of blame affecting decision-making",
      "Availability of community mental health supports",
    ],
    examinerFocus:
      "Risk factors both patient and non-patient; examiner expects awareness of systemic factors including staff reactions",
    riskLegalCultural:
      "Imminent suicide risk; legal stressor as precipitant; systemic pressure on decision-making",
    candidatePitfalls:
      "Not considering non-patient factors (staff reactions, community resource availability)",
    status: "approved",
  },
  // ── From Schizophrenia-side-effects-and-clozapine Aug 2018 ──
  {
    id: "e_mad_1_1",
    fileId: "f_schiz_cloz",
    scenario:
      "Madelaine, 36yo, schizophrenia since age 28. Good adherence but ongoing distressing auditory hallucinations. On risperidone 6mg (significant EPSE). Previously on olanzapine (weight gain, ceased). Requests medication change.",
    question: "Outline the key information you require in order to address Madelaine's request. (12 marks)",
    marks: 12,
    topic: "Schizophrenia / Medication",
    stemNumber: 1,
    expectedSignals: [
      "Risk associated with auditory hallucinations (command hallucinations, relapse severity)",
      "Madelaine's perspective on options other than changing medication",
      "Capacity and MHA status for shared vs supported decision-making",
      "Specific nature of EPSE: akathisia, tardive dyskinesia, hyperprolactinaemia",
      "Metabolic state: diet, activity, BSL, lipids, BP, weight",
      "Substance use: cannabis, amphetamines and association with symptoms",
      "Psychological interventions: CBT for voices",
      "Collateral: file notes, case manager, family",
      "Social context and supports relevant to adherence monitoring",
    ],
    examinerFocus:
      "Comprehensive medication review integrating patient perspective, risk, metabolic monitoring, and psychosocial context",
    riskLegalCultural:
      "Command hallucinations as risk; capacity for treatment decisions; metabolic risk from antipsychotics",
    candidatePitfalls:
      "Accepting medication change request at face value without exploring specific EPSE type, risk, and patient perspective on alternatives",
    status: "approved",
  },
  // ── From Severe-depression Feb 2019 ──
  {
    id: "e_bill_1_1",
    fileId: "f_severe_dep",
    scenario:
      "Bill, 71yo widower, lives alone. 3-month history: constipation, churning stomach, poor sleep. GP started sertraline 50mg; no improvement at 6 weeks. Refers to clinic. Bill believes GP missed physical illness. Describes fatigue, poor concentration, weight loss. States he is 'a burden and would be better off dead'. Severely restricts food intake.",
    question: "List important factors in assessing Bill's risk of harm to himself. (6 marks)",
    marks: 6,
    topic: "Severe Depression / Elderly",
    stemNumber: 1,
    expectedSignals: [
      "Older male — higher completed suicide risk",
      "Living alone — reduced protective factor",
      "Possible delusional beliefs (nihilism, hypochondriasis, guilt)",
      "Physical deterioration due to food restriction",
      "Passive suicidal ideation: 'burden, better off dead'",
      "Recent loss: widowed",
      "Non-response to treatment (sertraline 6 weeks)",
      "Access to means",
      "Absence of social supports and hope",
      "Side effects of sertraline: agitation",
    ],
    examinerFocus:
      "Comprehensive risk factor listing; both static and dynamic; absence of protective factors weighted",
    riskLegalCultural:
      "Elderly male, widowed, suicidal ideation, food restriction as self-neglect, delusions of guilt as high-risk feature",
    candidatePitfalls:
      "Listing generic risk factors without linking to vignette-specific clues; missing delusional quality of symptoms",
    status: "approved",
  },
  // ── From Tony MVA 2015 ──
  {
    id: "e_tony_4_1",
    fileId: "f_tony_mva",
    scenario:
      "Tony, 23yo, motorcycle accident. Unstable cervical fracture, halo traction, chest drain, cannot be moved. 2 days post-surgery. Excessive opiate requests. Demanding cannabis and cigarettes. Threatening to sign out. Verbally aggressive. Registrar says diagnosis is ASPD.",
    question: "Describe the major diagnostic possibilities you would discuss with your registrar. (8 marks)",
    marks: 8,
    topic: "CL Psychiatry / Differential Diagnosis",
    stemNumber: 1,
    expectedSignals: [
      "Inadequate pain management (not personality disorder)",
      "Substance abuse/dependence: cannabis and nicotine withdrawal",
      "Personality dysfunction / affect dysregulation",
      "Acute stress disorder",
      "Delirium (2 days post major surgery, opiates)",
      "No diagnosis / interactional difficulties between staff and patient",
    ],
    examinerFocus:
      "Breadth of differential; examiner penalises premature personality disorder diagnosis; medical causes must come first",
    riskLegalCultural:
      "Right to leave vs medical safety; consent to immobilisation; delirium as medical emergency",
    candidatePitfalls:
      "Accepting registrar's ASPD label without generating medical differentials; missing delirium",
    status: "approved",
  },
  // ── From MEQ Practice Video 6 ──
  {
    id: "e_jarvis_15a",
    fileId: "f_meq_v6",
    scenario:
      "Jarvis, 28yo male, on community treatment order following first episode psychosis at 22. Works at a radio station as a DJ. Lives with parents. On paliperidone depot monthly for 4 years. CTO expires in 4 weeks. Case manager asks for review.",
    question: "What information would you need from the case manager to assist you before your first appointment with Jarvis? List and justify. (11 marks)",
    marks: 11,
    topic: "CTO / Community Psychiatry",
    stemNumber: 1,
    expectedSignals: [
      "Current mental state and symptom control",
      "Adherence with depot and any missed doses",
      "Functioning: employment, social relationships, daily living",
      "Substance use: cannabis and other drugs",
      "Risk history: nature of previous psychosis and any violence/self-harm",
      "Insight and attitude to treatment and CTO",
      "Support from family/parents",
      "Living situation and stressors",
      "Previous admissions and triggers for relapse",
      "Any current legal issues",
    ],
    examinerFocus:
      "Each piece of information must be justified — listing without justification gets no marks",
    riskLegalCultural:
      "CTO legal framework; least restrictive principle; recovery goals vs containment",
    candidatePitfalls:
      "Listing without justifying each item; ignoring occupational and social functioning; ignoring substance use",
    status: "approved",
  },
  {
    id: "e_james_17a",
    fileId: "f_meq_v6",
    scenario:
      "James, 39yo unemployed electrician living with parents. OCD diagnosis for 20 years. Barely leaves the house. Parents do all shopping and cooking. Has self-ceased all medications (fear of side effects). Previously disengaged from clinic after months.",
    question: "What are some possible reasons for James not engaging with the clinic in the past? List and elaborate. (10 marks)",
    marks: 10,
    topic: "OCD / Engagement",
    stemNumber: 1,
    expectedSignals: [
      "OCD symptoms themselves prevent engagement (contamination, checking rituals, agoraphobia)",
      "Fear of medication side effects — previous bad experience",
      "Shame and stigma",
      "Secondary gain: illness maintains family carer role",
      "Anxiety about leaving the house to attend",
      "Poor therapeutic alliance previously",
      "Lack of insight into severity",
      "Environmental factors: no transport, parents enabling avoidance",
      "Comorbid depression reducing motivation",
    ],
    examinerFocus:
      "Engagement barriers must be specific to the vignette and elaborated; generic disengagement reasons will not score",
    riskLegalCultural:
      "Social isolation; carer burden; disability pension implications",
    candidatePitfalls:
      "Generic barriers without linking to OCD specifically; not recognising that OCD symptoms are the primary barrier",
    status: "approved",
  },
  // ── From MEQ Video 7 ──
  {
    id: "e_joe_19a",
    fileId: "f_meq_v7",
    scenario:
      "Joe, 45yo with schizophrenia, working as a gardener. Stable on Clozapine 400mg for 15 years. Wants to change antipsychotic due to sedation, sleeping 12 hours/day, cognitive fog, and only able to work 2 days a week. Compliant but feels brighter on days he forgets the dose.",
    question: "What information would you like to find out before you consider Joe's request for medication change?",
    marks: 12,
    topic: "Clozapine / Antipsychotic Management",
    stemNumber: 1,
    expectedSignals: [
      "Confirm current clozapine plasma level and dose optimisation",
      "Nature and severity of sedation: timing, dose adjustment options",
      "History of relapses off clozapine — was clozapine initiated for treatment resistance?",
      "Previous antipsychotics tried and response",
      "Occupational impact: inability to work full-time as a gardener",
      "Risk if relapse occurs: what was the relapse like?",
      "Joe's insight and understanding of clozapine benefits vs risks",
      "Current monitoring: metabolic, haematological, cardiac",
      "Any substance use contributing to sedation",
      "Family/carer perspective",
    ],
    examinerFocus:
      "Thorough review before any transition; examiner expects candidate to appreciate risks of clozapine discontinuation in treatment-resistant schizophrenia",
    riskLegalCultural:
      "Clozapine discontinuation risk (rebound psychosis, 'clozapine superior' evidence); occupational capacity",
    candidatePitfalls:
      "Agreeing to change medication without establishing why clozapine was chosen and what the relapse history was",
    status: "approved",
  },
  // ── From MEQ Practice Part 5 ──
  {
    id: "e_toby_13a",
    fileId: "f_meq_p5",
    scenario:
      "Toby, 28yo, new to the area. Presents to ED Friday evening requesting diazepam 5mg up to 4 tablets/day with 5 repeats. Says he has been taking this for his 'nerves' and has run out. No hospital records available.",
    question: "Outline key information on history you would expect the registrar to have obtained. (12 marks)",
    marks: 12,
    topic: "ED / Benzodiazepine / Substance Use",
    stemNumber: 1,
    expectedSignals: [
      "Indication for benzodiazepine: anxiety disorder, PTSD, panic disorder — what specifically?",
      "Duration of use, dose, and who prescribed",
      "Prescription shopping: check state prescription monitoring program",
      "Physical dependence and withdrawal risk: seizures, delirium",
      "Substance use: alcohol, opioids, other sedatives",
      "Psychiatric history: anxiety, depression, PTSD",
      "Social history: employment, housing, support",
      "Risk: suicide, self-harm, diversion",
      "Mental state: signs of intoxication or withdrawal",
      "Collateral: GP, pharmacy records",
    ],
    examinerFocus:
      "List must be justified — examiner explicitly states no marks for list only; prescription monitoring program is key",
    riskLegalCultural:
      "Benzodiazepine dependence; withdrawal seizure risk; prescription drug diversion; prescription monitoring program",
    candidatePitfalls:
      "Providing a prescription without adequate assessment; missing prescription monitoring; not exploring diversion risk",
    status: "approved",
  },
  {
    id: "e_kid_14a",
    fileId: "f_meq_p5",
    scenario:
      "12-year-old Aboriginal boy brought to ED by police after damaging property and threatening to hurt himself. Settled on arrival, playing cards with carer. Has recently moved to his 10th group home. State became his carer at age 5 after witnessing family violence and father killed mother (father incarcerated). On olanzapine, sertraline, long-acting methylphenidate, and sodium valproate.",
    question: "List and explain possible explanations of his behaviour.",
    marks: 12,
    topic: "Child & Adolescent / Cultural / Trauma",
    stemNumber: 1,
    expectedSignals: [
      "Complex developmental trauma: witnessed family violence, filicide, multiple placements",
      "Attachment disorder: 10th group home = profound attachment disruption",
      "Aboriginal child — cultural dislocation, grief, kinship disruption",
      "Polypharmacy for disputed diagnosis: multiple medications, childhood bipolar debate",
      "Impulsive behaviour in context of trauma and disrupted regulation",
      "Reaction to grief, loss, or placement change as precipitant",
      "Comorbid ADHD / conduct disorder / emerging personality",
      "Adverse childhood experiences (ACEs) cumulative burden",
      "Institutional response: calling police as first response",
      "Threat to self in context of deregulation, not necessarily suicidal intent",
    ],
    examinerFocus:
      "Trauma-informed explanation; cultural context; systemic critique of polypharmacy and police involvement",
    riskLegalCultural:
      "Child protection; cultural safety; consent to treatment in state care; polypharmacy risk; Aboriginal and Torres Strait Islander cultural considerations",
    candidatePitfalls:
      "Labelling as conduct disorder without exploring trauma; ignoring cultural context; not critiquing polypharmacy",
    status: "approved",
  },
  // ── From MEQ Sample Questions ──
  {
    id: "e_stan_b2",
    fileId: "f_sample_q",
    scenario:
      "Stan, 20yo Indigenous male, diagnosed with schizophrenia. Previous admission: started on risperidone 6mg, stopped 9 months ago. Ongoing auditory hallucinations. Refuses medication.",
    question: "Outline your approach to this situation. List factors affecting compliance. Outline how you would address resistant hallucinations.",
    marks: 14,
    topic: "Schizophrenia / Indigenous / Medication",
    stemNumber: 2,
    expectedSignals: [
      "Therapeutic alliance before medication discussion",
      "Explore reasons for stopping: side effects, insight, cultural beliefs",
      "Cultural factors: Indigenous health beliefs, role of traditional healer",
      "Risk from ongoing hallucinations: command hallucinations",
      "Collateral from family/community",
      "Depot antipsychotic if adherence is the primary issue",
      "Consider clozapine for treatment-resistant hallucinations",
      "CBT for psychosis",
      "Mental Health Act if risk present and no engagement",
      "Engagement with Aboriginal health liaison worker",
    ],
    examinerFocus:
      "Cultural safety integration; thorough compliance factor analysis; treatment-resistant pathway",
    riskLegalCultural:
      "Cultural safety; MHA for involuntary treatment; risk from command hallucinations",
    candidatePitfalls:
      "Not exploring cultural factors; missing clozapine for treatment resistance; not engaging Aboriginal health worker",
    status: "approved",
  },
  {
    id: "e_rhonda_e2",
    fileId: "f_sample_q",
    scenario:
      "Rhonda, 35yo with 3 children and a partner, Department of Human Services contacts you for a report on Rhonda's capacity to look after her children. She has a history of heavy cannabis, alcohol, and heroin use, and continues to use heroin (street).",
    question: "Outline the key points you would cover (key principles and components of a parenting assessment).",
    marks: 12,
    topic: "Substance Use / Parenting / Child Protection",
    stemNumber: 2,
    expectedSignals: [
      "Confidentiality limits when third party (DHS) requests report",
      "Informed consent: explain the purpose and limits of the report to Rhonda",
      "Clarify DHS's specific questions and threshold for the report",
      "Current substance use and its impact on parenting capacity",
      "Direct observation of parent-child interaction if possible",
      "Children's current wellbeing, development, and attachment",
      "Support systems: partner, family, community",
      "Mental health: comorbid depression, trauma",
      "History of child protection involvement",
      "Parental insight into impact of drug use on children",
      "Protective factors: engagement with treatment, motivation to change",
    ],
    examinerFocus:
      "Medico-legal framework for third-party report; parenting capacity components; balancing advocacy with child safety",
    riskLegalCultural:
      "Mandatory child protection reporting; medico-legal report obligations; confidentiality limits; child welfare vs parental rights",
    candidatePitfalls:
      "Writing a report without consent discussion; not clarifying what DHS actually needs; missing collateral from children's school and GP",
    status: "approved",
  },
];

const SEED_SIGNALS: SignalMap[] = [
  {
    id: "sm1",
    topic: "Acute Psychosis",
    signalName: "Mental Health Act assessment required",
    signalCategory: "Legal",
    whyItMatters: "Involuntary treatment may be necessary when insight is absent and safety is at risk",
    relatedRisk: "Risk to self and others if untreated",
    relatedLegalIssue: "MHA criteria; s12 doctor assessment; least restrictive principle",
    relatedSystemIssue: "ED capacity; psychiatric liaison availability; bed access",
    sampleCandidateWording: "I would assess whether criteria for involuntary treatment under the MHA are met given the absent insight and risk",
  },
  {
    id: "sm2",
    topic: "Impaired Health Professional",
    signalName: "AHPRA mandatory reporting — impairment",
    signalCategory: "Legal",
    whyItMatters: "Clinicians have a mandatory duty under the National Law to report impaired practitioners",
    relatedRisk: "Patient safety risk from impaired clinician",
    relatedLegalIssue: "Health Practitioner Regulation National Law s141",
    relatedSystemIssue: "Medical director notification; clinical governance review",
    sampleCandidateWording: "A mandatory AHPRA notification is likely required — this obligation cannot be overridden by a request for confidentiality",
  },
  {
    id: "sm3",
    topic: "Elder Financial Abuse",
    signalName: "Adult safeguarding notification",
    signalCategory: "Legal",
    whyItMatters: "Financial exploitation of a cognitively impaired older person requires mandatory reporting to adult safeguarding",
    relatedRisk: "Financial exploitation; loss of assets; carer harm",
    relatedLegalIssue: "Adult Safeguarding legislation; Guardianship Act; EPOA review",
    relatedSystemIssue: "Social work; public trustee; police if criminal conduct suspected",
    sampleCandidateWording: "This presentation is consistent with elder financial abuse and must be reported to adult safeguarding services",
  },
  {
    id: "sm4",
    topic: "Perinatal Psychiatry",
    signalName: "Postpartum psychosis — psychiatric emergency",
    signalCategory: "Risk",
    whyItMatters: "5% maternal suicide risk; 4% infanticide risk — requires urgent inpatient admission",
    relatedRisk: "Infanticide; maternal suicide",
    relatedLegalIssue: "MHA involuntary admission; child protection notification",
    relatedSystemIssue: "Mother-baby unit access; partner education; child protection",
    sampleCandidateWording: "Postpartum psychosis is a psychiatric emergency — urgent inpatient admission to a mother-baby unit is required",
  },
  {
    id: "sm5",
    topic: "Cultural Safety",
    signalName: "Professional interpreter required — family must not interpret",
    signalCategory: "Systems",
    whyItMatters: "Using family members as interpreters distorts communication, violates privacy, and renders consent/capacity assessments invalid",
    relatedRisk: "Miscommunication; invalid consent; clinical error",
    relatedLegalIssue: "Procedurally flawed capacity assessment; consent invalidity",
    relatedSystemIssue: "NAATI-accredited interpreter service; cultural liaison; TIS National",
    sampleCandidateWording: "A professional NAATI-accredited interpreter must be arranged — using family members is clinically and legally inadequate",
  },
  {
    id: "sm6",
    topic: "CL Psychiatry",
    signalName: "Inadequate pain management as primary diagnosis",
    signalCategory: "Clinical",
    whyItMatters: "Behavioural disturbance in the medical setting must first be attributed to undertreated pain before a personality diagnosis is applied",
    relatedRisk: "Under-treatment of pain; premature personality label",
    relatedLegalIssue: "Duty to treat pain adequately",
    relatedSystemIssue: "MDT pain team; liaison with surgical team",
    sampleCandidateWording: "The primary diagnosis to consider is inadequate pain management — a personality disorder label should not be applied prematurely",
  },
  {
    id: "sm7",
    topic: "Substance Use",
    signalName: "Prescription monitoring program check",
    signalCategory: "Legal",
    whyItMatters: "Benzodiazepine requests in the ED require checking state prescription monitoring programs to detect prescription shopping",
    relatedRisk: "Diversion; dependence; doctor shopping",
    relatedLegalIssue: "Regulatory obligations; Schedule 4/8 monitoring",
    relatedSystemIssue: "SafeScript / Prescription Shopping Information Service",
    sampleCandidateWording: "Before considering any benzodiazepine prescription, I would check the state prescription monitoring program",
  },
  {
    id: "sm8",
    topic: "Child & Adolescent",
    signalName: "Complex developmental trauma — not conduct disorder",
    signalCategory: "Clinical",
    whyItMatters: "Behavioural presentations in children with multiple out-of-home placements and family violence backgrounds represent trauma responses, not primary conduct disorder",
    relatedRisk: "Misdiagnosis; inappropriate behaviour management; polypharmacy",
    relatedLegalIssue: "Consent for treatment in state care; child protection notification",
    relatedSystemIssue: "Cultural safety; trauma-informed care; residential care staff training",
    sampleCandidateWording: "This boy's behaviour most likely represents a complex trauma response in the context of profound attachment disruption — a conduct disorder label would be premature",
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
