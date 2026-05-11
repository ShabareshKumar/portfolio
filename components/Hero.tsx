"use client";
import { motion, type Transition } from "framer-motion";
import { Download, Mail, ExternalLink } from "lucide-react";
import Image from "next/image";
import { portfolioData } from "@/data/config";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" } as Transition,
});

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section className="flex items-center justify-center" style={{ paddingTop: '40px', paddingBottom: '50px', minHeight: 'auto' }}>
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          
          {/* Profile image at top */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" } as Transition}
            className="flex-shrink-0 relative flex items-center justify-center"
          >
            <div className="relative w-48 h-48 sm:w-60 sm:h-60 lg:w-[300px] lg:h-[300px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 to-violet-600 blur-xl opacity-[0.06] scale-105" />
              <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10" style={{ backgroundColor: 'transparent', filter: 'brightness(0.9)' }}>
                {personal.profileImage ? (
                  <Image src={personal.profileImage} alt={personal.name || "Profile"} fill className="object-cover" style={{ backgroundColor: 'transparent' }} />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-purple-900/60 to-violet-900/60 flex items-center justify-center">
                    <span className="text-6xl font-black text-purple-300/40">
                      {personal.name?.[0] || "?"}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Content below profile */}
          <div className="text-center w-full max-w-3xl">
            <motion.h2 {...fadeUp(0.3)} className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight whitespace-nowrap" style={{ wordSpacing: '0.1em' }}>
              {personal.name || "Your Name"}
            </motion.h2>

            <motion.p {...fadeUp(0.4)} className="text-slate-400 text-base sm:text-lg font-semibold" style={{ marginTop: '16px', marginBottom: '32px' }}>
              UI/UX, Full Stack Developer and Data Analyst
            </motion.p>

            <motion.div {...fadeUp(0.5)} className="flex flex-col items-center gap-4">
              <div className="flex gap-4">
                <a
                  href={`mailto:${personal.email || "your@email.com"}`}
                  className="flex items-center justify-center gap-2 py-5 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold hover:from-purple-500 hover:to-violet-500 transition-all duration-200 glow-purple w-[220px]"
                >
                  <Mail size={18} /> Hire Me
                </a>
                <a
                  href="https://github.com/ShabareshKumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-5 rounded-xl glass text-slate-300 font-semibold hover:text-white hover:border-purple-500/50 transition-all duration-200 border border-white/10 w-[220px]"
                >
                  <ExternalLink size={18} /> GitHub
                </a>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/shabareshkumar-s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-5 rounded-xl glass text-slate-300 font-semibold hover:text-white hover:border-purple-500/50 transition-all duration-200 border border-white/10 w-[220px]"
                >
                  <ExternalLink size={18} /> LinkedIn
                </a>
                <a
                  href="/Shabareshkumar_S_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-5 rounded-xl glass text-slate-300 font-semibold hover:text-white hover:border-purple-500/50 transition-all duration-200 border border-white/10 w-[220px]"
                >
                  <ExternalLink size={18} /> View Resume
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
