"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Transition } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { portfolioData } from "@/data/config";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const name = portfolioData.personal.name || "Portfolio";

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" } as Transition}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-white/10 shadow-lg shadow-purple-900/20" : "bg-transparent"
      }`}
    >
      <div className="w-full mx-auto h-16 flex items-center justify-between" style={{ maxWidth: '1600px', paddingLeft: '60px', paddingRight: '60px' }}>
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full overflow-hidden relative">
            <Image src="/profile.png" alt="Profile" fill className="object-cover" sizes="32px" />
          </div>
          <span className="font-bold text-white text-lg tracking-tight">
            {name || "Portfolio"}
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-400 hover:text-purple-400 text-sm font-medium transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href={`mailto:${portfolioData.personal.email || "your@email.com"}`}
            className="rounded-lg bg-gradient-to-r from-purple-600 to-violet-600 text-white text-sm font-semibold hover:from-purple-500 hover:to-violet-500 transition-all duration-200 glow-purple ml-4"
            style={{ paddingLeft: '24px', paddingRight: '24px', paddingTop: '4px', paddingBottom: '4px' }}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-slate-300 hover:text-purple-400 font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`mailto:${portfolioData.personal.email || "your@email.com"}`}
                onClick={() => setMenuOpen(false)}
                className="px-16 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-violet-600 text-white text-sm font-semibold text-center"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
