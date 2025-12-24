"use client";
import { createContext, useContext } from "react";
import { usePathname } from "next/navigation";

const PathnameContext = createContext<string | null>(null);

export function PathnameProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <PathnameContext.Provider value={pathname}>
      {children}
    </PathnameContext.Provider>
  );
}

export function usePathnameContext() {
  const pathname = useContext(PathnameContext);
  if (!pathname) {
    throw new Error("usePathnameContext must be used within a PathnameProvider");
  }
  return pathname;
}
