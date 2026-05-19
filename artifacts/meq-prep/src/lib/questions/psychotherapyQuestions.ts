import type { QuizStem } from "../quizData";

export const PSY_STEMS: QuizStem[] = [
  {
    id: "PSY-001",
    topic: "psychotherapy",
    difficulty: "consultant",
    title: "Splitting and chronic suicidality on an inpatient unit",
    candidateRole: "Consultant psychiatrist, acute inpatient unit",
    setting: "Metropolitan acute psychiatric inpatient ward",
    stem: `You are the consultant psychiatrist on an acute inpatient unit.

Alicia is a 29-year-old woman with a diagnosis of borderline personality disorder, recurrent non-suicidal self-injury, trauma history, and multiple previous admissions. She was admitted voluntarily five days ago after telling the crisis team she would overdose if left alone. Since admission, she has formed a close relationship with one junior nurse and refuses to speak to other staff, saying, "She is the only one who actually cares whether I live or die."

Over the weekend, Alicia cut her forearm superficially after being told that leave would not be approved. She then told the night registrar, "If you discharge me, my blood is on your hands." The registrar extended admission and placed her on constant observations. The nursing team is now divided: some staff feel she is "too risky to discharge," while others say the admission is "just reinforcing her behaviour."

The bed manager is requesting discharge because three people are waiting in ED. Alicia's mother rings the ward repeatedly, saying, "Every time you send her home she gets worse." The treating psychologist says prolonged admission may undermine the community DBT plan. The junior registrar asks you whether the safest option is to keep Alicia admitted until she denies suicidal thoughts.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Chronic suicidality versus acute escalation",
        category: "risk_self",
        severity: "critical",
        clueInStem: "If you discharge me, my blood is on your hands.",
        whyItMatters: "A consultant must distinguish chronic baseline risk from acute dynamic escalation, otherwise admission decisions become reactive and may reinforce maladaptive patterns.",
        modelWording: "Differentiate Alicia's chronic suicide risk from any acute change in intent, planning, access to means, intoxication or loss of supports because discharge decisions should be based on dynamic risk, not threats alone.",
        keywords: ["chronic suicidality", "dynamic risk", "acute escalation", "baseline risk", "discharge planning"],
      },
      {
        id: "s2",
        name: "Splitting within the inpatient team",
        category: "mdt_conflict",
        severity: "critical",
        clueInStem: "She is the only one who actually cares whether I live or die.",
        whyItMatters: "Idealisation and devaluation can divide staff, impair consistent care, and increase coercive or rejecting responses.",
        modelWording: "Recognise splitting/idealisation and provide a unified team plan with consistent boundaries, language and risk responses.",
        keywords: ["splitting", "idealisation", "team division", "consistent boundaries", "unified care plan"],
      },
      {
        id: "s3",
        name: "Iatrogenic risk of prolonged admission",
        category: "disposition",
        severity: "important",
        clueInStem: "prolonged admission may undermine the community DBT plan.",
        whyItMatters: "Inpatient care may reduce immediate anxiety but worsen dependency, avoidance and loss of community treatment momentum.",
        modelWording: "Consider whether continued admission is iatrogenic by reinforcing dependency and undermining DBT-based community recovery.",
        keywords: ["iatrogenic admission", "dependency", "DBT", "least restrictive care", "therapeutic frame"],
      },
      {
        id: "s4",
        name: "Staff therapeutic nihilism",
        category: "mdt_conflict",
        severity: "important",
        clueInStem: "just reinforcing her behaviour.",
        whyItMatters: "Dismissive framing increases invalidation, staff burnout and unsafe countertransference-driven decision-making.",
        modelWording: "Address staff countertransference and therapeutic nihilism while maintaining validation and clear behavioural limits.",
        keywords: ["countertransference", "therapeutic nihilism", "validation", "staff burnout", "behavioural limits"],
      },
      {
        id: "s5",
        name: "Family anxiety reinforcing admission pressure",
        category: "family_carer",
        severity: "important",
        clueInStem: "Every time you send her home she gets worse.",
        whyItMatters: "Family fear may escalate pressure for admission and obscure collaborative safety planning.",
        modelWording: "Engage family to validate concern, explain chronic risk formulation, and include them in a realistic safety and crisis plan.",
        keywords: ["family anxiety", "carer involvement", "safety plan", "psychoeducation", "chronic risk"],
      },
      {
        id: "s6",
        name: "Bed pressure as unsafe primary driver",
        category: "system_pressure",
        severity: "optional",
        clueInStem: "three people are waiting in ED.",
        whyItMatters: "Resource pressure is relevant but must not become the stated clinical rationale for discharge.",
        modelWording: "Acknowledge bed pressure but ensure discharge is clinically justified, documented and linked to a safe community plan.",
        keywords: ["bed pressure", "clinical rationale", "safe discharge", "documentation", "systems pressure"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `1. Review Alicia directly and formulate risk as chronic baseline risk versus acute dynamic escalation because threats alone should not determine admission length.

2. Assess current suicide risk:
- intent, plan, means, recent escalation
- intoxication/substance use
- mental state change
- protective factors
- ability to collaborate with safety plan

3. Recognise splitting and team division:
- idealisation of one nurse
- devaluation of others
- inconsistent weekend decision-making
This requires consultant leadership and a unified ward plan.

4. Hold an urgent MDT meeting:
- agree consistent language
- avoid special arrangements through one staff member
- clarify observation rationale
- define leave/discharge criteria
- support junior staff

5. Avoid therapeutic nihilism:
- validate distress
- frame self-harm as communication/coping, not manipulation
- maintain firm boundaries without rejection.

6. Consider iatrogenic admission effects:
- dependency
- reduced autonomy
- reinforcement of crisis admission
- disruption of DBT plan

7. Liaise with community DBT/crisis team to create a step-down plan:
- brief admission goals
- crisis plan
- follow-up appointment
- means restriction
- after-hours pathway

8. Involve mother with consent:
- validate fear
- explain chronic risk formulation
- clarify that indefinite admission does not eliminate risk
- include family in safety plan.

9. Manage bed pressure transparently but do not allow it to drive clinical decision-making.

10. Document:
- acute/chronic risk formulation
- rationale for observations/discharge
- MDT consensus
- family communication
- contingency plan.`,
  },
  {
    id: "PSY-002",
    topic: "psychotherapy",
    difficulty: "consultant",
    title: "Dependency and failed engagement in community BPD care",
    candidateRole: "Consultant psychiatrist, community mental health team",
    setting: "Urban community mental health service",
    stem: `You are the consultant psychiatrist supervising a community mental health team.

Nathan is a 35-year-old man with borderline personality disorder, alcohol misuse, childhood trauma and repeated crisis presentations. He has missed four psychology appointments but sends multiple late-night emails to his care coordinator saying, "You are the only person stopping me from ending it." When the care coordinator does not respond immediately, Nathan presents to ED stating he has been abandoned by the team.

The care coordinator feels overwhelmed and says she is receiving emails on her personal phone. A junior registrar suggests discharging Nathan from the service because "he is not engaging." The psychologist is reluctant to offer therapy until Nathan is more stable and abstinent from alcohol. Nathan's GP says he is prescribing diazepam "because the mental health team won't help him."

At review, Nathan says, "If you put limits on contact, that proves you don't care." He denies current suicidal intent but says he may drink and cut himself if left alone. The team asks you to decide whether to close his file, increase contact, or refer him back to ED-based crisis care.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Engagement failure as clinical data, not simple non-compliance",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "he is not engaging.",
        whyItMatters: "Discharging for non-attendance without formulation may repeat abandonment and increase crisis use.",
        modelWording: "Formulate missed appointments and crisis contact as part of attachment insecurity and affect dysregulation, not simply non-compliance.",
        keywords: ["engagement failure", "attachment insecurity", "non-attendance", "formulation", "abandonment"],
      },
      {
        id: "s2",
        name: "Boundary diffusion and unsafe clinician dependency",
        category: "ethics",
        severity: "critical",
        clueInStem: "You are the only person stopping me from ending it.",
        whyItMatters: "Over-reliance on one clinician increases risk, burnout and inconsistent care.",
        modelWording: "Address dependency on the care coordinator by shifting from individual rescue to a team-based, boundaried care plan.",
        keywords: ["dependency", "boundary setting", "care coordinator", "team-based care", "rescue dynamic"],
      },
      {
        id: "s3",
        name: "Out-of-hours contact and staff safety",
        category: "system_pressure",
        severity: "important",
        clueInStem: "receiving emails on her personal phone.",
        whyItMatters: "Personal contact bypasses governance, creates unsafe expectations and exposes staff to burnout.",
        modelWording: "Stop personal phone contact and establish documented service-based communication boundaries.",
        keywords: ["personal phone", "professional boundaries", "staff safety", "communication plan", "governance"],
      },
      {
        id: "s4",
        name: "Maladaptive benzodiazepine prescribing",
        category: "risk_self",
        severity: "important",
        clueInStem: "prescribing diazepam",
        whyItMatters: "Benzodiazepines may worsen disinhibition, overdose risk and dependency in BPD with alcohol misuse.",
        modelWording: "Liaise with GP to rationalise benzodiazepines due to disinhibition, dependence and overdose risk.",
        keywords: ["diazepam", "alcohol misuse", "disinhibition", "overdose risk", "GP liaison"],
      },
      {
        id: "s5",
        name: "Conditional threats around boundaries",
        category: "risk_self",
        severity: "important",
        clueInStem: "If you put limits on contact, that proves you don't care.",
        whyItMatters: "Threats can coerce unstructured care unless responded to with validation and consistent limits.",
        modelWording: "Set limits with validation, explaining that predictable boundaries are part of safe care rather than rejection.",
        keywords: ["conditional threats", "limits", "validation", "boundaries", "safe care"],
      },
      {
        id: "s6",
        name: "Therapy access blocked by instability",
        category: "disposition",
        severity: "optional",
        clueInStem: "reluctant to offer therapy until Nathan is more stable",
        whyItMatters: "Waiting for complete stability may indefinitely exclude the patient from evidence-based treatment.",
        modelWording: "Consider staged therapy engagement with clear expectations rather than requiring complete stability before treatment.",
        keywords: ["staged therapy", "DBT", "therapy readiness", "stabilisation", "access to care"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `1. Do not frame this only as non-engagement. Formulate missed appointments, crisis emails and ED presentations as attachment insecurity, affect dysregulation and fear of abandonment.

2. Assess current risk:
- suicidal intent
- recent self-harm
- alcohol use
- access to means
- escalation from baseline
- capacity to use crisis plan

3. Address dependency on one clinician:
- move to team-based care
- stop personal phone contact
- document communication boundaries
- provide predictable response times

4. Support and supervise the care coordinator:
- validate burden
- address boundary diffusion
- prevent burnout
- ensure no single clinician carries risk alone.

5. Create a structured care plan:
- scheduled appointments
- crisis plan
- clear limits on emails/calls
- ED use only for acute risk
- written formulation shared with team

6. Avoid abrupt discharge as punishment for non-attendance because this may repeat abandonment and increase risk.

7. Liaise with GP:
- review diazepam prescribing
- highlight alcohol/disinhibition/overdose risk
- agree consistent medication boundaries.

8. Engage Nathan directly:
- validate distress
- explain boundaries as safety, not rejection
- clarify what the service can and cannot provide
- encourage responsibility for coping strategies.

9. Consider staged psychotherapy/DBT pathway rather than waiting for perfect stability.

10. Document:
- risk formulation
- boundary plan
- supervision plan
- GP communication
- rationale for continuing or modifying care.`,
  },
  {
    id: "PSY-003",
    topic: "psychotherapy",
    difficulty: "consultant",
    title: "Chronic self-harm, ED bed pressure and therapeutic nihilism",
    candidateRole: "Consultant psychiatrist, emergency psychiatry service",
    setting: "Busy metropolitan emergency department",
    stem: `You are the consultant psychiatrist covering a busy metropolitan emergency department on a Friday evening.

Jordan is a 26-year-old non-binary person with complex trauma, borderline personality disorder and chronic non-suicidal self-injury. They present after cutting their thigh with a razor following an argument with their partner. The wound requires suturing but is not life-threatening. Jordan says, "Cutting is the only way I stop myself from doing something worse."

Jordan has presented to ED twelve times in the past three months. The ED consultant says, "We can't keep admitting them every time they cut." A psychiatry registrar says Jordan is "low risk because it's superficial." The mental health nurse says staff are frustrated because Jordan often refuses discharge plans but later complains that nobody helps.

Jordan says, "If you send me home tonight, I'll just cut deeper." There are no psychiatric beds available, and the ED executive is calling hourly about mental health access block. Jordan's partner is in the waiting room and says they are exhausted and cannot provide supervision tonight.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Chronic NSSI with possible acute escalation",
        category: "risk_self",
        severity: "critical",
        clueInStem: "If you send me home tonight, I'll just cut deeper.",
        whyItMatters: "A consultant must avoid both over-admission and minimising acute escalation.",
        modelWording: "Differentiate chronic NSSI from acute escalation in intent, lethality, distress, intoxication, supports and ability to collaborate.",
        keywords: ["chronic NSSI", "acute escalation", "lethality", "dynamic risk", "self-harm"],
      },
      {
        id: "s2",
        name: "Invalidating therapeutic nihilism",
        category: "mdt_conflict",
        severity: "critical",
        clueInStem: "We can't keep admitting them every time they cut.",
        whyItMatters: "Therapeutic nihilism increases invalidation and may lead to unsafe premature discharge.",
        modelWording: "Address therapeutic nihilism by validating distress while avoiding reflexive admission or rejection.",
        keywords: ["therapeutic nihilism", "invalidation", "reflexive admission", "rejection", "BPD"],
      },
      {
        id: "s3",
        name: "Superficial injury does not equal low risk",
        category: "risk_self",
        severity: "important",
        clueInStem: "low risk because it's superficial.",
        whyItMatters: "Wound severity alone is a poor proxy for suicide risk or acute deterioration.",
        modelWording: "Do not equate superficial injury with low risk; assess intent, function, escalation and protective capacity.",
        keywords: ["superficial self-harm", "risk formulation", "intent", "function of self-harm", "protective factors"],
      },
      {
        id: "s4",
        name: "Function of self-harm as affect regulation",
        category: "diagnosis_formulation",
        severity: "important",
        clueInStem: "Cutting is the only way I stop myself from doing something worse.",
        whyItMatters: "Understanding function guides safety planning and alternatives rather than purely containment.",
        modelWording: "Explore self-harm as affect regulation and identify alternative coping strategies for the immediate crisis.",
        keywords: ["affect regulation", "coping strategy", "self-harm function", "distress tolerance", "safety planning"],
      },
      {
        id: "s5",
        name: "Carer exhaustion reducing discharge safety",
        category: "family_carer",
        severity: "important",
        clueInStem: "cannot provide supervision tonight.",
        whyItMatters: "Discharge plans relying on partner supervision are unsafe if the partner is burnt out.",
        modelWording: "Assess partner burnout and avoid discharge plans dependent on unavailable supervision.",
        keywords: ["carer burnout", "partner supervision", "discharge safety", "support capacity", "family involvement"],
      },
      {
        id: "s6",
        name: "Executive pressure and access block",
        category: "system_pressure",
        severity: "optional",
        clueInStem: "calling hourly about mental health access block.",
        whyItMatters: "System pressure is real but must not override individual risk formulation.",
        modelWording: "Acknowledge access block while documenting a clinically defensible, least restrictive disposition plan.",
        keywords: ["access block", "bed pressure", "executive pressure", "defensible decision", "least restrictive"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `1. Review Jordan directly and avoid binary thinking of either automatic admission or dismissal as "superficial."

2. Assess acute-on-chronic risk:
- intent
- escalation from baseline
- intoxication
- access to means
- ability to collaborate
- supports tonight
- reasons for living

3. Recognise chronic NSSI as affect regulation but assess whether tonight's threat indicates increased lethality or loss of control.

4. Address therapeutic nihilism in ED and psychiatry staff:
- validate staff frustration
- challenge dismissive language
- reframe care as structured, boundaried and non-rejecting.

5. Do not use wound severity alone to determine risk.

6. Develop a brief crisis intervention plan:
- wound care
- remove/limit access to razors
- distress tolerance alternatives
- written safety plan
- crisis follow-up
- clear return criteria.

7. Assess partner capacity:
- do not rely on partner supervision if exhausted
- involve partner only within realistic limits.

8. Consider short-stay/crisis stabilisation if acute risk cannot be safely managed at home and no inpatient bed is available.

9. Manage system pressure:
- escalate bed/access issues appropriately
- do not allow executive pressure to determine risk decision
- document rationale clearly.

10. Ensure follow-up with community team/DBT pathway and avoid reinforcing repeated unstructured ED cycles.`,
  },
];
