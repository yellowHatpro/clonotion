import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import db from "@/lib/supabase/db";
import {ThemeProvider} from "@/lib/providers/next_theme_provider";
import {twMerge} from "tailwind-merge";
import React from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clonotion",
  description: "Notion kinda like",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge('bg-ctp-base', inter.className, 'dark')}>
      <ThemeProvider
          attribute={'class'}
          defaultTheme={"dark"}
          enableSystem > {children} </ThemeProvider>
      </body>
    </html>
  );
}
