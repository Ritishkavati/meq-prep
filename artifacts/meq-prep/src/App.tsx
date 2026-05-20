import { Switch, Route, Router as WouterRouter } from "wouter";
import { CandidateProvider } from "@/lib/store";
import { BrainProvider } from "@/lib/brainStore";
import { PositionStatementProvider } from "@/lib/positionStatementStore";
import Registration from "@/pages/Registration";
import Phases from "@/pages/Phases";
import DailyPractice from "@/pages/DailyPractice";
import QuizMode from "@/pages/QuizMode";
import FullExam from "@/pages/FullExam";
import BrainDashboard from "@/pages/brain/BrainDashboard";
import BrainUpload from "@/pages/brain/BrainUpload";
import BrainReview from "@/pages/brain/BrainReview";
import PSBrainDashboard from "@/pages/brain/PSBrainDashboard";
import PSBrainAdd from "@/pages/brain/PSBrainAdd";
import PSBrainImport from "@/pages/brain/PSBrainImport";
import AIReviewExport from "@/pages/brain/AIReviewExport";
import ReviewMode from "@/pages/ReviewMode";
import DailyMEQMode from "@/pages/DailyMEQMode";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Registration} />
      <Route path="/phases" component={Phases} />
      <Route path="/daily" component={DailyPractice} />
      <Route path="/signals" component={QuizMode} />
      <Route path="/exam" component={FullExam} />
      <Route path="/review" component={ReviewMode} />
      <Route path="/meq-daily" component={DailyMEQMode} />
      <Route path="/brain" component={BrainDashboard} />
      <Route path="/brain/upload" component={BrainUpload} />
      <Route path="/brain/review" component={BrainReview} />
      <Route path="/brain/ps" component={PSBrainDashboard} />
      <Route path="/brain/ps/add" component={PSBrainAdd} />
      <Route path="/brain/ps/import" component={PSBrainImport} />
      <Route path="/brain/ai-export" component={AIReviewExport} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <CandidateProvider>
      <BrainProvider>
        <PositionStatementProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
        </PositionStatementProvider>
      </BrainProvider>
    </CandidateProvider>
  );
}

export default App;
