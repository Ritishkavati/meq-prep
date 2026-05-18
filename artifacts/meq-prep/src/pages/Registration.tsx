import React, { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { useCandidate } from "@/lib/store";
import { Header } from "@/components/Header";
import { format } from "date-fns";

export default function Registration() {
  const { fullName, setFullName, candidateNumber, setCandidateNumber, examYear, setExamYear } = useCandidate();
  const [, setLocation] = useLocation();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleBegin = (e: React.FormEvent) => {
    e.preventDefault();
    if (fullName.trim()) {
      setLocation("/phases");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-8 pt-8 md:pt-12">
      <Header />
      
      <div className="bg-card rounded-2xl shadow-md border border-card-border p-6 md:p-10 mb-8">
        <div className="mb-8">
          <h2 className="text-3xl font-serif text-primary font-bold mb-2">Candidate Registration</h2>
          <p className="text-muted-foreground">Enter your details to begin your study session</p>
        </div>

        <form onSubmit={handleBegin} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="fullName" className="block text-sm font-semibold text-primary">Full Name</label>
              <input
                id="fullName"
                type="text"
                placeholder="Dr. Jane Smith"
                className="w-full h-12 px-4 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="candidateNumber" className="block text-sm font-semibold text-primary">Candidate Number</label>
              <input
                id="candidateNumber"
                type="text"
                placeholder="e.g. MEQ-2026-0042"
                className="w-full h-12 px-4 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                value={candidateNumber}
                onChange={(e) => setCandidateNumber(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="examYear" className="block text-sm font-semibold text-primary">Exam Sitting Year</label>
              <input
                id="examYear"
                type="text"
                className="w-full h-12 px-4 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                value={examYear}
                onChange={(e) => setExamYear(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-primary">Session Date & Time</label>
              <div className="flex gap-2">
                <div className="flex-1 flex items-center gap-3 px-4 h-12 bg-accent/10 border border-accent/20 rounded-lg text-accent font-medium">
                  <Calendar className="w-5 h-5" />
                  <span className="text-sm">{format(currentTime, "EEEE d MMMM yyyy")}</span>
                </div>
                <div className="flex-1 flex items-center gap-3 px-4 h-12 bg-accent/10 border border-accent/20 rounded-lg text-accent font-medium">
                  <Clock className="w-5 h-5" />
                  <span className="text-sm">{format(currentTime, "hh:mm:ss a")}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <button
              type="submit"
              disabled={!fullName.trim()}
              className="w-full md:w-auto px-8 h-12 flex items-center justify-center gap-3 bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white disabled:opacity-50 disabled:cursor-not-allowed rounded-lg font-semibold transition-colors duration-200"
            >
              Begin Study Session
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>

      <div className="text-center text-xs text-muted-foreground pb-8">
        Educational preparation tool only. Not an official RANZCP product.
      </div>
    </div>
  );
}
