import React, { createContext, useContext, useState, useCallback } from "react";

export type PSStatus = "current" | "rescinded" | "archived" | "unknown";
export type PSRegion = "Australia" | "New Zealand" | "Both" | "Unknown";

export const PS_TOPIC_TAGS = [
  "Aboriginal and Torres Strait Islander mental health",
  "Māori mental health",
  "Cultural safety",
  "Trauma-informed practice",
  "Suicide prevention",
  "Rural psychiatry",
  "Child and adolescent psychiatry",
  "Forensic psychiatry",
  "Addiction",
  "ADHD",
  "Gender diversity",
  "Climate change",
  "Disasters and crises",
  "Role of psychiatrist",
  "Mental health systems",
  "Lived experience",
  "Seclusion and restraint",
  "Ethics",
  "Governance",
  "Families and carers",
  "Workforce",
  "Professionalism",
] as const;

export type PSTopicTag = (typeof PS_TOPIC_TAGS)[number];

export interface PositionStatement {
  id: string;
  title: string;
  referenceNumber: string;
  sourceUrl: string;
  lastUpdated: string;
  publishedRegion: PSRegion;
  status: PSStatus;
  topicTags: string[];
  fullTextOrNotes: string;
  shortSummary: string;
  keyPrinciples: string[];
  clinicalRelevance: string;
  meqRelevance: string;
  consultantLevelImplications: string;
  commonExamSignals: string[];
  relatedRiskDomains: string[];
  relatedLegalDomains: string[];
  relatedCulturalDomains: string[];
  relatedSystemDomains: string[];
  createdAt: string;
  reviewedAt: string;
}

export interface URLLibraryEntry {
  id: string;
  url: string;
  title: string;
  referenceNumber: string;
  addedAt: string;
  extractionStatus: "pending" | "extracted" | "manual";
  notes: string;
}

interface PSState {
  statements: PositionStatement[];
  urlLibrary: URLLibraryEntry[];
  addStatement: (s: Omit<PositionStatement, "id" | "createdAt" | "reviewedAt">) => string;
  updateStatement: (id: string, patch: Partial<PositionStatement>) => void;
  deleteStatement: (id: string) => void;
  addUrl: (entry: Omit<URLLibraryEntry, "id" | "addedAt">) => void;
  deleteUrl: (id: string) => void;
}

const PSContext = createContext<PSState | null>(null);

function uid() {
  return Math.random().toString(36).slice(2, 10);
}

function isOlderThan3Years(dateStr: string): boolean {
  if (!dateStr || dateStr === "unknown") return false;
  const d = new Date(dateStr);
  const threeYearsAgo = new Date();
  threeYearsAgo.setFullYear(threeYearsAgo.getFullYear() - 3);
  return d < threeYearsAgo;
}

export { isOlderThan3Years };

const SEED_STATEMENTS: PositionStatement[] = [
  {
    id: "ps_atsi",
    title: "Mental Health of Aboriginal and Torres Strait Islander Peoples",
    referenceNumber: "PS #48",
    sourceUrl: "https://www.ranzcp.org/clinical-guidelines-publications/clinical-guidelines-publications-detail/mental-health-of-aboriginal-and-torres-strait-islander-peoples",
    lastUpdated: "2021-01-01",
    publishedRegion: "Australia",
    status: "current",
    topicTags: ["Aboriginal and Torres Strait Islander mental health", "Cultural safety", "Trauma-informed practice", "Mental health systems"],
    shortSummary: "RANZCP affirms that Aboriginal and Torres Strait Islander peoples have the right to culturally safe, community-controlled mental health services. Psychiatrists must recognise the ongoing impact of colonisation, intergenerational trauma, and systemic racism on mental health outcomes.",
    fullTextOrNotes: "Verify full text at ranzcp.org. Key themes: cultural determinants of health, sovereignty, self-determination, cultural safety vs cultural competence distinction, Aboriginal community-controlled organisations, family and community as healing context.",
    keyPrinciples: [
      "Cultural safety is not merely communication competence — it is the elimination of racism and power imbalance in clinical encounters",
      "Aboriginal and Torres Strait Islander peoples have the right to self-determination in mental health care",
      "Colonisation, intergenerational trauma, and systemic racism are recognised social determinants of mental illness",
      "Family and community are central to healing — individual treatment models are insufficient",
      "Aboriginal mental health workers are essential to culturally safe care",
      "Forced treatment and coercive practices must be minimised and applied with cultural awareness",
    ],
    clinicalRelevance: "Every Aboriginal or Torres Strait Islander stem requires cultural safety framing, not just interpreter use. Assess impact of intergenerational trauma, kinship structures, role of community and family, and engagement with Aboriginal mental health workers.",
    meqRelevance: "MEQ stems involving Indigenous patients invariably reward: recognition of cultural safety as a clinical obligation; intergenerational trauma; kinship and community; Aboriginal health worker liaison; distrust of services due to historical harms.",
    consultantLevelImplications: "A consultant psychiatrist must advocate for community-controlled services, challenge institutional racism, ensure cultural safety in policies, and recognise that standard individual treatment models are inadequate. Systems leadership is expected.",
    commonExamSignals: [
      "Cultural safety — not just communication preference",
      "Intergenerational trauma and stolen generations history",
      "Aboriginal mental health worker engagement",
      "Kinship care and family involvement",
      "Community-controlled health service referral",
      "Distrust of government agencies based on historical harm",
      "Least restrictive care in culturally appropriate setting",
    ],
    relatedRiskDomains: ["suicide risk in Aboriginal community context", "self-neglect", "cultural dislocation as risk factor"],
    relatedLegalDomains: ["Aboriginal Child Placement Principle", "mandatory reporting and cultural context", "consent and guardianship in cultural context"],
    relatedCulturalDomains: ["intergenerational trauma", "cultural identity", "kinship obligations", "Elder status", "women's business"],
    relatedSystemDomains: ["community-controlled health organisations", "Aboriginal mental health liaison workers", "cultural safety in institutions"],
    createdAt: "2026-05-18T10:00:00",
    reviewedAt: "2026-05-18T10:00:00",
  },
  {
    id: "ps_maori",
    title: "Mental Health of Māori People in New Zealand",
    referenceNumber: "PS #57",
    sourceUrl: "https://www.ranzcp.org/clinical-guidelines-publications",
    lastUpdated: "2020-01-01",
    publishedRegion: "New Zealand",
    status: "current",
    topicTags: ["Māori mental health", "Cultural safety", "Trauma-informed practice", "Rural psychiatry"],
    shortSummary: "RANZCP affirms Te Tiriti o Waitangi obligations to Māori and supports kaupapa Māori models of mental health. Psychiatrists working in NZ must understand whānau, whakapapa, and tikanga as clinical determinants, not merely cultural background.",
    fullTextOrNotes: "Verify full text at ranzcp.org. Key themes: Te Tiriti o Waitangi obligations, whānau ora, kaupapa Māori services, taha Māori (spiritual, mental, physical, family dimensions of health).",
    keyPrinciples: [
      "Te Tiriti o Waitangi creates specific obligations for psychiatrists practising in New Zealand",
      "Whānau (extended family) is central to Māori health and healing — must be included in all care planning",
      "Kaupapa Māori mental health services should be supported and referred to where available",
      "Taha Māori encompasses spiritual, mental, physical, and family dimensions — all must be addressed",
      "Māori are over-represented in coercive psychiatric contexts — this inequity must be actively addressed",
      "Colonisation and systemic racism are determinants of Māori mental illness and must be named",
    ],
    clinicalRelevance: "MEQ stems with Māori patients require whānau involvement, taha Māori framing, kaupapa Māori services, and recognition of colonisation as a determinant of health.",
    meqRelevance: "NZ-specific stems reward recognition of Te Tiriti obligations, whānau-centred practice, over-representation in coercive psychiatric settings, and kaupapa Māori service referral.",
    consultantLevelImplications: "NZ consultant psychiatrists must actively address Māori over-representation in restrictive practices, advocate for kaupapa Māori services, and embed whānau ora in care planning.",
    commonExamSignals: [
      "Whānau involvement as clinical obligation",
      "Taha Māori (four dimensions of health)",
      "Kaupapa Māori services",
      "Te Tiriti o Waitangi obligations",
      "Coercion and over-representation — systemic inequity",
      "Cultural liaison and Māori health workers",
    ],
    relatedRiskDomains: ["colonisation as suicide risk determinant", "cultural disconnection as risk"],
    relatedLegalDomains: ["Te Tiriti o Waitangi", "Mental Health (Compulsory Assessment and Treatment) Act NZ", "involuntary treatment disparities"],
    relatedCulturalDomains: ["whakapapa", "tikanga", "whānau", "taha Māori"],
    relatedSystemDomains: ["kaupapa Māori health services", "equity in coercive practices"],
    createdAt: "2026-05-18T10:01:00",
    reviewedAt: "2026-05-18T10:01:00",
  },
  {
    id: "ps_restraint",
    title: "Restraint and Seclusion in Psychiatric Practice",
    referenceNumber: "PS #39",
    sourceUrl: "https://www.ranzcp.org/clinical-guidelines-publications",
    lastUpdated: "2019-01-01",
    publishedRegion: "Both",
    status: "current",
    topicTags: ["Seclusion and restraint", "Ethics", "Role of psychiatrist", "Mental health systems", "Lived experience", "Trauma-informed practice"],
    shortSummary: "RANZCP opposes routine use of seclusion and restraint and commits to elimination of these practices. When unavoidable, they must be used only as a last resort, for the minimum duration, with full documentation, debrief, and clinical leadership from the consultant psychiatrist.",
    fullTextOrNotes: "Verify full text at ranzcp.org. Key themes: zero target for seclusion/restraint, trauma-informed care, least restrictive environment, clinical leadership role of consultant psychiatrist, debrief obligation, documentation.",
    keyPrinciples: [
      "Seclusion and restraint are not therapeutic — they are risk management measures of last resort",
      "The goal is elimination, not reduction alone",
      "Trauma-informed care must frame all decisions about restrictive practices",
      "Consultant psychiatrist must provide clinical leadership and oversight for every episode",
      "A debrief with the patient and staff must occur after every episode",
      "Patients with lived experience of trauma are at heightened risk of harm from seclusion/restraint",
      "Aboriginal, Torres Strait Islander and Māori patients are over-represented in restrictive practices — this requires specific monitoring",
    ],
    clinicalRelevance: "MEQ governance questions about ward management, violent patient, or involuntary admission must reference least restrictive principle, trauma-informed framing, and consultant oversight role.",
    meqRelevance: "Governance, clinical leadership, and MDT MEQ stems expect candidates to demonstrate the elimination-first approach to seclusion/restraint, with specific awareness of trauma and cultural over-representation.",
    consultantLevelImplications: "A consultant must provide oversight, ensure debrief occurs, review all episodes as clinical incidents, and advocate for systemic changes to reduce restrictive practices. Cannot delegate accountability.",
    commonExamSignals: [
      "Seclusion/restraint as last resort only",
      "Least restrictive principle",
      "Consultant oversight and leadership",
      "Debrief obligation — patient and staff",
      "Trauma-informed rationale",
      "Over-representation of cultural minorities — monitor and address",
      "Documentation and clinical incident review",
    ],
    relatedRiskDomains: ["re-traumatisation from restraint", "physical harm risk during restraint", "patient safety"],
    relatedLegalDomains: ["Mental Health Act authorisation", "involuntary treatment framework", "duty of care"],
    relatedCulturalDomains: ["over-representation of Indigenous patients", "culturally safe application"],
    relatedSystemDomains: ["clinical governance", "incident reporting", "ward culture change", "MDT leadership"],
    createdAt: "2026-05-18T10:02:00",
    reviewedAt: "2026-05-18T10:02:00",
  },
  {
    id: "ps_trauma",
    title: "Trauma-Informed Practice in Psychiatry",
    referenceNumber: "PS #65",
    sourceUrl: "https://www.ranzcp.org/clinical-guidelines-publications",
    lastUpdated: "2021-06-01",
    publishedRegion: "Both",
    status: "current",
    topicTags: ["Trauma-informed practice", "Ethics", "Role of psychiatrist", "Lived experience", "Families and carers", "Mental health systems"],
    shortSummary: "RANZCP endorses trauma-informed care as a universal framework for psychiatric practice, not a specialist intervention. All psychiatrists must understand trauma's pervasive role in mental illness and apply safety, trustworthiness, choice, collaboration, and empowerment principles in every encounter.",
    fullTextOrNotes: "Verify full text at ranzcp.org. Key themes: the 5 trauma-informed principles (safety, trustworthiness, choice, collaboration, empowerment), re-traumatisation risk in clinical settings, trauma-informed assessment, complex PTSD, intergenerational trauma.",
    keyPrinciples: [
      "Trauma is pervasive — ask about trauma history in all psychiatric presentations",
      "The 5 principles: safety, trustworthiness, choice, collaboration, empowerment",
      "Clinical settings themselves can be re-traumatising — every encounter must be assessed for this risk",
      "Trauma-informed practice is a systems approach, not an individual clinical technique",
      "Complex trauma is distinct from single-event PTSD and requires different clinical framing",
      "Re-traumatisation through seclusion, restraint, coercive treatment, or dismissiveness must be actively prevented",
    ],
    clinicalRelevance: "Trauma history must be explored in all presentations. ED, inpatient, and involuntary treatment contexts carry re-traumatisation risk. Female patients, Aboriginal and Torres Strait Islander patients, and those with histories of abuse are at highest risk.",
    meqRelevance: "Stems involving inpatient admission, restrictive practices, sexual assault history, refugees, domestic violence, child protection, or complex PTSD all require trauma-informed framing. Examiner expects more than 'ask about trauma history.'",
    consultantLevelImplications: "Consultant psychiatrists must embed trauma-informed principles in ward culture, team practice, policies, and clinical supervision. Individual knowledge is insufficient — systems leadership is required.",
    commonExamSignals: [
      "Trauma history exploration as standard, not specialty",
      "Re-traumatisation risk in clinical settings",
      "Safety and trustworthiness in the clinical encounter",
      "Complex trauma — not simple PTSD",
      "Choice and empowerment in treatment planning",
      "Trauma-informed approach to seclusion/restraint decisions",
    ],
    relatedRiskDomains: ["re-traumatisation", "complex PTSD and suicide", "dissociation and self-harm"],
    relatedLegalDomains: ["mandatory reporting obligations", "informed consent in trauma context"],
    relatedCulturalDomains: ["intergenerational trauma", "colonial trauma", "refugee trauma"],
    relatedSystemDomains: ["ward culture", "MDT training", "clinical governance", "supervision"],
    createdAt: "2026-05-18T10:03:00",
    reviewedAt: "2026-05-18T10:03:00",
  },
  {
    id: "ps_suicide",
    title: "Suicide Prevention — Role of Psychiatrists and Mental Health Services",
    referenceNumber: "PS #72",
    sourceUrl: "https://www.ranzcp.org/clinical-guidelines-publications",
    lastUpdated: "2022-03-01",
    publishedRegion: "Both",
    status: "current",
    topicTags: ["Suicide prevention", "Mental health systems", "Families and carers", "Role of psychiatrist", "Rural psychiatry", "Lived experience"],
    shortSummary: "RANZCP affirms psychiatrists' core role in suicide prevention across clinical, systems, and advocacy domains. Emphasises collaborative safety planning, means restriction, family/carer involvement, and that involuntary admission is not always the appropriate response to suicide risk.",
    fullTextOrNotes: "Verify full text at ranzcp.org. Key themes: collaborative safety planning, means restriction, clinical risk assessment vs actuarial tools, family/carer role, zero suicide frameworks, rural access to crisis care, discharge safety.",
    keyPrinciples: [
      "Risk assessment tools are not predictive — clinical judgement informed by longitudinal relationship is primary",
      "Collaborative safety planning is more effective than admission alone",
      "Means restriction (guns, medications, heights) is the most effective single intervention for suicide prevention",
      "Families and carers must be involved in safety planning unless the patient explicitly refuses",
      "Involuntary admission is not always the appropriate response to suicide risk — least restrictive principle applies",
      "Discharge is a period of elevated risk — detailed safety planning and follow-up are mandatory",
      "Aboriginal, Torres Strait Islander and Māori communities have disproportionate suicide burden — culturally specific responses are required",
    ],
    clinicalRelevance: "All risk assessment stems require: dynamic vs static risk, means restriction, collaborative safety planning, family involvement, discharge safety. Examiner penalises over-reliance on admission as the only risk management strategy.",
    meqRelevance: "High-yield MEQ signal: collaborative safety planning > admission. Means restriction is often missed by candidates. Discharge planning and post-discharge follow-up are expected. Rural access and cultural dimensions are common sub-signals.",
    consultantLevelImplications: "Consultant must provide clinical oversight for high-risk discharge decisions, advocate for zero-suicide frameworks in services, and ensure culturally specific pathways for Aboriginal, Torres Strait Islander and Māori patients.",
    commonExamSignals: [
      "Collaborative safety planning — not just admission",
      "Means restriction — ask and act",
      "Least restrictive response to suicide risk",
      "Family/carer involvement in safety planning",
      "Discharge as high-risk period — mandatory follow-up plan",
      "Rural access to crisis services",
      "Aboriginal/Māori — culturally specific suicide prevention approach",
    ],
    relatedRiskDomains: ["static vs dynamic risk factors", "means access", "discharge risk", "post-discharge period"],
    relatedLegalDomains: ["duty of care at discharge", "involuntary admission criteria", "family right to information"],
    relatedCulturalDomains: ["Aboriginal suicide — community response", "Māori — whānau-centred safety planning"],
    relatedSystemDomains: ["zero-suicide frameworks", "crisis services", "rural crisis pathways", "discharge planning"],
    createdAt: "2026-05-18T10:04:00",
    reviewedAt: "2026-05-18T10:04:00",
  },
  {
    id: "ps_role_psych",
    title: "The Role of the Psychiatrist in the Healthcare System",
    referenceNumber: "PS #41",
    sourceUrl: "https://www.ranzcp.org/clinical-guidelines-publications",
    lastUpdated: "2018-01-01",
    publishedRegion: "Both",
    status: "current",
    topicTags: ["Role of psychiatrist", "Governance", "Professionalism", "Mental health systems", "Workforce", "Ethics"],
    shortSummary: "RANZCP defines the core roles of the psychiatrist: clinical expert, communicator, collaborator, manager, advocate, scholar, and professional. In MDT settings, the psychiatrist holds specific accountabilities in diagnosis, risk, legal obligations, and clinical governance.",
    fullTextOrNotes: "Verify full text at ranzcp.org. Key themes: CanMEDS framework, consultant accountability, MDT leadership, interface with GPs and specialists, advocacy role, governance obligations.",
    keyPrinciples: [
      "The psychiatrist is the accountable clinician for diagnosis, risk formulation, and treatment direction — this cannot be fully delegated",
      "The psychiatrist holds specific medico-legal obligations that persist regardless of MDT structure",
      "Advocacy — for individual patients and for systemic change — is a core professional responsibility",
      "Collaboration with GPs, allied health, emergency medicine, and community services is essential",
      "Clinical governance participation is a professional obligation, not optional",
      "The psychiatrist must demonstrate leadership in MDT conflict and disagreement",
      "Impaired colleagues must be reported — professional responsibility supersedes collegial loyalty",
    ],
    clinicalRelevance: "Governance and MDT stems require candidates to demonstrate clear understanding of the psychiatrist's non-delegable accountability. Examiner expects leadership of MDT conflict, not deferral. AHPRA obligations and mandatory reporting of impaired colleagues are key signals.",
    meqRelevance: "High-yield in governance MEQs: psychiatrist cannot simply follow the MDT recommendation if it is clinically wrong. Consultant accountability for risk, diagnosis, and legal decisions is explicit. Advocacy and reporting duties are expected.",
    consultantLevelImplications: "The consultant psychiatrist must provide active clinical leadership, not passive oversight. In MDT conflict, the consultant must articulate a clear clinical position and document it. Governance reporting is a professional obligation.",
    commonExamSignals: [
      "Consultant's non-delegable accountability",
      "MDT leadership when conflict arises",
      "Clinical governance participation",
      "Impaired colleague — AHPRA mandatory reporting",
      "Advocacy for patient and system-level change",
      "Interface with GPs and specialists — communicator role",
    ],
    relatedRiskDomains: ["risk formulation as consultant responsibility", "clinical governance as patient safety"],
    relatedLegalDomains: ["AHPRA obligations", "mandatory reporting of impairment", "medico-legal accountability"],
    relatedCulturalDomains: ["cultural safety as institutional role"],
    relatedSystemDomains: ["MDT structure", "clinical governance", "quality improvement", "root cause analysis"],
    createdAt: "2026-05-18T10:05:00",
    reviewedAt: "2026-05-18T10:05:00",
  },
  {
    id: "ps_rural",
    title: "Psychiatry in Rural and Remote Areas",
    referenceNumber: "PS #28",
    sourceUrl: "https://www.ranzcp.org/clinical-guidelines-publications",
    lastUpdated: "2017-01-01",
    publishedRegion: "Both",
    status: "current",
    topicTags: ["Rural psychiatry", "Mental health systems", "Workforce", "Governance", "Aboriginal and Torres Strait Islander mental health"],
    shortSummary: "RANZCP affirms that people in rural and remote areas have the right to equivalent mental health care as those in metropolitan areas. Psychiatrists have an obligation to support service equity through telehealth, consultation, advocacy, and workforce development.",
    fullTextOrNotes: "Verify full text at ranzcp.org. Key themes: service equity, telehealth, visiting specialist roles, workforce shortages, over-representation of Aboriginal and Torres Strait Islander peoples in rural areas, dual relationships in small communities.",
    keyPrinciples: [
      "Rural and remote patients have the right to equivalent psychiatric care — geographic location must not determine quality",
      "Telehealth is a legitimate and important modality for rural psychiatric service delivery",
      "Visiting psychiatrists must be aware of dual relationship risks in small communities",
      "Aboriginal and Torres Strait Islander peoples, who are over-represented in rural areas, require specific cultural considerations",
      "Workforce shortages in rural areas are a systems responsibility — psychiatrists must advocate",
      "Confidentiality is more complex in small communities — must be explicitly managed",
    ],
    clinicalRelevance: "Rural stems require resource-limitation awareness, telehealth framing, dual relationship risks, and equity advocacy. Examiner expects candidates to adapt clinical approach to resource context, not simply apply metropolitan models.",
    meqRelevance: "Rural and remote stems reward: equity framing, telehealth adaptation, dual relationships, limited specialist resources, Aboriginal community specific considerations, and advocacy for systemic improvement.",
    consultantLevelImplications: "Rural consultant psychiatrists must advocate for service equity, use telehealth proactively, be explicit about dual relationship management, and provide consultation support to GPs and allied health as force multipliers.",
    commonExamSignals: [
      "Service equity — rural patient deserves same standard of care",
      "Telehealth as legitimate clinical modality",
      "Dual relationships — explicit management in small communities",
      "Adapt clinical approach to resource limitations",
      "Advocacy for rural workforce and service development",
      "Aboriginal and Torres Strait Islander over-representation in rural areas",
    ],
    relatedRiskDomains: ["limited emergency services in rural areas", "delayed specialist access as risk"],
    relatedLegalDomains: ["telehealth consent and prescribing obligations", "MHA in remote contexts"],
    relatedCulturalDomains: ["Aboriginal community-controlled services in rural areas", "community knowledge of patient history"],
    relatedSystemDomains: ["visiting specialist models", "GP consultation", "telehealth infrastructure", "workforce advocacy"],
    createdAt: "2026-05-18T10:06:00",
    reviewedAt: "2026-05-18T10:06:00",
  },
  {
    id: "ps_families",
    title: "Families and Carers of People with Mental Illness",
    referenceNumber: "PS #42",
    sourceUrl: "https://www.ranzcp.org/clinical-guidelines-publications",
    lastUpdated: "2018-06-01",
    publishedRegion: "Both",
    status: "current",
    topicTags: ["Families and carers", "Ethics", "Mental health systems", "Lived experience", "Role of psychiatrist"],
    shortSummary: "RANZCP affirms that families and carers are partners in mental health care, not obstacles to patient autonomy. Psychiatrists must proactively engage families, provide psychoeducation, balance patient confidentiality with carer information needs, and actively address carer burden.",
    fullTextOrNotes: "Verify full text at ranzcp.org. Key themes: families as partners, confidentiality vs carer information needs, psychoeducation, carer burden, family meeting as standard practice, carer's own mental health.",
    keyPrinciples: [
      "Families and carers are partners in care — their involvement must be proactively facilitated",
      "Confidentiality and family involvement are not mutually exclusive — clinicians must navigate both",
      "Psychoeducation for families is a clinical obligation, not an optional extra",
      "Carer burden must be assessed and addressed — carers have their own mental health needs",
      "Family meetings are standard clinical practice, not an emergency intervention",
      "Families and carers should not be given clinical information that the patient has explicitly withheld consent for",
      "Carers' information needs can often be met without disclosing patient-specific confidential information",
    ],
    clinicalRelevance: "All MEQ stems involving families require: proactive engagement, psychoeducation, confidentiality navigation, and carer burden assessment. Examiner penalises either dismissing family or breaching confidentiality to appease family.",
    meqRelevance: "High-yield: balancing patient autonomy with family information needs; carer burden as a separate clinical problem; psychoeducation for families; family meeting as clinical intervention.",
    consultantLevelImplications: "Consultant psychiatrists must model family partnership in their practice, ensure families receive psychoeducation, and actively assess carer mental health and burden. Families should not be used as surveillance tools.",
    commonExamSignals: [
      "Families as partners — proactive engagement",
      "Confidentiality navigation — what can be shared without breaching",
      "Psychoeducation as clinical obligation",
      "Carer burden assessment and referral",
      "Family meeting as standard practice",
      "Carers' own mental health — separate clinical concern",
    ],
    relatedRiskDomains: ["carer burnout as risk to patient safety", "family violence in care relationship"],
    relatedLegalDomains: ["confidentiality and family information sharing", "involuntary admission and family rights"],
    relatedCulturalDomains: ["cultural variation in family involvement norms", "kinship obligations"],
    relatedSystemDomains: ["family and carer services", "psychoeducation programmes", "respite care"],
    createdAt: "2026-05-18T10:07:00",
    reviewedAt: "2026-05-18T10:07:00",
  },
  {
    id: "ps_gender",
    title: "Recognising and Addressing the Mental Health Needs of People who are Gender Diverse",
    referenceNumber: "PS #103",
    sourceUrl: "https://www.ranzcp.org/clinical-guidelines-publications",
    lastUpdated: "2021-11-01",
    publishedRegion: "Both",
    status: "current",
    topicTags: ["Gender diversity", "Ethics", "Child and adolescent psychiatry", "Lived experience", "Role of psychiatrist"],
    shortSummary: "RANZCP affirms that gender diversity is not a mental disorder. Psychiatrists must provide affirming, respectful care that supports gender-diverse people to access appropriate assessment and care, and must not apply conversion practices under any circumstances.",
    fullTextOrNotes: "Verify full text at ranzcp.org. Key themes: gender affirmative care, conversion practices prohibition, assessment vs gatekeeping, adolescent gender diversity, informed consent model, mental health comorbidities as separate from gender diversity.",
    keyPrinciples: [
      "Gender diversity is not a mental disorder — pathologisation is rejected",
      "Conversion practices — including covert or implicit attempts to change gender identity — are condemned",
      "Psychiatrists must provide affirming, respectful care regardless of personal beliefs",
      "Mental health comorbidities in gender-diverse people must be addressed on their own terms, not conflated with gender identity",
      "Adolescent gender diversity requires developmentally informed, affirming assessment without gatekeeping",
      "Informed consent is the primary framework — lengthy gatekeeping is not supported by evidence",
    ],
    clinicalRelevance: "Stems involving gender-diverse patients require affirming care framing, prohibition of conversion practices, and clear separation of mental health comorbidities from gender identity. Examiner penalises any conflation of gender diversity with mental disorder.",
    meqRelevance: "Gender diversity stems reward: affirming language, prohibition of conversion practices, adolescent-specific framing, mental health comorbidities as separate from gender identity, and understanding of informed consent model.",
    consultantLevelImplications: "Consultant psychiatrists must ensure service-level affirming care policies, train staff in gender-affirming approaches, and never authorise conversion practices in any form. Advocacy for policy change is expected.",
    commonExamSignals: [
      "Gender diversity — not a mental disorder",
      "Conversion practices — prohibited absolutely",
      "Affirming, respectful care",
      "Mental health comorbidities as separate from gender identity",
      "Adolescent — developmentally informed affirming assessment",
      "Informed consent model — not lengthy gatekeeping",
    ],
    relatedRiskDomains: ["suicide risk in gender-diverse people — affirming care as protective factor", "minority stress model"],
    relatedLegalDomains: ["conversion practices legislation", "adolescent consent for gender care", "discrimination law"],
    relatedCulturalDomains: ["cultural variation in gender norms", "religious and community context"],
    relatedSystemDomains: ["gender-affirming services", "multidisciplinary gender clinics", "staff training"],
    createdAt: "2026-05-18T10:08:00",
    reviewedAt: "2026-05-18T10:08:00",
  },
];

const SEED_URLS: URLLibraryEntry[] = [
  {
    id: "url_ranzcp_ps",
    url: "https://www.ranzcp.org/clinical-guidelines-publications/position-statements",
    title: "RANZCP Position Statements — Full Library",
    referenceNumber: "",
    addedAt: "2026-05-18T10:00:00",
    extractionStatus: "manual",
    notes: "Official RANZCP position statement library. Verify all reference numbers and last-updated dates here.",
  },
];

export function PositionStatementProvider({ children }: { children: React.ReactNode }) {
  const [statements, setStatements] = useState<PositionStatement[]>(SEED_STATEMENTS);
  const [urlLibrary, setUrlLibrary] = useState<URLLibraryEntry[]>(SEED_URLS);

  const addStatement = useCallback(
    (s: Omit<PositionStatement, "id" | "createdAt" | "reviewedAt">) => {
      const id = uid();
      const now = new Date().toISOString();
      setStatements((prev) => [...prev, { ...s, id, createdAt: now, reviewedAt: now }]);
      return id;
    },
    []
  );

  const updateStatement = useCallback((id: string, patch: Partial<PositionStatement>) => {
    setStatements((prev) =>
      prev.map((s) => (s.id === id ? { ...s, ...patch, reviewedAt: new Date().toISOString() } : s))
    );
  }, []);

  const deleteStatement = useCallback((id: string) => {
    setStatements((prev) => prev.filter((s) => s.id !== id));
  }, []);

  const addUrl = useCallback((entry: Omit<URLLibraryEntry, "id" | "addedAt">) => {
    setUrlLibrary((prev) => [
      ...prev,
      { ...entry, id: uid(), addedAt: new Date().toISOString() },
    ]);
  }, []);

  const deleteUrl = useCallback((id: string) => {
    setUrlLibrary((prev) => prev.filter((u) => u.id !== id));
  }, []);

  return (
    <PSContext.Provider value={{ statements, urlLibrary, addStatement, updateStatement, deleteStatement, addUrl, deleteUrl }}>
      {children}
    </PSContext.Provider>
  );
}

export function usePS() {
  const ctx = useContext(PSContext);
  if (!ctx) throw new Error("usePS must be used inside PositionStatementProvider");
  return ctx;
}

export const STATUS_LABELS: Record<PSStatus, string> = {
  current: "Current",
  rescinded: "Rescinded",
  archived: "Archived",
  unknown: "Unknown",
};

export const REGION_LABELS: Record<PSRegion, string> = {
  Australia: "Australia",
  "New Zealand": "New Zealand",
  Both: "Australia & NZ",
  Unknown: "Unknown",
};
