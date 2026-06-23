"use client";

import { useLayoutEffect } from "react";

function readPageBgColor(): string {
  return getComputedStyle(document.documentElement)
    .getPropertyValue("--color-page-bg")
    .trim();
}

function applyThemeColor() {
  const content = readPageBgColor();
  if (!content) return;

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
 * Keeps browser `theme-color` in sync with `html.dark` (user toggle),
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
