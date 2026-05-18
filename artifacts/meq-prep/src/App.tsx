import { Switch, Route, Router as WouterRouter } from "wouter";
import { CandidateProvider } from "@/lib/store";
import { BrainProvider } from "@/lib/brainStore";
import Registration from "@/pages/Registration";
import Phases from "@/pages/Phases";
import DailyPractice from "@/pages/DailyPractice";
import QuizMode from "@/pages/QuizMode";
import FullExam from "@/pages/FullExam";
import BrainDashboard from "@/pages/brain/BrainDashboard";
import BrainUpload from "@/pages/brain/BrainUpload";
import BrainReview from "@/pages/brain/BrainReview";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Registration} />
      <Route path="/phases" component={Phases} />
      <Route path="/daily" component={DailyPractice} />
      <Route path="/signals" component={QuizMode} />
      <Route path="/exam" component={FullExam} />
      <Route path="/brain" component={BrainDashboard} />
      <Route path="/brain/upload" component={BrainUpload} />
      <Route path="/brain/review" component={BrainReview} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <CandidateProvider>
      <BrainProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
      </BrainProvider>
    </CandidateProvider>
  );
}

export default App;
