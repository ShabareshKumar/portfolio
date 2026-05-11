"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Award, ChevronDown } from "lucide-react";

const certifications = [
  {
    title: "IIT Spoken Tutorial",
    details: "Indian Institute of Technology",
    description: "1. Java\n2. C Programming\n3. CSS\n4. R Programming\n5. GIT",
  },
  {
    title: "Guvi",
    details: "Guvi Geek Networks",
    description: "1. Python Zero to Hero\n2. Data Science and Analytics\n3. Digital Marketing\n4. Introduction to Cloud Computing",
  },
  {
    title: "NPTEL",
    details: "National Programme on Technology Enhanced Learning",
    description: "1. Programming in Java\n2. Cloud Computing",
  },
  {
    title: "Cisco",
    details: "Cisco Networking Academy",
    description: "1. Networks Basic\n2. Python Essential 1",
  },
  {
    title: "LinkedIn Learning",
    details: "LinkedIn Corporation",
    description: "1. Introduction to Web Design and Development\n2. Java Object Oriented Programming\n3. Public Speaking\n4. Cloud Computing\n5. Python Data Analysis",
  },
  {
    title: "Great Learning",
    details: "Great Learning Academy",
    description: "1. HTML\n2. CSS\n3. Java Programming\n4. OOPS in Java\n5. Introduction to Graphic Design (Photoshop)\n6. Introduction to Web Design and Development",
  },
];

function CertCard({ cert, index, isOpen, setOpenIndex, inView }: {
  cert: typeof certifications[0];
  index: number;
  isOpen: boolean;
  setOpenIndex: (i: number | null) => void;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="glass rounded-xl border border-white/5 hover:border-purple-500/30 transition-all duration-300"
    >
      <button
        onClick={() => setOpenIndex(isOpen ? null : index)}
        className="w-full px-6 py-5 flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 bg-purple-600/25 border border-purple-500/20">
            <Award size={22} className="text-purple-400" />
          </div>
          <div>
            <p className="text-white font-bold text-base leading-tight">{cert.title}</p>
            <p className="text-slate-400 text-sm mt-1">{cert.details}</p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 ml-4"
        >
          <ChevronDown size={22} className="text-purple-400" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pt-3">
              <div className="h-px bg-purple-500/20 mb-4" />
              <p className="text-slate-300 leading-relaxed whitespace-pre-line text-sm" style={{ paddingLeft: '32px' }}>
                {cert.description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="certifications" ref={ref} style={{ paddingTop: '60px', paddingBottom: '60px', paddingLeft: '60px', paddingRight: '60px' }}>

      {/* Header — left aligned like image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        style={{ marginBottom: '32px' }}
      >
        <p className="text-purple-400 font-medium tracking-widest uppercase text-xs mb-1">My Credentials</p>
        <h2 className="text-4xl sm:text-5xl font-black text-white">Certifications</h2>
      </motion.div>

      {/* 2-column layout — independent columns so expanding one doesn't affect the other */}
      <div className="hidden md:flex gap-3">
        <div className="flex flex-col gap-3 flex-1">
          {certifications.filter((_, i) => i % 2 === 0).map((cert, i) => {
            const realIndex = i * 2;
            const isOpen = openIndex === realIndex;
            return (
              <CertCard key={realIndex} cert={cert} index={realIndex} isOpen={isOpen} setOpenIndex={setOpenIndex} inView={inView} />
            );
          })}
        </div>
        <div className="flex flex-col gap-3 flex-1">
          {certifications.filter((_, i) => i % 2 === 1).map((cert, i) => {
            const realIndex = i * 2 + 1;
            const isOpen = openIndex === realIndex;
            return (
              <CertCard key={realIndex} cert={cert} index={realIndex} isOpen={isOpen} setOpenIndex={setOpenIndex} inView={inView} />
            );
          })}
        </div>
      </div>
      {/* Mobile — single column */}
      <div className="flex flex-col gap-3 md:hidden">
        {certifications.map((cert, i) => (
          <CertCard key={i} cert={cert} index={i} isOpen={openIndex === i} setOpenIndex={setOpenIndex} inView={inView} />
        ))}
      </div>

    </section>
  );
}
