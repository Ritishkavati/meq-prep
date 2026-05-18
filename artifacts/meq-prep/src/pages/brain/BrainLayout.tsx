import React from "react";
import { Link, useLocation } from "wouter";
import { Brain, Upload, FileSearch, LayoutDashboard, ArrowLeft } from "lucide-react";

const navItems = [
  { href: "/brain", label: "Dashboard", icon: LayoutDashboard },
  { href: "/brain/upload", label: "Upload Materials", icon: Upload },
  { href: "/brain/review", label: "Review Extracted Content", icon: FileSearch },
];

export function BrainLayout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  return (
    <div className="min-h-screen bg-app-bg">
      <div className="max-w-5xl mx-auto p-4 md:p-8 pt-8 md:pt-10">
        <div className="bg-primary rounded-2xl px-6 py-4 flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Brain className="w-6 h-6 text-accent" />
            <div>
              <span className="text-white font-bold text-lg font-serif tracking-tight">
                Knowledge Brain
              </span>
              <span className="hidden sm:block text-white/50 text-xs mt-0.5">
                Private educational knowledge base
              </span>
            </div>
          </div>
          <Link
            href="/phases"
            className="flex items-center gap-1.5 text-white/70 hover:text-white text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to study modes
          </Link>
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

        <p className="text-center text-xs text-muted-foreground mt-8 pb-6 leading-relaxed max-w-2xl mx-auto">
          This app is for private educational preparation. Uploaded materials may be copyrighted.
          Do not publish or redistribute restricted content.
        </p>
      </div>
    </div>
  );
}
