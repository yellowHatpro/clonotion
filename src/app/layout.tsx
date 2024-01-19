import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import db from "@/lib/supabase/db";
import {ThemeProvider} from "@/lib/providers/next_theme_provider";
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
      <body className={`${inter.className} mocha bg-ctp-base`}>
      <ThemeProvider
          attribute={'class'}
          defaultTheme={'dark'}
          enableSystem > {children} </ThemeProvider>
      </body>
    </html>
  );
}
