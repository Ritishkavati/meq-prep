// ============================================================
// PERINATAL QUESTIONS — PER_STEMS
// ============================================================

import { QuizStem } from "../quizData";

export const PER_STEMS: QuizStem[] = [
  {
    id: "PER-001",
    topic: "perinatal",
    difficulty: "consultant",
    title: "Postpartum Psychosis — Discharge Summary Missing Child Safety",
    candidateRole: "Consultant perinatal psychiatrist, mother-baby unit",
    setting: "Mother-baby unit, metropolitan hospital — co-sign review",
    stem: `You are the consultant perinatal psychiatrist. A discharge summary for Aisha, a 29-year-old Somali-Australian woman, is awaiting your co-signature. Aisha was admitted six weeks ago following a postpartum psychotic episode — her first psychiatric presentation — three weeks after the birth of her daughter Lily. She responded well to olanzapine and is being discharged home with her baby.

The discharge summary reads: "Aisha's mental state has significantly improved. She is currently euthymic with good insight. She is bonding appropriately with Lily. Diagnosis: brief psychotic episode. Plan: continue olanzapine 10mg. Follow up with perinatal outpatient clinic in 4 weeks. GP to monitor."

The summary does not name Lily or include a child safety assessment. Breastfeeding and olanzapine compatibility is not addressed. There is no relapse prevention plan specific to the perinatal context and no contingency plan if Aisha deteriorates at home.

You note from the referral documentation that Aisha arrived in Australia from Somalia three years ago, has no extended family in Australia, and her husband works long hours and was not involved in the admission. The registrar who wrote the summary asks you to co-sign so Aisha can go home today.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Do not co-sign — child safety assessment absent",
        category: "child_protection",
        severity: "critical",
        clueInStem: "The summary does not name Lily or include a child safety assessment.",
        whyItMatters: "Any discharge from a mother-baby unit requires explicit documentation of the infant's safety assessment, parenting capacity observations, and a child safeguarding plan. Lily is a vulnerable third party — co-signing without this creates medico-legal exposure and infant safety risk.",
        modelWording: "I will not co-sign this summary. Lily must be named and a child safety assessment documented — including parenting capacity observations during the six-week admission, infant attachment quality, and a specific community safety plan for Lily.",
        keywords: ["lily", "child safety", "infant", "not co-sign", "parenting capacity", "safeguarding", "child assessment", "named"],
      },
      {
        id: "s2",
        name: "Postpartum psychosis relapse risk — no perinatal relapse prevention plan",
        category: "risk_self",
        severity: "critical",
        clueInStem: "postpartum psychotic episode — her first psychiatric presentation",
        whyItMatters: "Postpartum psychosis carries a 50% recurrence risk in subsequent pregnancies and significant relapse risk in the months after the current episode. A perinatal-specific relapse prevention plan is essential — its absence makes this discharge clinically unsafe.",
        modelWording: "A perinatal-specific relapse prevention plan must be written before discharge: agreed early warning signs, crisis escalation pathway, what to do if Aisha deteriorates at home alone with Lily, and guidance for any future pregnancy.",
        keywords: ["relapse prevention", "postpartum", "perinatal", "early warning", "recurrence", "future pregnancy", "contingency", "50 percent"],
      },
      {
        id: "s3",
        name: "Olanzapine and breastfeeding not addressed",
        category: "physical_health",
        severity: "critical",
        clueInStem: "continue olanzapine 10mg",
        whyItMatters: "Prescribing olanzapine at discharge without addressing breastfeeding is a clinical documentation failure. If Aisha is breastfeeding, infant exposure through breast milk must be discussed and documented. The risk-benefit discussion and Aisha's informed decision must be recorded.",
        modelWording: "The olanzapine and breastfeeding decision must be explicitly documented — the risk-benefit discussion, Aisha's informed decision, and any infant monitoring requirements must be written before discharge.",
        keywords: ["breastfeeding", "olanzapine", "breast milk", "lactation", "infant exposure", "breastfeed", "medication safety", "informed decision"],
      },
      {
        id: "s4",
        name: "Social isolation — Somali background, no family, husband not involved",
        category: "cultural_safety",
        severity: "critical",
        clueInStem: "arrived in Australia from Somalia three years ago, has no extended family in Australia, and her husband works long hours and was not involved in the admission.",
        whyItMatters: "Aisha is being discharged into profound social isolation with a newborn. The highest-risk period after postpartum psychosis is when a mother is alone with her infant. The discharge plan must explicitly address who will be present, what support is in place, and what happens if she deteriorates alone with Lily.",
        modelWording: "The discharge plan must explicitly address Aisha's home situation — no Australian family network, husband absent throughout admission, newborn infant. Who will be present in the first weeks? What community supports are arranged? What is the plan if she deteriorates alone with Lily?",
        keywords: ["social isolation", "no family", "husband", "alone", "support", "somali", "cultural", "community support", "isolated"],
      },
      {
        id: "s5",
        name: "Four-week follow-up is too long",
        category: "disposition",
        severity: "important",
        clueInStem: "Follow up with perinatal outpatient clinic in 4 weeks.",
        whyItMatters: "The highest-risk period after postpartum psychosis discharge is the first one to two weeks. Four weeks is clinically unsafe — community perinatal team contact within 48-72 hours and clinical review within one week is the standard of care.",
        modelWording: "Four-week follow-up is clinically insufficient for postpartum psychosis discharge. I will change this to community perinatal team contact within 48-72 hours and clinical review within one week before co-signing.",
        keywords: ["four weeks", "too long", "48 hours", "72 hours", "one week", "community", "perinatal", "follow-up insufficient"],
      },
      {
        id: "s6",
        name: "Teaching opportunity — registrar needs perinatal discharge standards",
        category: "governance",
        severity: "important",
        clueInStem: "The registrar who wrote the summary asks you to co-sign so Aisha can go home today.",
        whyItMatters: "This is a supervision opportunity. The registrar needs to understand why perinatal discharge documentation has a higher standard — the infant's life and Aisha's safety depend on getting this right.",
        modelWording: "I will supervise the registrar in rewriting this summary — explaining what a perinatal discharge requires and why each element protects Aisha and Lily. Co-signing an inadequate summary is not an option regardless of time pressure.",
        keywords: ["teach", "supervision", "registrar", "perinatal standard", "co-sign", "educate", "rewrite"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3", "s4"],
      secondary: ["s5", "s6"],
      lowYield: [],
    },
    modelAnswer: `I will not co-sign this summary. I will return it to the registrar with required additions before discharge proceeds.

Child safety: Lily must be named and a child safety assessment documented — including parenting capacity observations from the six-week admission, infant attachment quality, and a specific community safety plan for Lily.

Breastfeeding: The olanzapine and breastfeeding decision must be explicitly documented — the risk-benefit discussion, Aisha's informed decision, and any infant monitoring plan.

Relapse prevention: A perinatal-specific relapse prevention plan must be written — agreed early warning signs, crisis escalation pathway, what to do if she deteriorates at home with Lily, and guidance for any future pregnancy. Postpartum psychosis carries a 50% recurrence risk in subsequent pregnancies.

Social isolation: The discharge plan must explicitly address Aisha's home situation. No Australian family, husband absent throughout admission, newborn infant — who will be present? What community supports are arranged? What is the plan if she deteriorates alone with Lily?

Follow-up: Four weeks is clinically unsafe. Community perinatal team contact within 48-72 hours and clinical review within one week is the minimum standard after postpartum psychosis discharge.

Teaching: I will supervise the registrar in rewriting this summary before any co-signature occurs.`,
  },

  {
    id: "PER-002",
    topic: "perinatal",
    difficulty: "consultant",
    title: "Antenatal Depression — Medication, Foetal Risk and Domestic Violence",
    candidateRole: "Consultant psychiatrist, perinatal mental health service",
    setting: "Perinatal outpatient clinic, metropolitan hospital",
    stem: `You are the consultant psychiatrist in a perinatal mental health service. You are reviewing Mei, a 32-year-old Chinese-Australian woman referred by her obstetrician at 18 weeks gestation. She has a history of recurrent major depressive disorder and was stable on sertraline 100mg before conception. She stopped sertraline at six weeks gestation "because I read online it harms the baby."

Mei reports worsening low mood, inability to sleep, poor appetite and passive suicidal ideation: "Sometimes I think everyone would be better off without me." Her husband has accompanied her today but sits with his arms crossed and answers questions directed at Mei before she can respond. When Mei is seen alone, she becomes tearful and quietly discloses that her husband has been "pushing and grabbing" her during arguments since the pregnancy began. She asks you not to document this.

The obstetrician's referral letter notes the foetus has mild growth restriction on the last scan. Mei's mother, who is visiting from China, is the only local support and speaks no English.`,
    totalMarks: 25,
    signals: [
      {
        id: "s1",
        name: "Domestic violence — mandatory consideration and safety planning",
        category: "immediate_safety",
        severity: "critical",
        clueInStem: "husband has been pushing and grabbing her during arguments since the pregnancy began.",
        whyItMatters: "Domestic violence escalates during pregnancy and is a leading cause of maternal mortality. Mei's disclosure requires immediate safety assessment, safety planning, and consideration of mandatory reporting obligations. Her request not to document cannot override safety obligations.",
        modelWording: "Mei's disclosure of physical violence during pregnancy is the immediate priority. I must assess the frequency, severity and pattern of violence, Mei's immediate safety, the safety plan, and whether mandatory reporting obligations apply in this jurisdiction.",
        keywords: ["domestic violence", "pushing", "grabbing", "safety plan", "mandatory reporting", "family violence", "pregnancy violence", "immediate safety"],
      },
      {
        id: "s2",
        name: "Passive suicidal ideation in pregnancy — risk assessment required",
        category: "risk_self",
        severity: "critical",
        clueInStem: "Sometimes I think everyone would be better off without me.",
        whyItMatters: "Passive suicidal ideation in a pregnant woman with untreated depression, domestic violence, and social isolation represents significant risk to both Mei and the foetus. This must be directly assessed — not normalised as pregnancy-related mood change.",
        modelWording: "Passive suicidal ideation in a pregnant woman with untreated MDD, domestic violence, and social isolation requires direct risk assessment: intent, plan, means, protective factors including attachment to the foetus, and capacity to engage with safety planning.",
        keywords: ["suicidal ideation", "passive suicidal", "better off without me", "risk assessment", "pregnancy", "foetal risk", "maternal suicide"],
      },
      {
        id: "s3",
        name: "Untreated MDD in pregnancy — foetal and maternal risk of non-treatment",
        category: "physical_health",
        severity: "critical",
        clueInStem: "stopped sertraline at six weeks gestation because I read online it harms the baby.",
        whyItMatters: "Untreated depression in pregnancy causes foetal growth restriction, preterm birth, and impaired foetal neurodevelopment — risks that exceed the well-established safety profile of sertraline in pregnancy. Mei's decision was based on misinformation that must be corrected.",
        modelWording: "The risks of untreated depression in pregnancy — including foetal growth restriction already present — exceed the risks of sertraline at therapeutic doses. I will provide evidence-based psychoeducation about antidepressant safety in pregnancy and discuss restarting sertraline.",
        keywords: ["sertraline", "antidepressant", "pregnancy", "foetal risk", "untreated depression", "misinformation", "growth restriction", "evidence-based"],
      },
      {
        id: "s4",
        name: "Husband's controlling behaviour in consultation — collateral unreliable",
        category: "collateral",
        severity: "important",
        clueInStem: "husband sits with arms crossed and answers questions directed at Mei before she can respond.",
        whyItMatters: "A partner who answers questions on behalf of the patient in a medical consultation is a red flag for coercive control. Any collateral history from the husband is unreliable and Mei's true presentation could only be assessed when seen alone.",
        modelWording: "The husband's behaviour of answering for Mei is a clinical red flag for coercive control. All future consultations must include time alone with Mei. Collateral history from the husband must be treated with caution.",
        keywords: ["coercive control", "husband answering", "seen alone", "collateral unreliable", "controlling behaviour", "consultation", "red flag"],
      },
      {
        id: "s5",
        name: "Cultural context — Chinese-Australian, stigma, family pressure",
        category: "cultural_safety",
        severity: "important",
        clueInStem: "Chinese-Australian woman; mother visiting from China; speaks no English.",
        whyItMatters: "Cultural beliefs about mental illness, medication in pregnancy, and domestic violence may significantly affect Mei's engagement with treatment and her ability to safety plan. The mother's presence is both a support and a potential barrier depending on family dynamics.",
        modelWording: "Mei's Chinese-Australian background requires culturally sensitive engagement — exploring cultural beliefs about depression, medication, and domestic violence without assumptions. The mother's role must be assessed: is she a protective factor or does she reinforce minimisation of the violence?",
        keywords: ["cultural", "chinese", "stigma", "family pressure", "cultural safety", "mother", "beliefs", "medication beliefs"],
      },
      {
        id: "s6",
        name: "Foetal wellbeing — growth restriction linked to maternal distress",
        category: "risk_vulnerable",
        severity: "important",
        clueInStem: "foetus has mild growth restriction on the last scan.",
        whyItMatters: "Foetal growth restriction in the context of untreated maternal depression, domestic violence, and nutritional compromise is a clinical signal requiring obstetric coordination and urgent treatment of contributing factors.",
        modelWording: "Foetal growth restriction in this context is likely multifactorial — untreated depression, domestic violence stress, poor appetite, and possible nutritional deficiency all contribute. I will coordinate with obstetrics and recommend urgent treatment of the depression.",
        keywords: ["foetal growth restriction", "foetus", "foetal wellbeing", "obstetric", "coordination", "growth", "scan", "unborn"],
      },
      {
        id: "s7",
        name: "Confidentiality limits — request not to document domestic violence",
        category: "ethics",
        severity: "important",
        clueInStem: "She asks you not to document this.",
        whyItMatters: "Mei's request not to document the violence creates an ethical tension between confidentiality and the duty of care to her and the foetus. The clinician cannot agree to omit clinically relevant safety information from the medical record.",
        modelWording: "I will explain to Mei that I cannot omit clinically relevant safety information from the medical record — but I will discuss with her how it is documented and what happens next. Her concerns about the consequences of documentation must be heard and addressed.",
        keywords: ["confidentiality", "not document", "request", "limits", "ethics", "safety information", "medical record", "duty of care"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3"],
      secondary: ["s4", "s5", "s6"],
      lowYield: ["s7"],
    },
    modelAnswer: `Domestic violence is the immediate priority. Mei has disclosed physical violence during pregnancy — pushing and grabbing since conception began. I will assess frequency, severity, escalation, immediate safety, and safety planning. Her request not to document cannot be honoured but I will discuss with her how this is recorded and what support is available.

Suicidal ideation: Passive suicidal ideation in a pregnant woman with untreated MDD, domestic violence, and social isolation requires direct risk assessment — intent, plan, means, and protective factors including attachment to the foetus.

Sertraline in pregnancy: Mei stopped sertraline based on online misinformation. The risks of untreated depression — including the foetal growth restriction already present — exceed the well-established safety profile of sertraline at therapeutic doses. I will provide evidence-based psychoeducation and discuss restarting.

Husband: His behaviour of answering Mei's questions is a red flag for coercive control. All future consultations must include time alone with Mei. Collateral from the husband is unreliable.

Cultural context: Mei's Chinese-Australian background requires culturally sensitive engagement about depression, medication safety, and domestic violence. The mother's role — support or minimisation — needs assessment.

Foetal wellbeing: Growth restriction in this context is multifactorial and requires urgent obstetric coordination alongside treatment of the depression.

MDT: Perinatal social work, obstetrics, domestic violence service, and the GP must all be involved.`,
  },

  {
    id: "PER-003",
    topic: "perinatal",
    difficulty: "consultant",
    title: "Perinatal OCD — Intrusive Thoughts About Harming Infant",
    candidateRole: "Consultant psychiatrist, perinatal mental health outpatient service",
    setting: "Perinatal outpatient clinic",
    stem: `You are the consultant psychiatrist in a perinatal mental health service. You are reviewing Grace, a 27-year-old first-time mother referred by her GP at six weeks postpartum. Her baby son Oliver is with her in the clinic.

Grace is tearful and has been reluctant to speak. She eventually discloses that she has been having intrusive thoughts about harming Oliver — specifically about dropping him or stabbing him with kitchen knives. She says, "I would never do it. These thoughts terrify me. I spend hours checking on him to make sure he is okay. I have hidden all the sharp objects in the house." She has not told her husband because "he will think I am a monster and take Oliver away."

Her GP's referral letter notes she had significant health anxiety before the pregnancy and took fluoxetine for two years in her mid-twenties. The GP writes: "please assess — very worried she may be at risk of harming the baby."

Grace has not slept more than two to three hours per night since the birth. She appears anxious and exhausted but her mental state is otherwise unremarkable. She is breastfeeding and is highly distressed by the prospect of medication.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Perinatal OCD — not psychosis, not high-risk infanticide",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "These thoughts terrify me. I spend hours checking on him to make sure he is okay. I have hidden all the sharp objects.",
        whyItMatters: "Ego-dystonic intrusive thoughts about harming the infant, accompanied by checking compulsions and avoidance, are characteristic of perinatal OCD — not psychosis and not genuine infanticide intent. Misclassifying this as a child protection emergency would be harmful and incorrect.",
        modelWording: "Grace's presentation is characteristic of perinatal OCD: ego-dystonic intrusive thoughts that terrify her, checking rituals, and avoidance behaviour. This is not psychosis and not genuine infanticide intent — the distress and checking are themselves diagnostic.",
        keywords: ["perinatal OCD", "ego-dystonic", "intrusive thoughts", "not psychosis", "not infanticide", "checking", "avoidance", "OCD diagnosis"],
      },
      {
        id: "s2",
        name: "Distinguish from command hallucinations or postpartum psychosis",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "I would never do it. These thoughts terrify me.",
        whyItMatters: "The differential diagnosis must exclude postpartum psychosis with command hallucinations instructing harm to the infant — a genuinely high-risk presentation requiring immediate action. The ego-dystonic quality and checking behaviour effectively exclude this.",
        modelWording: "I must explicitly exclude postpartum psychosis with command hallucinations — the key differentiator is ego-syntonicity. In OCD, the thoughts are unwanted and terrifying. In psychosis, they may be experienced as instructions or as externally imposed. Grace's presentation is clearly OCD.",
        keywords: ["command hallucinations", "postpartum psychosis", "differential", "ego-syntonic", "ego-dystonic", "exclude psychosis", "distinguish"],
      },
      {
        id: "s3",
        name: "Child protection threshold — not met in perinatal OCD without intent",
        category: "child_protection",
        severity: "critical",
        clueInStem: "please assess — very worried she may be at risk of harming the baby.",
        whyItMatters: "The GP's framing of this as a child protection risk reflects a common clinical error — perinatal OCD with ego-dystonic intrusive thoughts does not meet the threshold for child protection notification. Acting on this misunderstanding would be traumatic and counterproductive.",
        modelWording: "The GP's concern, though understandable, reflects a misunderstanding of perinatal OCD. Ego-dystonic intrusive thoughts in a mother who is actively protecting her infant do not meet the threshold for child protection notification. I will explain this to the GP clearly.",
        keywords: ["child protection", "threshold", "not met", "OCD", "ego-dystonic", "no intent", "GP education", "misunderstanding"],
      },
      {
        id: "s4",
        name: "Sleep deprivation as maintaining factor",
        category: "physical_health",
        severity: "important",
        clueInStem: "has not slept more than two to three hours per night since the birth.",
        whyItMatters: "Severe sleep deprivation at six weeks postpartum maintains and worsens OCD symptoms, anxiety, and cognitive rigidity. Addressing sleep is a clinical priority alongside specific OCD treatment.",
        modelWording: "Severe sleep deprivation is maintaining Grace's OCD symptoms. Sleep support — through partner involvement, sleep consolidation strategies, and consideration of brief pharmacological support compatible with breastfeeding — is an immediate treatment priority.",
        keywords: ["sleep deprivation", "two to three hours", "sleep", "maintaining factor", "OCD", "anxiety", "breastfeeding", "postpartum"],
      },
      {
        id: "s5",
        name: "Husband not told — social support absent, shame driving isolation",
        category: "family_carer",
        severity: "important",
        clueInStem: "I have not told my husband because he will think I am a monster and take Oliver away.",
        whyItMatters: "Grace is managing this alone due to shame and fear. Her husband is a potential protective factor who is being excluded by stigma. Psychoeducation for both Grace and her husband about perinatal OCD is essential for recovery.",
        modelWording: "Grace's isolation is driven by shame and catastrophic fear about her husband's reaction. With her consent, I will offer to involve her husband — explaining perinatal OCD to him would likely be protective rather than harmful.",
        keywords: ["husband", "shame", "isolation", "not told", "stigma", "family support", "psychoeducation", "involve partner"],
      },
      {
        id: "s6",
        name: "Medication in breastfeeding — fluoxetine history, distress about medication",
        category: "consent_refusal",
        severity: "important",
        clueInStem: "She is breastfeeding and is highly distressed by the prospect of medication.",
        whyItMatters: "Grace's distress about medication must be taken seriously and addressed with accurate information. SSRIs have established safety profiles in breastfeeding. Her previous positive response to fluoxetine is clinically relevant. The risks of untreated perinatal OCD — including functional impairment and impact on mother-infant bonding — must be weighed.",
        modelWording: "Grace's concern about medication in breastfeeding is understandable and must be addressed with evidence — SSRIs including sertraline and her previously effective fluoxetine have established safety profiles in breastfeeding. The decision must be hers, informed by accurate information.",
        keywords: ["medication", "breastfeeding", "fluoxetine", "sertraline", "SSRI", "safety profile", "distress about medication", "informed decision"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3"],
      secondary: ["s4", "s5", "s6"],
      lowYield: [],
    },
    modelAnswer: `This is perinatal OCD, not postpartum psychosis and not a child protection emergency.

The diagnostic key: Grace's thoughts are ego-dystonic — they terrify her, she checks compulsively, she has hidden sharp objects. These are OCD symptoms, not psychotic command hallucinations. The distress and checking behaviour are themselves diagnostic.

I must address the GP's concern clearly: ego-dystonic intrusive thoughts in a mother who is actively protecting her infant do not meet the threshold for child protection notification. Acting on this misunderstanding would traumatise Grace and damage the therapeutic alliance.

Treatment: Evidence-based treatment for perinatal OCD is CBT with ERP. SSRIs — including her previously effective fluoxetine — have established safety profiles in breastfeeding. I will provide accurate information and involve Grace in the decision.

Sleep: Severe sleep deprivation is maintaining her symptoms. Addressing sleep through partner involvement and sleep consolidation is an immediate priority.

Husband: With Grace's consent I will offer to involve her husband with psychoeducation — his understanding of OCD is likely to be protective rather than threatening.

Follow-up: Weekly review until symptoms are under control, then monitor through the perinatal period.`,
  },

  {
    id: "PER-004",
    topic: "perinatal",
    difficulty: "consultant",
    title: "Bipolar Disorder in Pregnancy — Medication Dilemma and Consent",
    candidateRole: "Consultant psychiatrist, perinatal mental health service",
    setting: "Perinatal outpatient clinic, 14 weeks gestation",
    stem: `You are the consultant psychiatrist in a perinatal mental health service. You are reviewing Natasha, a 34-year-old woman at 14 weeks gestation with a 10-year history of bipolar I disorder. She has had three severe manic episodes, one of which required a forensic psychiatric admission after she assaulted a family member. She has been stable on lithium 800mg daily for four years.

Natasha tells you she stopped lithium four weeks ago "because I read that it causes heart defects." She has not told her obstetrician. She says, "I feel completely fine. I don't think I need medication in pregnancy." Her partner is visibly worried and says, "Last time she stopped lithium without telling anyone, she was manic within six weeks. I can't go through that again."

An urgent FBC and lithium level are pending. The obstetrician calls while you are in the consultation and says, "If she is on lithium we need to know — there are cardiac screening implications."`,
    totalMarks: 25,
    signals: [
      {
        id: "s1",
        name: "High relapse risk — lithium cessation with severe bipolar history",
        category: "immediate_safety",
        severity: "critical",
        clueInStem: "Last time she stopped lithium without telling anyone, she was manic within six weeks.",
        whyItMatters: "Lithium cessation in a woman with bipolar I disorder including a forensic admission carries a very high relapse risk. Manic relapse in pregnancy has serious consequences for the mother, the foetus, and the family — including risk to the foetus if emergency treatment is required.",
        modelWording: "Lithium cessation four weeks ago in a woman with three severe manic episodes including a forensic admission creates a high and time-sensitive relapse risk. The partner's collateral about a six-week relapse timeline after prior cessation is the most important clinical fact in this consultation.",
        keywords: ["lithium cessation", "relapse risk", "bipolar I", "manic episode", "six weeks", "forensic", "high risk", "urgent"],
      },
      {
        id: "s2",
        name: "Informed consent — lithium teratogenicity risk is lower than Natasha believes",
        category: "consent_refusal",
        severity: "critical",
        clueInStem: "stopped lithium four weeks ago because I read that it causes heart defects.",
        whyItMatters: "Natasha's decision to stop lithium was based on outdated information. The absolute risk of Ebstein's anomaly from first-trimester lithium exposure is approximately 1-2 per 1000 — far lower than the risk of untreated bipolar disorder in pregnancy. Her consent to stop was not truly informed.",
        modelWording: "Natasha stopped lithium based on outdated and exaggerated teratogenicity information. The absolute risk of cardiac defect from lithium is approximately 0.1-0.2% — this must be weighed against the very high risk of manic relapse, which itself carries foetal, obstetric, and safety risks.",
        keywords: ["lithium", "teratogenicity", "Ebstein", "cardiac defect", "informed consent", "misinformation", "absolute risk", "risk-benefit"],
      },
      {
        id: "s3",
        name: "Obstetric communication — lithium cessation must be disclosed",
        category: "governance",
        severity: "critical",
        clueInStem: "She has not told her obstetrician. The obstetrician calls and says if she is on lithium we need to know.",
        whyItMatters: "The obstetrician needs accurate medication history to plan foetal cardiac screening. Natasha's withholding of this information — however understandable — creates clinical risk. With her consent I will communicate the full picture to obstetrics.",
        modelWording: "The obstetrician requires accurate information about Natasha's medication history for appropriate foetal cardiac screening. With Natasha's consent I will communicate the lithium history, the cessation, and the relapse risk to obstetrics today.",
        keywords: ["obstetrician", "communicate", "not told", "cardiac screening", "foetal", "obstetric", "coordination", "consent to share"],
      },
      {
        id: "s4",
        name: "Partner collateral is the most important risk signal",
        category: "collateral",
        severity: "important",
        clueInStem: "Last time she stopped lithium without telling anyone, she was manic within six weeks. I can't go through that again.",
        whyItMatters: "The partner has direct experience of Natasha's relapse pattern after lithium cessation. His collateral provides the most accurate relapse timeline and must be explicitly incorporated into the risk formulation — alongside his evident carer distress.",
        modelWording: "The partner's account of a six-week relapse timeline after prior lithium cessation is the most clinically useful piece of collateral in this consultation. His distress also requires acknowledgement — he is a carer under significant stress.",
        keywords: ["partner collateral", "relapse timeline", "six weeks", "prior cessation", "carer distress", "collateral", "most important"],
      },
      {
        id: "s5",
        name: "Alternative mood stabilisers in pregnancy — options and limitations",
        category: "physical_health",
        severity: "important",
        clueInStem: "I feel completely fine. I don't think I need medication in pregnancy.",
        whyItMatters: "If Natasha continues to refuse lithium, alternatives must be discussed — but lamotrigine is not effective for mania prevention, and valproate is contraindicated in pregnancy. Quetiapine has some evidence. The risk of no mood stabiliser in this clinical context is very high.",
        modelWording: "If Natasha refuses lithium, I will discuss alternatives — noting that lamotrigine does not prevent mania, valproate is absolutely contraindicated in pregnancy, and quetiapine has limited but some evidence. The safest option for this clinical picture is likely restarting lithium with foetal cardiac monitoring.",
        keywords: ["mood stabiliser", "lamotrigine", "valproate", "contraindicated", "quetiapine", "alternatives", "lithium restart", "mania prevention"],
      },
      {
        id: "s6",
        name: "MHA consideration if relapse occurs in pregnancy",
        category: "mental_health_act",
        severity: "important",
        clueInStem: "three severe manic episodes, one of which required a forensic psychiatric admission after she assaulted a family member.",
        whyItMatters: "If Natasha relapses in pregnancy, the complexity of involuntary psychiatric treatment in a pregnant woman — including medication choices, physical restraint implications, and foetal monitoring — must be anticipated and planned for now.",
        modelWording: "Given the forensic admission history, I will develop an advance care plan with Natasha now — including agreed early warning signs, agreed response plan, and her preferences about treatment if she relapses in pregnancy. This is better done now than in crisis.",
        keywords: ["MHA", "advance care plan", "relapse in pregnancy", "forensic", "involuntary", "treatment plan", "early warning signs", "crisis plan"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2", "s3"],
      secondary: ["s4", "s5", "s6"],
      lowYield: [],
    },
    modelAnswer: `Immediate priority: Natasha stopped lithium four weeks ago with a documented six-week relapse timeline. This is time-critical. With three severe manic episodes including a forensic admission, the relapse risk is high and the consequences in pregnancy are serious.

Informed consent: Natasha stopped based on outdated teratogenicity information. The absolute risk of Ebstein's anomaly from lithium is approximately 0.1-0.2% — far lower than the risk of untreated bipolar I disorder in pregnancy. I will provide accurate evidence-based information and give her time to reconsider.

Obstetric communication: With Natasha's consent I will communicate the full picture to obstetrics today — the lithium history, the cessation, and the relapse risk — so appropriate foetal cardiac screening can be planned.

Partner collateral: The partner's six-week relapse timeline is the most important clinical fact. His distress also requires acknowledgement.

Alternatives: If Natasha refuses lithium, I will discuss alternatives — noting that lamotrigine does not prevent mania, valproate is contraindicated, and quetiapine has limited evidence. Restarting lithium with foetal cardiac monitoring is the safest option for this clinical picture.

Advance care plan: I will develop a crisis plan with Natasha now — agreed early warning signs, agreed response, and her preferences if she relapses. This is better done now than in an acute manic episode at 28 weeks.`,
  },
];
