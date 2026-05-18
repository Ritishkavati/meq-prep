import React from "react";
import { Link, useLocation } from "wouter";
import { BookMarked, Plus, Link2, ArrowLeft, AlertTriangle } from "lucide-react";

const navItems = [
  { href: "/brain/ps", label: "Position Statements", icon: BookMarked },
  { href: "/brain/ps/add", label: "Add Statement", icon: Plus },
  { href: "/brain/ps/import", label: "Import / URL Library", icon: Link2 },
];

export function PSBrainLayout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  return (
    <div className="min-h-screen bg-app-bg">
      <div className="max-w-5xl mx-auto p-4 md:p-8 pt-8 md:pt-10">
        <div className="bg-primary rounded-2xl px-6 py-4 flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <BookMarked className="w-6 h-6 text-accent" />
            <div>
              <span className="text-white font-bold text-lg font-serif tracking-tight">
                RANZCP Position Statements Brain
              </span>
              <span className="hidden sm:block text-white/50 text-xs mt-0.5">
                Official RANZCP policy positions for consultant-level MEQ preparation
              </span>
            </div>
          </div>
          <Link
            href="/brain"
            className="flex items-center gap-1.5 text-white/70 hover:text-white text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Knowledge Brain
          </Link>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 flex items-start gap-3 mb-4 text-sm text-amber-800">
          <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-500" />
          <span>
            RANZCP materials are used for private educational preparation only. Always verify
            reference numbers and currency at the official{" "}
            <a
              href="https://www.ranzcp.org/clinical-guidelines-publications/position-statements"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline"
            >
              RANZCP website
            </a>
            . Do not redistribute copyrighted content.
          </span>
        </div>

        <div className="flex gap-1 bg-white border border-card-border rounded-xl p-1 mb-6">
          {navItems.map(({ href, label, icon: Icon }) => {
            const active = location === href;
            return (
              <Link
                key={href}
                href={href}
                className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? "bg-primary text-white"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span className="hidden sm:inline">{label}</span>
              </Link>
            );
          })}
        </div>

        {children}
      </div>
    </div>
  );
}
