import React, { createContext, useContext, useState, ReactNode } from "react";

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
  const [candidateNumber, setCandidateNumber] = useState("");
  const [examYear, setExamYear] = useState("2026");

  function clearCandidate() {
    setFullName("");
    setCandidateNumber("");
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
