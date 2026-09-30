"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ShieldCheck, Lock, Leaf, HeartPulse, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HorizontalScrollSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const trigger = triggerRef.current;

    if (!section || !trigger) return;

    // Calculate total horizontal scroll width
    const totalScrollWidth = section.scrollWidth - window.innerWidth;

    const ctx = gsap.context(() => {
      gsap.to(section, {
        x: -totalScrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: trigger,
          pin: true,
          scrub: 1,
          end: () => `+=${totalScrollWidth + 300}`,
          invalidateOnRefresh: true,
        },
      });
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  const standardsData = [
    {
      id: "iso-9001",
      code: "ISO 9001:2015",
      name: "Quality Management System",
      desc: "The gold standard for operational consistency, customer satisfaction, and risk-based management.",
      color: "from-sky-500/20 to-[#251574]/80 border-sky-400/40 text-sky-400",
      accent: "#008AD8",
      icon: ShieldCheck,
      badge: "Quality Gold Standard",
    },
    {
      id: "iso-27001",
      code: "ISO 27001:2022",
      name: "Information Security Management",
      desc: "93 modernized Annex A controls protecting cloud infrastructure, enterprise data, and cybersecurity.",
      color: "from-indigo-600/30 to-[#251574]/90 border-indigo-500/40 text-indigo-400",
      accent: "#6366F1",
      icon: Lock,
      badge: "93 Cyber Controls",
    },
    {
      id: "iso-14001",
      code: "ISO 14001:2015",
      name: "Environmental Management",
      desc: "Systematic framework for carbon footprint reduction, resource efficiency, and ESG compliance.",
      color: "from-emerald-600/30 to-[#251574]/90 border-emerald-500/40 text-emerald-400",
      accent: "#10B981",
      icon: Leaf,
      badge: "ESG & Sustainability",
    },
    {
      id: "iso-45001",
      code: "ISO 45001:2018",
      name: "Occupational Health & Safety",
      desc: "Proactive hazard mitigation, workforce wellbeing, and zero-accident operational safety.",
      color: "from-amber-600/30 to-[#251574]/90 border-amber-500/40 text-amber-400",
      accent: "#F59E0B",
      icon: HeartPulse,
      badge: "Workplace Safety",
    },
  ];

  return (
    <div ref={triggerRef} className="overflow-hidden bg-[#251574] text-white relative">
      {/* Background Futuristic Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Outer Pinned Viewport */}
      <div className="h-screen flex items-center relative z-10">

        {/* Section Header Fixed Left Tag */}
        <div className="absolute top-10 left-6 md:left-12 z-20 flex items-center gap-3">
          <div className="px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-semibold text-sky-300 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#FF4D5A]" />
            <span>GSAP PINNED HORIZONTAL EXPEDITION</span>
          </div>
        </div>

        {/* Horizontal Moving Track */}
        <div
          ref={sectionRef}
          className="flex gap-8 px-6 md:px-16 items-center shrink-0"
        >

          {/* Intro Headline Card */}
          <div className="w-[340px] md:w-[460px] shrink-0 space-y-6 pr-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400">
              Interactive Standard Suite
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Scroll Horizontally Through Our Accredited Scope.
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Explore the core ISO management frameworks audited by B4Q&apos;s lead auditors across global enterprise sectors.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span>Scroll Down To Navigate Right →</span>
            </div>
          </div>

          {/* 4 Cards Track */}
          {standardsData.map((std) => {
            const IconComp = std.icon;
            return (
              <div
                key={std.id}
                className={`w-[320px] sm:w-[400px] h-[480px] shrink-0 rounded-3xl p-8 bg-gradient-to-b ${std.color} backdrop-blur-xl border shadow-2xl flex flex-col justify-between relative group overflow-hidden transition-all duration-500 hover:scale-[1.02]`}
              >
                {/* Glow Backdrop */}
                <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/5 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-lg">
                      <IconComp className="w-7 h-7" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[11px] font-mono font-semibold text-slate-200">
                      {std.badge}
                    </span>
                  </div>

                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-300 block mb-1">
                    {std.code}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-3 leading-snug">
                    {std.name}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {std.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
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
    </div>
  );
}
