"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Palette, Lightbulb, Zap } from "lucide-react";
import { portfolioData } from "@/data/config";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { personal } = portfolioData;

  const whatIDo = [
    { title: "Full Stack Development", desc: "Building end-to-end web applications with modern technologies", icon: Code },
    { title: "Frontend Development", desc: "Building responsive, performant UIs with React & Next.js", icon: Zap },
    { title: "UI/UX Design", desc: "Crafting intuitive, visually appealing user experiences", icon: Palette },
    { title: "Problem Solving", desc: "Tackling complex challenges with clean, efficient code", icon: Lightbulb },
  ];

  return (
    <section id="about" ref={ref} className="relative" style={{ paddingTop: '0px' }}>
      <div className="w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-6"
        >
          <p className="text-purple-400 font-medium tracking-widest uppercase text-xs mb-1">
            Get to know me
          </p>
          <h2 className="text-5xl font-black text-white mb-3">
            About Me
          </h2>
          <p className="text-slate-300 text-lg leading-7 text-justify" style={{ marginBottom: '24px' }}>
            {personal.description}
          </p>
        </motion.div>

        {/* What I Do */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="glass rounded-2xl border border-white/10" style={{ padding: '28px 32px' }}>
            <h3 className="text-3xl font-bold text-white" style={{ marginBottom: '20px' }}>What I Do</h3>
            <ul className="flex flex-col" style={{ gap: '12px' }}>
              {whatIDo.map((item) => (
                <li key={item.title}>
                  <div className="flex gap-3">
                    <div className="flex items-start" style={{ paddingTop: '3px' }}>
                      <span className="w-2 h-2 rounded-full bg-purple-500 flex-shrink-0" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm leading-5">{item.title}</p>
                      <p className="text-slate-400 text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
