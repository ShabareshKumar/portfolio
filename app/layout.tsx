import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { portfolioData } from "@/data/config";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: portfolioData.personal.name || "Portfolio",
  description: portfolioData.personal.description || "Personal Portfolio",
  other: {
    'cache-control': 'no-cache, no-store, must-revalidate',
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0f] text-slate-200`}>
        {children}
      </body>
    </html>
  );
}
