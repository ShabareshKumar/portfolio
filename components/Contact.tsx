"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { portfolioData } from "@/data/config";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { personal } = portfolioData;

  return (
    <section id="contact" ref={ref} className="flex justify-center" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '30px' }}
        >
          <p className="text-purple-400 font-medium tracking-widest uppercase text-sm mb-4">Get in touch</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Ready to Collaborate?<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-400">Let&apos;s Connect!</span>
          </h2>
          <p className="text-slate-400 max-w-xl">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { icon: Mail, label: "Email", value: personal.email || "your@email.com", href: `mailto:${personal.email || "your@email.com"}` },
            { icon: Phone, label: "Phone", value: personal.phone || "+91 00000 00000", href: `tel:${personal.phone || "+910000000000"}` },
            { icon: MapPin, label: "Location", value: personal.location || "Your City, India", href: null },
          ].map(({ icon: Icon, label, value, href }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all duration-300 group"
              style={{ padding: '20px' }}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-purple-600/20 flex items-center justify-center group-hover:bg-purple-600/30 transition-colors flex-shrink-0">
                  <Icon size={24} className="text-purple-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-slate-500 text-xs mb-1">{label}</p>
                  {href ? (
                    <a href={href} className="text-white font-medium text-sm hover:text-purple-400 transition-colors block truncate">
                      {value}
                    </a>
                  ) : (
                    <p className="text-white font-medium text-sm truncate">{value}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
