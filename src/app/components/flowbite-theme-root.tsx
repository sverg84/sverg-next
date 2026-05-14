"use client";

import { ThemeProvider } from "flowbite-react";
import type { ReactNode } from "react";
import { flowbiteTheme } from "../theme/flowbite-theme";

type Props = Readonly<{
  children: ReactNode;
}>;

/** Wraps Flowbite-heavy UI so `flowbite-theme` defaults apply (App Router–safe client boundary). */
export default function FlowbiteThemeRoot({ children }: Props) {
  return <ThemeProvider theme={flowbiteTheme}>{children}</ThemeProvider>;
}
