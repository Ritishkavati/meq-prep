import React from "react";
import { Link } from "wouter";
import { Header } from "@/components/Header";
import { ArrowLeft, Clock, FileText, CheckSquare } from "lucide-react";

export default function FullExam() {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 pt-8 md:pt-12">
      <Header />
      
      <div className="mb-6">
        <Link href="/phases" className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium text-sm">
          <ArrowLeft className="w-4 h-4" />
          Back to Phase Selection
        </Link>
      </div>

      <div className="bg-card rounded-2xl shadow-md border border-card-border p-6 md:p-10 mb-12">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-serif text-primary font-bold mb-3">Full Exam Simulation</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            This module simulates the RANZCP Modified Essay Question (MEQ) paper. 
            Ensure you have adequate time, a quiet environment, and uninterrupted focus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-muted/50 p-4 rounded-xl flex flex-col items-center justify-center text-center border border-border">
            <FileText className="w-6 h-6 text-accent mb-2" />
            <div className="font-bold text-lg text-primary">5 MEQs</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Total Questions</div>
          </div>
          <div className="bg-muted/50 p-4 rounded-xl flex flex-col items-center justify-center text-center border border-border">
            <CheckSquare className="w-6 h-6 text-accent mb-2" />
            <div className="font-bold text-lg text-primary">125 Marks</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Total Score</div>
          </div>
          <div className="bg-muted/50 p-4 rounded-xl flex flex-col items-center justify-center text-center border border-border">
            <Clock className="w-6 h-6 text-accent mb-2" />
            <div className="font-bold text-lg text-primary">3 Hours</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Time Limit</div>
          </div>
        </div>

        <div className="border border-border rounded-lg overflow-hidden mb-8">
          <table className="w-full text-sm text-left">
            <thead className="bg-muted/50 text-primary border-b border-border">
              <tr>
                <th className="px-6 py-4 font-semibold">Question Number</th>
                <th className="px-6 py-4 font-semibold">Topic Area (Simulated)</th>
                <th className="px-6 py-4 font-semibold">Number of Stems</th>
                <th className="px-6 py-4 font-semibold text-right">Marks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr className="bg-card">
                <td className="px-6 py-4 font-medium text-primary">MEQ 1</td>
                <td className="px-6 py-4 text-muted-foreground">General Adult / Psychosis</td>
                <td className="px-6 py-4 text-muted-foreground">3 stems</td>
                <td className="px-6 py-4 font-medium text-primary text-right">25</td>
              </tr>
              <tr className="bg-card">
                <td className="px-6 py-4 font-medium text-primary">MEQ 2</td>
                <td className="px-6 py-4 text-muted-foreground">Child & Adolescent</td>
                <td className="px-6 py-4 text-muted-foreground">4 stems</td>
                <td className="px-6 py-4 font-medium text-primary text-right">25</td>
              </tr>
              <tr className="bg-card">
                <td className="px-6 py-4 font-medium text-primary">MEQ 3</td>
                <td className="px-6 py-4 text-muted-foreground">Old Age / Consultation Liaison</td>
                <td className="px-6 py-4 text-muted-foreground">3 stems</td>
                <td className="px-6 py-4 font-medium text-primary text-right">25</td>
              </tr>
              <tr className="bg-card">
                <td className="px-6 py-4 font-medium text-primary">MEQ 4</td>
                <td className="px-6 py-4 text-muted-foreground">Forensic / Risk</td>
                <td className="px-6 py-4 text-muted-foreground">2 stems</td>
                <td className="px-6 py-4 font-medium text-primary text-right">25</td>
              </tr>
              <tr className="bg-card">
                <td className="px-6 py-4 font-medium text-primary">MEQ 5</td>
                <td className="px-6 py-4 text-muted-foreground">Addiction / Dual Diagnosis</td>
                <td className="px-6 py-4 text-muted-foreground">3 stems</td>
                <td className="px-6 py-4 font-medium text-primary text-right">25</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-center">
          <button className="px-10 h-14 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-200">
            Begin Full Exam
          </button>
        </div>
      </div>
    </div>
  );
}
