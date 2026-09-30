"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ShieldCheck, Lock, Leaf, HeartPulse, Sparkles, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function HorizontalScrollSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const trigger = triggerRef.current;

    if (!section || !trigger) return;

    // Small delay to ensure Lenis & DOM layout are fully computed
    const timer = setTimeout(() => {
      const totalScrollWidth = section.scrollWidth - section.clientWidth;

      const ctx = gsap.context(() => {
        gsap.to(section, {
          x: () => -totalScrollWidth,
          ease: "none",
          scrollTrigger: {
            trigger: trigger,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            scrub: 0.6,
            start: "top top",
            end: () => `+=${totalScrollWidth}`,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              setScrollProgress(Math.round(self.progress * 100));
            },
          },
        });
      }, triggerRef);

      ScrollTrigger.refresh();

      return () => {
        ctx.revert();
      };
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleManualScroll = (direction: "left" | "right") => {
    if (!sectionRef.current) return;
    const scrollAmount = 400;
    sectionRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const standardsData = [
    {
      id: "iso-9001",
      code: "ISO 9001:2015",
      name: "Quality Management System",
      desc: "The gold standard for operational consistency, customer satisfaction, and risk-based management.",
      color: "from-sky-600/30 via-[#251574] to-[#120a3e] border-sky-400/40 text-sky-400",
      icon: ShieldCheck,
      badge: "Quality Gold Standard",
    },
    {
      id: "iso-27001",
      code: "ISO 27001:2022",
      name: "Information Security Management",
      desc: "93 modernized Annex A controls protecting cloud infrastructure, enterprise data, and cybersecurity.",
      color: "from-indigo-600/30 via-[#251574] to-[#120a3e] border-indigo-500/40 text-indigo-400",
      icon: Lock,
      badge: "93 Cyber Controls",
    },
    {
      id: "iso-14001",
      code: "ISO 14001:2015",
      name: "Environmental Management",
      desc: "Systematic framework for carbon footprint reduction, resource efficiency, and ESG compliance.",
      color: "from-emerald-600/30 via-[#251574] to-[#120a3e] border-emerald-500/40 text-emerald-400",
      icon: Leaf,
      badge: "ESG & Sustainability",
    },
    {
      id: "iso-45001",
      code: "ISO 45001:2018",
      name: "Occupational Health & Safety",
      desc: "Proactive hazard mitigation, workforce wellbeing, and zero-accident operational safety.",
      color: "from-amber-600/30 via-[#251574] to-[#120a3e] border-amber-500/40 text-amber-400",
      icon: HeartPulse,
      badge: "Workplace Safety",
    },
  ];

  return (
    <section
      ref={triggerRef}
      className="w-full bg-[#251574] text-white relative py-16 md:py-24 overflow-hidden border-t border-b border-indigo-900/60"
    >
      {/* Grid Lines Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex items-center justify-between relative z-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-semibold text-sky-300">
          <Sparkles className="w-4 h-4 text-[#FF4D5A]" />
          <span>ACCREDITED STANDARDS SCOPE</span>
        </div>

        {/* Manual Arrow Controls & Progress Bar */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-sky-300">
            <span>EXPEDITION</span>
            <div className="w-20 h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-sky-400 to-rose-400 transition-all duration-150"
                style={{ width: `${Math.max(10, scrollProgress)}%` }}
              />
            </div>
            <span>{scrollProgress}%</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleManualScroll("left")}
              aria-label="Scroll Left"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleManualScroll("right")}
              aria-label="Scroll Right"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Moving Track Container */}
      <div className="w-full overflow-x-auto scrollbar-none relative z-10">
        <div
          ref={sectionRef}
          className="flex gap-6 md:gap-8 px-4 sm:px-6 lg:px-8 items-center shrink-0 w-max"
        >
          {/* Intro Card */}
          <div className="w-[300px] sm:w-[380px] md:w-[440px] shrink-0 space-y-5 pr-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400">
              Interactive Standard Suite
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Explore Our Accredited ISO Frameworks.
            </h2>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
              Scroll down or use the navigation controls to view detailed specifications for each ISO management standard.
            </p>
          </div>

          {/* 4 Cards Track */}
          {standardsData.map((std) => {
            const IconComp = std.icon;
            return (
              <div
                key={std.id}
                className={`w-[300px] sm:w-[360px] md:w-[400px] h-[440px] shrink-0 rounded-3xl p-7 bg-gradient-to-b ${std.color} backdrop-blur-xl border border-white/20 shadow-2xl flex flex-col justify-between relative group overflow-hidden transition-all duration-300 hover:scale-[1.01]`}
              >
                <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/5 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-md">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[11px] font-mono font-semibold text-slate-200">
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

                <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                  <Link
                    href={`/certification/${std.id}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-slate-900 font-bold text-xs hover:bg-sky-400 hover:text-white transition-all shadow-md"
                  >
                    <span>View Standard Specs</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
