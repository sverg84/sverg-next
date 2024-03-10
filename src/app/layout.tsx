import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Flowbite, ThemeModeScript } from "flowbite-react";
import Nav from "./components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stephen Vergara",
  description: "Stephen's porfolio, powered by Next.js",
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
        </Flowbite>
      </body>
    </html>
  );
}
