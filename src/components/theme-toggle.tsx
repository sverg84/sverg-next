"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const { resolvedTheme, setTheme } = useTheme();

  if (!mounted) {
    return (
      <Button
        aria-hidden
        className="size-9"
        size="icon"
        type="button"
        variant="ghost"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      aria-label="Toggle dark mode"
      aria-pressed={isDark}
      className="text-fg-subtle hover:text-fg"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      size="icon"
      type="button"
      variant="ghost"
    >
      {isDark ? <BsMoonFill className="size-5" /> : <BsSunFill className="size-5" />}
    </Button>
  );
}
