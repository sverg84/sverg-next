import { createTheme } from "flowbite-react";

/** Responsive padding for hero icon-only outline buttons (matches former `buttons/base.tsx`). */
const externalIconOutlinePadding =
  "px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2.5 xl:px-6 xl:py-3";

const buttonOutlineSverg =
  "inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-slate-100 " +
  "text-cyan-900 shadow-sm transition-colors duration-75 ease-in " +
  "hover:border-cyan-800 hover:bg-cyan-800 hover:text-white " +
  "focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-600 focus-visible:ring-offset-2 " +
  "focus-visible:ring-offset-[var(--color-page-bg)] " +
  "active:border-cyan-900 active:bg-cyan-900 active:text-white " +
  "dark:border-slate-600 dark:bg-slate-800 dark:text-emerald-100 " +
  "dark:hover:border-emerald-600 dark:hover:bg-emerald-700 dark:hover:text-white " +
  "dark:focus-visible:ring-emerald-500 dark:focus-visible:ring-offset-[var(--color-page-bg)] " +
  "dark:active:border-emerald-800 dark:active:bg-emerald-800 " +
  "group-enabled:group-hover:border-transparent group-enabled:group-hover:bg-transparent " +
  "group-enabled:group-hover:text-inherit dark:group-enabled:group-hover:border-transparent " +
  "dark:group-enabled:group-hover:bg-transparent dark:group-enabled:group-hover:text-inherit " +
  externalIconOutlinePadding;

/**
 * App-wide Flowbite overrides. Page chrome and non-Flowbite UI stay in `globals.css`
 * (`--color-page-bg`, hero mesh, `.link`, etc.).
 */
export const flowbiteTheme = createTheme({
  button: {
    outlineColor: {
      sverg: buttonOutlineSverg,
    },
  },
  darkThemeToggle: {
    root: {
      base:
        "rounded-lg p-2.5 text-sm text-slate-700 hover:bg-slate-300/90 hover:text-slate-950 " +
        "focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-700 focus-visible:ring-offset-2 " +
        "focus-visible:ring-offset-[var(--color-page-bg)] " +
        "dark:text-slate-200 dark:hover:bg-slate-600/90 dark:hover:text-white " +
        "dark:focus-visible:ring-emerald-500 dark:focus-visible:ring-offset-[var(--color-page-bg)]",
      icon: {
        base: "h-5 w-5",
        dark: "hidden dark:block",
        light: "dark:hidden",
      },
    },
  },
  footer: {
    root: {
      base: "w-full rounded-none bg-page-bg shadow-none md:flex md:items-center md:justify-between dark:bg-page-bg",
      container: "w-full p-6",
      bgDark: "",
    },
  },
  timeline: {
    item: {
      point: {
        marker: {
          icon: {
            base: "h-1.5 w-1.5 md:h-3 md:w-3 text-cyan-700 dark:text-emerald-300",
            wrapper:
              "absolute mt-1.5 md:mt-0 -left-1.5 md:-left-3 flex h-3 w-3 md:h-6 md:w-6 items-center justify-center rounded-full bg-cyan-100 ring-4 md:ring-8 ring-gray-50 dark:bg-emerald-800 dark:ring-gray-900",
          },
        },
      },
    },
  },
});
