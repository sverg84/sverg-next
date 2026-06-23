"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect, type ReactNode } from "react";

const FLOWBITE_THEME_KEY = "flowbite-theme-mode";
const THEME_KEY = "theme";

function migrateFlowbiteTheme() {
  if (typeof window === "undefined") return;
  const current = localStorage.getItem(THEME_KEY);
  if (current) return;

  const legacy = localStorage.getItem(FLOWBITE_THEME_KEY);
  if (!legacy) return;

  if (legacy === "dark" || legacy === "light" || legacy === "system") {
    localStorage.setItem(THEME_KEY, legacy);
  } else if (legacy === "true") {
    localStorage.setItem(THEME_KEY, "dark");
  } else if (legacy === "false") {
    localStorage.setItem(THEME_KEY, "light");
  }
  localStorage.removeItem(FLOWBITE_THEME_KEY);
}

type Props = Readonly<{
  children: ReactNode;
}>;

export function ThemeProvider({ children }: Props) {
  useEffect(() => {
    migrateFlowbiteTheme();
  }, []);

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey={THEME_KEY}
    >
      {children}
    </NextThemesProvider>
  );
}
