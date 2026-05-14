import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeModeScript } from "flowbite-react";
import { ThemeInit } from "../../.flowbite-react/init";
import Nav from "./components/nav/nav";
import AppFooter from "./components/footer/footer";
import FlowbiteThemeRoot from "./components/flowbite-theme-root";
import SkipLink from "./components/skip-link";
import ThemeColorSync from "./components/theme-color-sync";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

const url = new URL(
  process.env.NODE_ENV === "production"
    ? "https://stephenvergara.com"
    : "http://localhost:3000",
);

export const viewport: Viewport = {
  /** Default until ThemeColorSync aligns with `html.dark`. */
  themeColor: "#cfd8e8",
};

export const metadata: Metadata = {
  title: {
    default: "Stephen Vergara",
    template: "%s | Stephen Vergara",
  },
  description: "Stephen's portfolio, powered by Next.js",
  metadataBase: url,
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <ThemeModeScript />
      </head>
      <body
        className={`${inter.className} bg-page-bg text-black dark:text-white`}
      >
        <SkipLink />
        <ThemeInit />
        <ThemeColorSync />
        <FlowbiteThemeRoot>
          <Nav />
          {children}
          <AppFooter />
        </FlowbiteThemeRoot>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
