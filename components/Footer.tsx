"use client";
import { Zap } from "lucide-react";
import { portfolioData } from "@/data/config";

export default function Footer() {
  const { personal } = portfolioData;
  const name = personal.name || "Portfolio";
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 mt-8">
      <div className="max-w-[1600px] mx-auto px-[60px]">
        <div className="flex justify-end">
          <p className="text-slate-500 text-sm">
            © {year} {name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
