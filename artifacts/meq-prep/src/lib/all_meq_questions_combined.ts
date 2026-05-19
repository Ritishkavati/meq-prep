import type { QuizStem } from "./quizData";
import { ORIGINAL_STEMS } from "./quizData";
import { QA_STEMS } from "./questions/qaQuestions";
import { SUP_STEMS } from "./questions/supervisionQuestions";
import { DOC_STEMS } from "./questions/documentationQuestions";
import { DIS_STEMS } from "./questions/dischargeReviewQuestions";
import { ED_STEMS } from "./questions/edQuestions";
import { PER_STEMS } from "./questions/perinatalQuestions";
import { CAP_STEMS } from "./questions/capacityMhaQuestions";
import { GOV_STEMS } from "./questions/governanceQuestions";
import { RISK_STEMS } from "./questions/riskQuestions";
import { MDT_STEMS } from "./questions/mdtSystemsQuestions";
import { PSY_STEMS } from "./questions/psychotherapyQuestions";
import { CS_STEMS } from "./questions/culturalSafetyQuestions";
import { FOR_STEMS } from "./questions/forensicQuestions";
import { SU_STEMS } from "./questions/substanceUseQuestions";
import { CA_STEMS } from "./questions/childAdolescentQuestions";
import { OA_STEMS } from "./questions/oldAgeQuestions";
import { RU_STEMS } from "./questions/ruralQuestions";
import { ETH_STEMS } from "./questions/ethicsQuestions";
import { CL_STEMS } from "./questions/clPsychiatryQuestions";

export type { QuizStem };

export const ALL_MEQ_QUESTIONS: QuizStem[] = [
  ...ORIGINAL_STEMS,
  ...QA_STEMS,
  ...SUP_STEMS,
  ...DOC_STEMS,
  ...DIS_STEMS,
  ...ED_STEMS,
  ...PER_STEMS,
  ...CAP_STEMS,
  ...GOV_STEMS,
  ...RISK_STEMS,
  ...MDT_STEMS,
  ...PSY_STEMS,
  ...CS_STEMS,
  ...FOR_STEMS,
  ...SU_STEMS,
  ...CA_STEMS,
  ...OA_STEMS,
  ...RU_STEMS,
  ...ETH_STEMS,
  ...CL_STEMS,
];

export default ALL_MEQ_QUESTIONS;
