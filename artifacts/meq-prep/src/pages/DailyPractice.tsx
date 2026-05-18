import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { Header } from "@/components/Header";
import { Clock, ArrowLeft } from "lucide-react";

export default function DailyPractice() {
  const [timeLeft, setTimeLeft] = useState(15 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
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

      <div className="bg-card rounded-2xl shadow-md border border-card-border overflow-hidden mb-12">
        <div className="bg-primary text-primary-foreground p-4 flex justify-between items-center">
          <h2 className="font-serif font-bold text-lg">Daily Practice Question</h2>
          <div className="flex gap-4 items-center">
            <span className="bg-white/10 px-3 py-1 rounded-full text-xs font-medium">10 marks</span>
            <div className={`flex items-center gap-2 font-mono ${timeLeft < 300 ? 'text-destructive-foreground bg-destructive/80 px-2 rounded' : ''}`}>
              <Clock className="w-4 h-4" />
              {formatTime(timeLeft)}
            </div>
          </div>
        </div>
        
        <div className="p-6 md:p-8 space-y-6">
          <div className="prose prose-slate max-w-none text-foreground">
            <p><strong>Stem 1</strong></p>
            <p>
              Mr. David Chen is a 34-year-old accountant presenting to the emergency department accompanied by his wife, Sarah. She reports that over the past three weeks, David has become increasingly irritable, requires only 2-3 hours of sleep per night, and has spent over $15,000 on cryptocurrency investments, claiming he has discovered a "flaw in the global financial system."
            </p>
            <p>
              He has no prior psychiatric history, though Sarah notes he had a period of "mild depression" in his early twenties that resolved without formal treatment. There is no regular medication and no reported substance use.
            </p>
            <p className="font-semibold text-primary mt-6">
              Question 1 (10 marks)
              <br />
              Outline your initial psychiatric assessment and immediate management plan for Mr. Chen in the emergency department.
            </p>
          </div>

          <div className="space-y-4">
            <label className="block font-semibold text-primary">Your Answer</label>
            <textarea 
              className="w-full h-64 p-4 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-y"
              placeholder="Type your answer here..."
            />
          </div>

          <div className="flex justify-end pt-4">
            <button className="px-8 h-12 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-semibold transition-colors duration-200">
              Submit Answer
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
