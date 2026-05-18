import React, { useState } from "react";
import { Link } from "wouter";
import { Header } from "@/components/Header";
import { ArrowLeft, CheckCircle2, AlertCircle } from "lucide-react";

export default function SignalQuiz() {
  const [assessed, setAssessed] = useState(false);
  const [answer, setAnswer] = useState("");

  const handleAssess = () => {
    setAssessed(true);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 pt-8 md:pt-12">
      <Header />
      
      <div className="mb-6">
        <Link href="/phases" className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium text-sm">
          <ArrowLeft className="w-4 h-4" />
          Back to Phase Selection
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="space-y-6">
          <div className="bg-card rounded-2xl shadow-md border border-card-border p-6 md:p-8">
            <h2 className="text-xl font-serif text-primary font-bold mb-4">Signal Quiz: Identify the Issues</h2>
            <div className="prose prose-sm text-foreground bg-muted/30 p-4 rounded-lg border border-border">
              <p>
                <strong>Case Stem:</strong><br/>
                Ms. Alana Thompson is a 22-year-old university student, brought to the community mental health clinic by her mother. Alana has been refusing to eat meals prepared by her family for the past week, stating the food is "contaminated with micro-plastics." She appears dishevelled, is guarded, and her mother reports she has missed her last three university exams. Alana is of Aboriginal descent. Her father passed away suddenly from a myocardial infarction two months ago.
              </p>
            </div>

            <div className="mt-6 space-y-4">
              <label className="block font-semibold text-primary">List all signals/issues you identify (Clinical, Risk, Legal, Cultural, Family, MDT, Systems):</label>
              <textarea 
                className="w-full h-48 p-4 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-y"
                placeholder="E.g. Clinical: Possible psychotic episode. Risk: Nutritional compromise..."
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                disabled={assessed}
              />
              {!assessed && (
                <button 
                  onClick={handleAssess}
                  className="w-full px-6 h-12 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-semibold transition-colors duration-200"
                >
                  Assess Signals
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {assessed ? (
            <div className="bg-card rounded-2xl shadow-md border border-card-border p-6 md:p-8 animate-in fade-in slide-in-from-bottom-4">
              <h3 className="text-lg font-serif text-primary font-bold mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                Expected Signals
              </h3>
              <p className="text-sm text-muted-foreground mb-6">Compare your answer against the expected signals below to identify missed points.</p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-sm text-primary mb-2 border-b pb-1">Clinical</h4>
                  <ul className="list-disc pl-5 text-sm space-y-1 text-foreground">
                    <li>Possible first episode psychosis / delusional belief regarding contamination.</li>
                    <li>Recent major psychosocial stressor (father's sudden death / potential complicated grief).</li>
                    <li>Functional decline (missing university exams, self-care deficit).</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-primary mb-2 border-b pb-1">Risk</h4>
                  <ul className="list-disc pl-5 text-sm space-y-1 text-foreground">
                    <li>Nutritional compromise (refusing meals for a week).</li>
                    <li>Vulnerability due to apparent guardedness/psychosis.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-primary mb-2 border-b pb-1">Cultural & Family</h4>
                  <ul className="list-disc pl-5 text-sm space-y-1 text-foreground">
                    <li>Aboriginal descent — need for culturally appropriate assessment and liaison with Aboriginal Health Worker.</li>
                    <li>Family dynamics — mother as primary carer, both grieving loss of father.</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-4 bg-accent/10 border border-accent/20 rounded-lg">
                <h4 className="font-semibold text-accent flex items-center gap-2 mb-2">
                  <AlertCircle className="w-4 h-4" /> Self-Reflection
                </h4>
                <p className="text-sm text-foreground">
                  Review the expected signals above. Which categories did you miss? In the actual MEQ, failing to identify systemic, cultural, or legal signals often results in lost marks.
                </p>
              </div>
            </div>
          ) : (
            <div className="bg-muted/30 rounded-2xl border border-dashed border-border p-8 h-full flex items-center justify-center text-center">
              <p className="text-muted-foreground">Submit your signals to view the expected checklist and assess missed points.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
