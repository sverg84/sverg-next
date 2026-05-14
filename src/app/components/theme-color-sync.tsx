"use client";

import { useLayoutEffect } from "react";

/** Matches `--color-page-bg` in globals.css (light / html.dark). */
const THEME_COLOR_LIGHT = "#cfd8e8";
const THEME_COLOR_DARK = "#071018";

function applyThemeColor() {
  const isDark = document.documentElement.classList.contains("dark");
  const content = isDark ? THEME_COLOR_DARK : THEME_COLOR_LIGHT;
  const metas = document.querySelectorAll('meta[name="theme-color"]');
  if (metas.length === 0) {
    const meta = document.createElement("meta");
    meta.setAttribute("name", "theme-color");
    meta.setAttribute("content", content);
    document.head.appendChild(meta);
    return;
  }
  metas.forEach((node) => {
    const el = node as HTMLMetaElement;
    el.removeAttribute("media");
    el.content = content;
  });
}

/**
 * Keeps browser `theme-color` in sync with Flowbite `html.dark` (user toggle),
 * which can diverge from `prefers-color-scheme` alone.
 */
export default function ThemeColorSync() {
  useLayoutEffect(() => {
    applyThemeColor();
    const observer = new MutationObserver(applyThemeColor);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return null;
}
