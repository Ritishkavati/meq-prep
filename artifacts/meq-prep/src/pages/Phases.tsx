import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useCandidate } from "@/lib/store";
import { Header } from "@/components/Header";
import { format } from "date-fns";

export default function Phases() {
  const { fullName, candidateNumber, examYear } = useCandidate();
  const [, setLocation] = useLocation();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    if (!fullName) {
      setLocation("/");
    }
  }, [fullName, setLocation]);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 pt-8 md:pt-12">
      <Header />
      
      <div className="bg-white rounded-lg shadow-sm border border-card-border p-4 flex flex-wrap gap-4 text-sm text-primary font-medium mb-8">
        <div>Candidate: <span className="font-normal text-muted-foreground">{fullName}</span></div>
        {candidateNumber && <div>Number: <span className="font-normal text-muted-foreground">{candidateNumber}</span></div>}
        <div>Sitting: <span className="font-normal text-muted-foreground">{examYear}</span></div>
        <div className="ml-auto text-accent">{format(currentTime, "d MMM yyyy, h:mm a")}</div>
      </div>

      <h2 className="text-2xl font-serif text-primary font-bold mb-6">Choose your MEQ training phase</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-card rounded-2xl shadow-md border border-card-border p-6 flex flex-col">
          <h3 className="text-xl font-serif text-primary font-bold mb-3">1. Daily Practice Questions</h3>
          <p className="text-muted-foreground text-sm flex-1 mb-6 leading-relaxed">
            Random MEQ-style daily question. Candidate writes a timed answer and receives examiner-style feedback.
          </p>
          <Link href="/daily" className="block w-full py-3 text-center bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white rounded-lg font-semibold transition-colors duration-200">
            Start Daily Practice
          </Link>
        </div>

        <div className="bg-card rounded-2xl shadow-md border border-card-border p-6 flex flex-col">
          <h3 className="text-xl font-serif text-primary font-bold mb-3">2. Quiz: Identify the Signals</h3>
          <p className="text-muted-foreground text-sm flex-1 mb-6 leading-relaxed">
            The app gives a stem. The candidate identifies all clinical, risk, legal, cultural, family, MDT and system signals. The app later compares answers with expected signals and shows missed points.
          </p>
          <Link href="/signals" className="block w-full py-3 text-center bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white rounded-lg font-semibold transition-colors duration-200">
            Start Signal Quiz
          </Link>
        </div>

        <div className="bg-card rounded-2xl shadow-md border border-card-border p-6 flex flex-col">
          <h3 className="text-xl font-serif text-primary font-bold mb-3">3. Full Exam</h3>
          <p className="text-muted-foreground text-sm flex-1 mb-6 leading-relaxed">
            Full exam simulation with 5 MEQs, total 125 marks. Each MEQ has 2–4 staged stems, usually 3 stems.
          </p>
          <Link href="/exam" className="block w-full py-3 text-center bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white rounded-lg font-semibold transition-colors duration-200">
            Start Full Exam
          </Link>
        </div>
      </div>

      <div className="text-center text-xs text-muted-foreground pb-8">
        Educational preparation tool only. Not an official RANZCP product.
      </div>
    </div>
  );
}
