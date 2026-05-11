"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Database, Globe, Cpu, Layers, Brain, Users, Target, MessageSquare, FileCode } from "lucide-react";

const programmingSkills = [
  { name: "Python", level: "Intermediate", icon: Code2 },
  { name: "Java", level: "Intermediate", icon: Code2 },
  { name: "C", level: "Beginner", icon: FileCode },
  { name: "SQL", level: "Intermediate", icon: Database },
  { name: "Figma", level: "Intermediate", icon: Palette },
  { name: "Canva", level: "Intermediate", icon: Palette },
  { name: "HTML", level: "Advanced", icon: Globe },
  { name: "CSS", level: "Advanced", icon: Layers },
  { name: "JavaScript", level: "Intermediate", icon: Code2 },
];

const softSkills = [
  { name: "Critical Thinking", icon: Brain },
  { name: "Problem Solving", icon: Target },
  { name: "Leadership", icon: Users },
  { name: "Team Collaboration", icon: Users },
  { name: "Decision Making", icon: Target },
  { name: "Time Management", icon: Cpu },
  { name: "Communication", icon: MessageSquare },
  { name: "Adaptability", icon: Layers },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="relative flex justify-center" style={{ paddingTop: '60px', paddingBottom: '60px', paddingLeft: '40px', paddingRight: '40px', scrollMarginTop: '80px' }}>
      <div className="w-full max-w-[1600px]">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-left"
        >
          <p className="text-purple-400 font-medium tracking-widest uppercase text-sm mb-4">What I know</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">Skills &amp; Tools</h2>
        </motion.div>

        {/* Programming Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white text-left" style={{ marginTop: '32px', marginBottom: '24px' }}>Programming Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {programmingSkills.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="glass rounded-2xl border border-white/5 hover:border-purple-500/50 transition-all duration-300 group flex flex-col items-center text-center" style={{ padding: '16px 16px' }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 bg-purple-600/20 group-hover:bg-purple-600/30 transition-colors">
                    <Icon size={22} className="text-purple-400" />
                  </div>
                  <span className="text-white font-bold text-sm" style={{ marginBottom: '6px' }}>{skill.name}</span>
                  <span className="text-xs px-2 py-1 rounded-full font-medium bg-purple-600/20 text-purple-400 border border-purple-500/30 max-w-full truncate">
                    {skill.level}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white text-left" style={{ marginTop: '32px', marginBottom: '24px' }}>Soft Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {softSkills.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.05 }}
                  className="glass rounded-2xl p-6 border border-white/5 hover:border-purple-500/50 transition-all duration-300 group flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-purple-600/20 group-hover:bg-purple-600/30 transition-colors">
                    <Icon size={22} className="text-purple-400" />
                  </div>
                  <span className="text-white font-semibold text-base">{skill.name}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
