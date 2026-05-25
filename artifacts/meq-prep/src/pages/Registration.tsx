import React from "react";
import { useLocation } from "wouter";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { useCandidate } from "@/lib/store";
import { Header } from "@/components/Header";

export default function Registration() {
  const { candidateNumber, setCandidateNumber } = useCandidate();
  const [, setLocation] = useLocation();

  const handleBegin = (e: React.FormEvent) => {
    e.preventDefault();
    if (candidateNumber.trim()) {
      setLocation("/phases");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-8 pt-8 md:pt-12">
      <Header />

      <div className="bg-card rounded-2xl shadow-md border border-card-border p-6 md:p-10 mb-8">
        <div className="mb-8">
          <h2 className="text-3xl font-serif text-primary font-bold mb-2">Sign In</h2>
          <p className="text-muted-foreground">Enter your registration number to access your study modules</p>
        </div>

        <form onSubmit={handleBegin} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="candidateNumber" className="block text-sm font-semibold text-primary">
              Registration Number
            </label>
            <input
              id="candidateNumber"
              type="text"
              placeholder="e.g. REG-2026-0042"
              autoFocus
              className="w-full h-12 px-4 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all"
              value={candidateNumber}
              onChange={(e) => setCandidateNumber(e.target.value)}
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={!candidateNumber.trim()}
              className="w-full md:w-auto px-8 h-12 flex items-center justify-center gap-3 bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white disabled:opacity-50 disabled:cursor-not-allowed rounded-lg font-semibold transition-colors duration-200"
            >
              Begin
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>

      <div className="text-center text-xs text-muted-foreground pb-8">
        <p className="mb-3">Educational preparation tool only. Not an official RANZCP product.</p>
        <button
          onClick={() => setLocation("/admin/login")}
          className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border border-input bg-card text-muted-foreground hover:text-primary hover:border-primary transition-colors"
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          Admin Login
        </button>
      </div>
    </div>
  );
}
