import React, { useState } from "react";
import { useLocation } from "wouter";
import { useAdmin } from "@/lib/adminStore";
import { Header } from "@/components/Header";
import { ShieldCheck, Eye, EyeOff } from "lucide-react";

export default function AdminLogin() {
  const { login, isAdmin } = useAdmin();
  const [, setLocation] = useLocation();
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (isAdmin) {
    setLocation("/admin");
    return null;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const result = await login(password);
    setLoading(false);
    if (result.success) {
      setLocation("/admin");
    } else {
      setError(result.error ?? "Invalid password");
      setPassword("");
    }
  }

  return (
    <div className="max-w-md mx-auto p-4 md:p-8 pt-8 md:pt-12">
      <Header />
      <div className="bg-card rounded-2xl shadow-md border border-card-border p-6 md:p-10 mt-4">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-serif text-primary font-bold">Admin Access</h2>
            <p className="text-xs text-muted-foreground">Restricted area — authorised personnel only</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label htmlFor="admin-password" className="block text-sm font-semibold text-primary">
              Admin Password
            </label>
            <div className="relative">
              <input
                id="admin-password"
                type={showPw ? "text" : "password"}
                autoFocus
                autoComplete="current-password"
                placeholder="Enter admin password"
                className="w-full h-12 px-4 pr-12 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPw((p) => !p)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
              >
                {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {error && (
            <p className="text-sm text-red-500 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={!password.trim() || loading}
            className="w-full h-12 flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg font-semibold transition-colors duration-200"
          >
            {loading ? (
              <span className="animate-pulse">Verifying…</span>
            ) : (
              <>
                <ShieldCheck className="w-4 h-4" />
                Sign In as Admin
              </>
            )}
          </button>
        </form>

        <div className="mt-6 pt-4 border-t border-card-border">
          <button
            onClick={() => setLocation("/")}
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            ← Back to candidate login
          </button>
        </div>
      </div>
    </div>
  );
}
