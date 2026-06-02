import React, { createContext, useContext, useState, ReactNode } from "react";

const STORAGE_KEY = "meq_candidate_number";

function loadCandidateNumber(): string {
  try { return localStorage.getItem(STORAGE_KEY) ?? ""; } catch { return ""; }
}

function saveCandidateNumber(num: string) {
  try {
    if (num) localStorage.setItem(STORAGE_KEY, num);
    else localStorage.removeItem(STORAGE_KEY);
  } catch {}
}

interface CandidateContextType {
  fullName: string;
  candidateNumber: string;
  examYear: string;
  setFullName: (name: string) => void;
  setCandidateNumber: (num: string) => void;
  setExamYear: (year: string) => void;
  clearCandidate: () => void;
}

const CandidateContext = createContext<CandidateContextType | undefined>(undefined);

export function CandidateProvider({ children }: { children: ReactNode }) {
  const [fullName, setFullName] = useState("");
  const [candidateNumber, setCandidateNumberState] = useState(loadCandidateNumber);
  const [examYear, setExamYear] = useState("2026");

  function setCandidateNumber(num: string) {
    saveCandidateNumber(num);
    setCandidateNumberState(num);
  }

  function clearCandidate() {
    saveCandidateNumber("");
    setFullName("");
    setCandidateNumberState("");
    setExamYear("2026");
  }

  return (
    <CandidateContext.Provider
      value={{
        fullName,
        candidateNumber,
        examYear,
        setFullName,
        setCandidateNumber,
        setExamYear,
        clearCandidate,
      }}
    >
      {children}
    </CandidateContext.Provider>
  );
}

export function useCandidate() {
  const context = useContext(CandidateContext);
  if (context === undefined) {
    throw new Error("useCandidate must be used within a CandidateProvider");
  }
  return context;
}
