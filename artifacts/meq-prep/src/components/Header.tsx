import React from "react";
import { Link } from "wouter";

export function Header() {
  return (
    <div className="bg-primary rounded-xl p-4 md:p-6 mb-8 text-primary-foreground shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div>
        <h1 className="text-2xl md:text-3xl font-serif font-bold tracking-tight">
          RANZCP <span className="text-accent">MEQ</span> Prep
        </h1>
        <p className="text-primary-foreground/70 text-sm mt-1">
          Royal Australian & New Zealand College of Psychiatrists
        </p>
      </div>
      <div className="bg-accent/20 text-accent border border-accent/30 px-3 py-1 rounded-full text-xs font-semibold tracking-wider">
        EXAM PORTAL
      </div>
    </div>
  );
}
