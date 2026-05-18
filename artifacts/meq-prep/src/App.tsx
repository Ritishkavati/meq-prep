import { Switch, Route, Router as WouterRouter } from "wouter";
import { CandidateProvider } from "@/lib/store";
import Registration from "@/pages/Registration";
import Phases from "@/pages/Phases";
import DailyPractice from "@/pages/DailyPractice";
import SignalQuiz from "@/pages/SignalQuiz";
import FullExam from "@/pages/FullExam";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Registration} />
      <Route path="/phases" component={Phases} />
      <Route path="/daily" component={DailyPractice} />
      <Route path="/signals" component={SignalQuiz} />
      <Route path="/exam" component={FullExam} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <CandidateProvider>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
    </CandidateProvider>
  );
}

export default App;
