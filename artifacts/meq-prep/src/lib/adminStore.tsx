import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");
const TOKEN_KEY = "meq_admin_token";

interface AdminContextType {
  isAdmin: boolean;
  isLoading: boolean;
  login: (password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  token: string | null;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(TOKEN_KEY);
    if (!stored) { setIsLoading(false); return; }
    fetch(`${BASE}/api/admin/verify`, {
      headers: { Authorization: `Bearer ${stored}` },
    })
      .then((r) => r.json())
      .then((data: { valid?: boolean }) => {
        if (data.valid) { setToken(stored); setIsAdmin(true); }
        else { localStorage.removeItem(TOKEN_KEY); }
      })
      .catch(() => { localStorage.removeItem(TOKEN_KEY); })
      .finally(() => setIsLoading(false));
  }, []);

  async function login(password: string): Promise<{ success: boolean; error?: string }> {
    try {
      const r = await fetch(`${BASE}/api/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = (await r.json()) as { token?: string; error?: string };
      if (!r.ok || !data.token) return { success: false, error: data.error ?? "Login failed" };
      localStorage.setItem(TOKEN_KEY, data.token);
      setToken(data.token);
      setIsAdmin(true);
      return { success: true };
    } catch {
      return { success: false, error: "Network error" };
    }
  }

  function logout() {
    localStorage.removeItem(TOKEN_KEY);
    setToken(null);
    setIsAdmin(false);
  }

  return (
    <AdminContext.Provider value={{ isAdmin, isLoading, login, logout, token }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const ctx = useContext(AdminContext);
  if (!ctx) throw new Error("useAdmin must be used within AdminProvider");
  return ctx;
}
