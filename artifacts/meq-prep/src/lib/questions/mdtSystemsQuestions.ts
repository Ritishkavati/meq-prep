import { QuizStem } from "../quizData";

export const MDT_STEMS: QuizStem[] = [
  {
    id: "SYS-001",
    topic: "mdt_systems",
    difficulty: "consultant",
    title: "Treatment-resistant schizophrenia and vocational rehabilitation",
    candidateRole: "Consultant psychiatrist, community rehabilitation team",
    setting: "Urban community mental health rehabilitation service",
    stem: `You are the consultant psychiatrist in a community rehabilitation psychiatry team.

Ethan is a 23-year-old man with treatment-resistant schizophrenia diagnosed at age 18. He has had four previous admissions for psychotic relapse associated with medication non-adherence. He currently lives with his parents and receives NDIS funding for psychosocial support. He has persistent negative symptoms, social withdrawal and intermittent auditory hallucinations despite clozapine treatment.

Ethan says, "Everyone keeps talking about recovery but nobody thinks I can actually do anything." He recently stopped attending his supported employment placement after believing co-workers were mocking him. His father wants him to apply for a disability pension permanently, while Ethan says he wants "a normal life" and asks whether he can study graphic design. The occupational therapist believes Ethan needs graded vocational rehabilitation, but the support coordinator says the NDIS funding is being wasted because he won't engage.

At a case conference, Ethan's mother becomes tearful and says, "We have organised every appointment for five years and we're exhausted." The junior registrar asks whether the priority should be reducing relapse risk, increasing independence, or accepting Ethan's current limitations.`,
    totalMarks: 22,
    signals: [
      {
        id: "s1",
        name: "Recovery-oriented formulation despite persistent illness",
        category: "disposition",
        severity: "critical",
        clueInStem: "nobody thinks I can actually do anything.",
        whyItMatters: "Consultant-level rehabilitation psychiatry requires balancing realistic limitations with meaningful recovery goals.",
        modelWording: "Adopt a recovery-oriented formulation recognising persistent symptoms while supporting achievable vocational and functional goals.",
        keywords: ["recovery-oriented", "functional recovery", "negative symptoms", "hope", "rehabilitation"],
      },
      {
        id: "s2",
        name: "Vocational failure linked to residual psychosis and self-esteem",
        category: "diagnosis_formulation",
        severity: "critical",
        clueInStem: "believing co-workers were mocking him.",
        whyItMatters: "Residual paranoia and defeatist beliefs impair vocational engagement and require targeted intervention rather than abandonment of goals.",
        modelWording: "Assess how residual psychosis, stigma sensitivity and low self-efficacy are impairing vocational participation.",
        keywords: ["residual psychosis", "vocational rehabilitation", "self-efficacy", "paranoia", "supported employment"],
      },
      {
        id: "s3",
        name: "Carer burnout in prolonged community care",
        category: "family_carer",
        severity: "important",
        clueInStem: "we're exhausted.",
        whyItMatters: "Long-term caregiving burden may destabilise family support and increase relapse risk.",
        modelWording: "Assess caregiver burden and provide supports to reduce burnout and over-functioning within the family system.",
        keywords: ["carer burnout", "family burden", "over-functioning", "psychoeducation", "support"],
      },
      {
        id: "s4",
        name: "NDIS engagement conflict",
        category: "system_pressure",
        severity: "important",
        clueInStem: "being wasted because he won't engage.",
        whyItMatters: "Framing disengagement as failure may reduce recovery opportunities and damage therapeutic alliance.",
        modelWording: "Reframe inconsistent engagement as part of severe illness and tailor supports to Ethan's cognitive and motivational limitations.",
        keywords: ["NDIS", "engagement", "psychosocial disability", "support coordination", "functional supports"],
      },
      {
        id: "s5",
        name: "Identity conflict between dependence and autonomy",
        category: "ethics",
        severity: "important",
        clueInStem: "a normal life",
        whyItMatters: "Young adults with chronic psychosis often struggle between realistic limitations and developmental aspirations.",
        modelWording: "Explore Ethan's developmental goals and identity concerns while maintaining realistic expectations and graded rehabilitation.",
        keywords: ["identity", "young adult", "autonomy", "developmental goals", "graded rehabilitation"],
      },
      {
        id: "s6",
        name: "Overly narrow relapse-focused management",
        category: "disposition",
        severity: "optional",
        clueInStem: "whether the priority should be reducing relapse risk",
        whyItMatters: "Modern rehabilitation psychiatry extends beyond relapse prevention toward meaningful functioning and participation.",
        modelWording: "Avoid reducing care to relapse prevention alone and include social, vocational and quality-of-life outcomes.",
        keywords: ["relapse prevention", "quality of life", "social recovery", "functional goals", "participation"],
      },
    ],
    priorityOrder: {
      urgent: ["s1", "s2"],
      secondary: ["s3", "s4", "s5"],
      lowYield: ["s6"],
    },
    modelAnswer: `Review Ethan using a recovery-oriented rehabilitation framework rather than a purely relapse-focused model.

Assess persistent psychotic symptoms, negative symptoms, cognitive functioning, motivation, medication adherence, substance use, and vocational strengths.

Explore barriers to supported employment: residual paranoia, social anxiety, low confidence, cognitive fatigue. Optimise clozapine efficacy and tolerability. Consider CBT for psychosis and structured behavioural activation.

Support graded vocational rehabilitation with OT input. Avoid framing disability pension as the only future pathway.

Address NDIS issues: clarify rehabilitation goals, advocate for sustainable supports, educate support coordinator about severe mental illness.

Assess and support caregiver burden: psychoeducation, respite, gradual transfer of responsibility to Ethan.

Supervise junior registrar regarding balancing relapse prevention, autonomy and developmental goals.

Document: rehabilitation formulation, functional goals, vocational plan, family issues, risk management.`,
  },
];
