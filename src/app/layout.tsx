import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Flowbite, ThemeModeScript } from "flowbite-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
      <body className={inter.className}>
        <Flowbite>{children}</Flowbite>
      </body>
    </html>
  );
}
