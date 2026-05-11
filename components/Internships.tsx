"use client";
import { motion, useInView, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const internships = [
  {
    role: "Data Analytics Intern",
    company: "Trinity Electrical Engineering and Design",
    location: "Offline",
    duration: "Jun 2025 – Jul 2025 (1 month)",
    description: "Analyzed employee and project data to optimize resource utilization\nand built interactive dashboards for data visualization and decision-making.",
    certificate: "/data-Intern.jpeg",
    landscape: false,
  },
  {
    role: "Web Development Intern",
    company: "Technohacks Edutech Solutions",
    location: "Online",
    duration: "Jun 2024 – Jul 2024 (1 month)",
    description: "Developed responsive web applications including a landing page, calculator, and portfolio website, focusing on UI/UX and improved user engagement.",
    certificate: "/web-intern.jpg",
    landscape: true,
  }
];

function InternshipCard({ item, index, inView }: { item: typeof internships[0]; index: number; inView: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - (rect.left + rect.width / 2)) / rect.width);
    mouseY.set((e.clientY - (rect.top + rect.height / 2)) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2, type: "spring", bounce: 0.4 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1200 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative group cursor-pointer"
    >
      <motion.div
        className="glass rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-500 relative overflow-hidden"
        style={{
          padding: '32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '18px',
          boxShadow: isHovered ? `0 40px 100px rgba(139, 92, 246, 0.2)` : "0 10px 30px rgba(0,0,0,0.3)",
        }}
      >
        <div className="relative z-10">
          <div className="flex flex-col items-center text-center" style={{ gap: '18px' }}>
            <div className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 bg-purple-600/20">
              <Briefcase size={28} className="text-purple-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{item.role}</h3>
              <p className="font-medium text-base text-purple-400" style={{ marginTop: '6px' }}>{item.company}</p>
              <div className="flex flex-wrap justify-center" style={{ gap: '18px', marginTop: '10px' }}>
                <span className="flex items-center gap-1.5 text-slate-400 text-sm">
                  <Calendar size={15} />{item.duration}
                </span>
                <span className="flex items-center gap-1.5 text-slate-400 text-sm">
                  <MapPin size={15} />{item.location}
                </span>
              </div>
            </div>
          </div>

          <p className="text-slate-300 text-center" style={{ lineHeight: '1.6', fontSize: '14px', marginTop: '12px' }}>
            {item.description}
          </p>

          {item.certificate && (
            <div className="flex justify-center" style={{ marginTop: '16px' }}>
              <img
                src={item.certificate}
                alt={item.role + " Certificate"}
                style={{
                  width: item.landscape ? '75%' : 'auto',
                  maxHeight: item.landscape ? 'none' : '360px',
                  height: 'auto',
                  objectFit: 'contain',
                  borderRadius: '10px',
                  border: '2px solid rgba(139, 92, 246, 0.3)',
                  display: 'block',
                  filter: 'brightness(0.9) contrast(1.1)',
                  margin: '0 auto',
                }}
              />
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Internships() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="internships" ref={ref} className="relative" style={{ paddingTop: '0px', paddingBottom: '60px' }}>
      <div className="w-full px-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '50px' }}
          className="text-center"
        >
          <p className="text-purple-400 font-medium tracking-widest uppercase text-sm mb-2">
            Professional Experience
          </p>
          <h2 className="text-4xl font-black text-white">Internships</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {internships.map((item, i) => (
            <InternshipCard key={i} item={item} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
