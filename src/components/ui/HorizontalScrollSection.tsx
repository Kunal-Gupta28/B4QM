"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Leaf,
  HeartPulse,
  Sparkles,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Utensils,
  Server,
  UserCheck,
} from "lucide-react";
import Link from "next/link";

export default function HorizontalScrollSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollLimits = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 20);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 20);
  };

  const handleScroll = (direction: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const distance = 420;
    el.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    });
  };

  const standardsData = [
    {
      id: "iso-9001",
      code: "ISO 9001:2015",
      name: "Quality Management System",
      desc: "The global benchmark for quality assurance, risk management, and operational process control.",
      color: "from-sky-600/30 via-[#251574] to-[#120a3e] border-sky-400/40 text-sky-400",
      icon: ShieldCheck,
      badge: "Quality Gold Standard",
    },
    {
      id: "iso-27001",
      code: "ISO 27001:2022",
      name: "Information Security Management",
      desc: "93 Annex A cybersecurity controls protecting enterprise data, cloud infrastructure, and SOC operations.",
      color: "from-indigo-600/30 via-[#251574] to-[#120a3e] border-indigo-500/40 text-indigo-400",
      icon: Lock,
      badge: "93 Cyber Controls",
    },
    {
      id: "iso-14001",
      code: "ISO 14001:2015",
      name: "Environmental Management",
      desc: "Systematic framework for carbon footprint reduction, resource efficiency, and ESG sustainability compliance.",
      color: "from-emerald-600/30 via-[#251574] to-[#120a3e] border-emerald-500/40 text-emerald-400",
      icon: Leaf,
      badge: "ESG & Sustainability",
    },
    {
      id: "iso-45001",
      code: "ISO 45001:2018",
      name: "Occupational Health & Safety",
      desc: "Proactive hazard mitigation, workforce wellbeing, and zero-accident operational safety protocols.",
      color: "from-amber-600/30 via-[#251574] to-[#120a3e] border-amber-500/40 text-amber-400",
      icon: HeartPulse,
      badge: "Workplace Safety",
    },
    {
      id: "iso-22000",
      code: "ISO 22000:2018",
      name: "Food Safety Management",
      desc: "HACCP principles & ISO food supply chain safety from farm to fork.",
      color: "from-rose-600/30 via-[#251574] to-[#120a3e] border-rose-500/40 text-rose-400",
      icon: Utensils,
      badge: "HACCP Food Safety",
    },
    {
      id: "iso-27701",
      code: "ISO 27701:2019",
      name: "Privacy Information Management",
      desc: "Extension to ISO 27001 for GDPR, PIMS governance, and personal data privacy.",
      color: "from-cyan-600/30 via-[#251574] to-[#120a3e] border-cyan-500/40 text-cyan-400",
      icon: UserCheck,
      badge: "GDPR & Privacy",
    },
    {
      id: "iso-20000-1",
      code: "ISO 20000-1:2018",
      name: "IT Service Management",
      desc: "ITIL-aligned service delivery, incident management, and cloud IT infrastructure governance.",
      color: "from-purple-600/30 via-[#251574] to-[#120a3e] border-purple-500/40 text-purple-400",
      icon: Server,
      badge: "ITIL IT Services",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-[#1a0e54] via-[#251574] to-[#120a3e] text-white relative py-20 md:py-28 overflow-hidden border-t border-b border-indigo-900/60 z-20">
      {/* Background Decorative Mesh & Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-96 h-96 bg-[#008AD8]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-20 w-96 h-96 bg-[#FF4D5A]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-semibold text-sky-300 mb-3">
              <Sparkles className="w-4 h-4 text-[#FF4D5A]" />
              <span>HORIZONTAL ACCREDITED SCOPE CAROUSEL</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Explore All 7 Accredited ISO Standards
            </h2>
            <p className="text-slate-300 text-sm md:text-base mt-2 max-w-2xl">
              Swipe or scroll horizontally through B4Q&apos;s full international audit scope.
            </p>
          </div>

          {/* Controls: Left / Right Navigation Buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-mono text-sky-300 hidden sm:inline-block mr-2">
              SWIPE HORIZONTALLY →
            </span>
            <button
              onClick={() => handleScroll("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-all ${
                canScrollLeft
                  ? "bg-white/10 hover:bg-white/20 border-white/30 text-white cursor-pointer shadow-lg active:scale-95"
                  : "bg-white/5 border-white/10 text-slate-500 cursor-not-allowed"
              }`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-all ${
                canScrollRight
                  ? "bg-[#FF4D5A] hover:bg-rose-600 border-rose-500 text-white cursor-pointer shadow-lg active:scale-95"
                  : "bg-white/5 border-white/10 text-slate-500 cursor-not-allowed"
              }`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Pure Horizontal Scroll Container with Touch Kinetic Inertia */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScrollLimits}
          className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4 px-1 cursor-grab active:cursor-grabbing"
          style={{ scrollBehavior: "smooth" }}
        >
          {standardsData.map((std, idx) => {
            const IconComp = std.icon;
            return (
              <motion.div
                key={std.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                viewport={{ once: true }}
                className={`snap-start w-[300px] sm:w-[350px] md:w-[380px] h-[460px] shrink-0 rounded-3xl p-8 bg-gradient-to-b ${std.color} backdrop-blur-xl border border-white/20 shadow-2xl flex flex-col justify-between relative group overflow-hidden transition-transform duration-300 hover:-translate-y-2`}
              >
                {/* Glow Ring Backdrop */}
                <div className="absolute -right-12 -bottom-12 w-52 h-52 bg-white/5 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-lg">
                      <IconComp className="w-7 h-7" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[11px] font-mono font-semibold text-sky-200">
                      {std.badge}
                    </span>
                  </div>

                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-300 block mb-1">
                    {std.code}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-snug">
                    {std.name}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {std.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <Link
                    href={`/certification/${std.id}`}
                    className="w-full py-3 rounded-xl bg-white hover:bg-sky-400 hover:text-white text-slate-900 font-bold text-xs transition-all shadow-md flex items-center justify-center gap-2 group-hover:bg-[#FF4D5A] group-hover:text-white"
                  >
                    <span>Explore ISO Requirements</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
