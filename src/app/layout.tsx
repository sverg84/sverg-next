import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Flowbite, ThemeModeScript } from "flowbite-react";
import Nav from "./components/nav/nav";
import AppFooter from "./components/footer/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "rgb(214, 219, 220)" },
  ],
};

export const metadata: Metadata = {
  title: "Stephen Vergara",
  description: "Stephen's porfolio, powered by Next.js",
  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? "https://stephenvergara.com"
      : "http://localhost:3000",
  ),
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
        className={`${inter.className} bg-[rgb(214, 219, 220)] bg-gradient-to-t from-transparent
        to-white text-black dark:bg-black dark:to-black dark:text-white`}
      >
        <Flowbite>
          <Nav />
          {children}
          <AppFooter />
        </Flowbite>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
