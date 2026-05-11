"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Folder } from "lucide-react";
import Image from "next/image";
import { portfolioData } from "@/data/config";

const defaultProjects = [
  { title: "Employee Workforce Dashboard", description: "A comprehensive workforce management dashboard with real-time analytics and resource tracking.", image: "", link: "https://employee-workforce-dashboard.vercel.app/" },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const projects =
    portfolioData.projects.length > 0 && portfolioData.projects[0].title
      ? portfolioData.projects
      : defaultProjects;

  return (
    <section id="projects" ref={ref} style={{ paddingTop: '0px', paddingBottom: '20px' }}>
      <div className="w-full px-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '50px' }}
          className="text-center"
        >
          <p className="text-purple-400 font-medium tracking-widest uppercase text-sm mb-2">My Work</p>
          <h2 className="text-4xl font-bold text-white">My Portfolio Showcase</h2>
        </motion.div>

        <div className="flex justify-center">
          <div className="w-full">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl overflow-hidden border border-white/5 hover:border-purple-500/30 transition-all duration-300 group"
              >
                <div className="relative h-32 bg-gradient-to-br from-purple-900/40 to-violet-900/40 overflow-hidden">
                  {project.image ? (
                    <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Folder size={48} className="text-purple-500/40" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div style={{ padding: '20px' }}>
                  <h3 className="text-white font-bold text-lg mb-2 text-center">{project.title || `Project ${i + 1}`}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-3 text-center">
                    {project.description || "A showcase project demonstrating technical skills and creativity."}
                  </p>
                  <div className="flex justify-center">
                    <a
                      href={project.link || "#"}
                      target={project.link && project.link !== "#" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600/20 text-purple-400 text-sm font-medium hover:bg-purple-600/40 hover:text-purple-300 transition-all duration-200 border border-purple-500/20"
                    >
                      <ExternalLink size={14} /> View Project
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}