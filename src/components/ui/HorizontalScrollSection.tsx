"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  ShieldCheck,
  Lock,
  Leaf,
  HeartPulse,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Layers,
  FileText
} from "lucide-react";
import Link from "next/link";

export default function HorizontalScrollSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const trigger = triggerRef.current;

    if (!section || !trigger) return;

    const ctx = gsap.context(() => {
      const getScrollAmount = () => {
        return section.scrollWidth - window.innerWidth + 120;
      };

      gsap.to(section, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: trigger,
          pin: true,
          scrub: 0.6,
          end: () => `+=${getScrollAmount() + 500}`,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const idx = Math.min(
              3,
              Math.floor(self.progress * 4)
            );
            setActiveCardIndex(idx);
          },
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
      desc: "The global benchmark for operational excellence, customer satisfaction, and risk-based quality control.",
      bgGradient: "from-sky-900/90 via-[#251574] to-indigo-950",
      accentColor: "#008AD8",
      borderColor: "border-sky-400/30",
      icon: ShieldCheck,
      badge: "Quality Gold Standard",
      highlights: ["Clause 4-10 HLS Structure", "Customer Satisfaction Metrics", "Risk-Based Process Controls"],
    },
    {
      id: "iso-27001",
      code: "ISO 27001:2022",
      name: "Information Security (ISMS)",
      desc: "Modernized Annex A framework protecting digital infrastructure, cloud assets, and enterprise privacy.",
      bgGradient: "from-[#251574] via-indigo-950 to-slate-950",
      accentColor: "#FF4D5A",
      borderColor: "border-rose-500/30",
      icon: Lock,
      badge: "93 Cyber Controls",
      highlights: ["93 Modernized Controls", "Threat Intelligence (5.7)", "Cloud Security (5.23)"],
    },
    {
      id: "iso-14001",
      code: "ISO 14001:2015",
      name: "Environmental Management",
      desc: "Systematic framework for carbon reduction, resource optimization, and ESG compliance.",
      bgGradient: "from-emerald-950 via-[#251574] to-teal-950",
      accentColor: "#10B981",
      borderColor: "border-emerald-400/30",
      icon: Leaf,
      badge: "ESG & Sustainability",
      highlights: ["Aspect & Impact Matrix", "Life Cycle Perspective", "Compliance Obligations"],
    },
    {
      id: "iso-45001",
      code: "ISO 45001:2018",
      name: "Occupational Health & Safety",
      desc: "Proactive hazard mitigation, worker consultation, and zero-accident operational safety.",
      bgGradient: "from-amber-950 via-[#251574] to-slate-950",
      accentColor: "#F59E0B",
      borderColor: "border-amber-400/30",
      icon: HeartPulse,
      badge: "Workplace Safety",
    },
  ];

  return (
    <div ref={triggerRef} className="overflow-hidden bg-[#120a3e] text-white relative z-10">
      {/* Dynamic Ambient Neon Radial Gradients */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-[#008AD8]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#FF4D5A]/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Cyber Grid Lines Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none" />

      {/* Outer Pinned Viewport */}
      <div className="h-screen flex flex-col justify-between py-8 relative z-10">

        {/* Top Header Progress Indicator Bar */}
        <div className="px-6 md:px-16 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono font-semibold text-sky-300 flex items-center gap-2 shadow-lg">
              <Sparkles className="w-4 h-4 text-[#FF4D5A] animate-pulse" />
              <span>ACCREDITED ISO SCOPE EXPEDITION</span>
            </div>
          </div>

          {/* Active Standard Progress Dots */}
          <div className="hidden sm:flex items-center gap-3 font-mono text-xs text-slate-300">
            <span>STANDARD</span>
            <div className="flex items-center gap-2">
              {standardsData.map((std, i) => (
                <div
                  key={std.id}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeCardIndex === i
                      ? "w-8 bg-gradient-to-r from-sky-400 to-rose-400 shadow-[0_0_10px_rgba(56,189,248,0.8)]"
                      : "w-2.5 bg-white/20"
                  }`}
                />
              ))}
            </div>
            <span className="font-bold text-white">{activeCardIndex + 1} / 4</span>
          </div>
        </div>

        {/* Center Horizontal Track */}
        <div className="flex-1 flex items-center">
          <div
            ref={sectionRef}
            className="flex gap-8 pl-6 md:pl-16 pr-24 md:pr-44 items-center shrink-0"
          >

            {/* Intro Interactive Headline Card */}
            <div className="w-[340px] sm:w-[440px] shrink-0 space-y-6 pr-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-sky-400 bg-sky-500/10 px-3 py-1 rounded-md border border-sky-500/20">
                <Layers className="w-3.5 h-3.5" />
                <span>Interactive Standard Suite</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                Scroll Horizontally Through Our Accredited Scope.
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                Audited by B4Q&apos;s lead auditors across global enterprise sectors in UK, India, USA & Singapore.
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Scroll Down To Expedite Right →</span>
              </div>
            </div>

            {/* 4 Interactive Standard Cards */}
            {standardsData.map((std, idx) => {
              const IconComp = std.icon;
              const isExpanded = expandedCard === std.id;

              return (
                <div
                  key={std.id}
                  className={`w-[340px] sm:w-[420px] h-[520px] shrink-0 rounded-3xl p-8 bg-gradient-to-b ${std.bgGradient} backdrop-blur-2xl border ${std.borderColor} shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col justify-between relative group overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:border-white/40`}
                >
                  {/* Glowing Holographic Aura */}
                  <div className="absolute -right-12 -top-12 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

                  <div>
                    {/* Card Top Row */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform duration-500">
                        <IconComp className="w-7 h-7 text-sky-300" />
                      </div>
                      <span className="px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-[11px] font-mono font-semibold text-slate-200 backdrop-blur-md">
                        {std.badge}
                      </span>
                    </div>

                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-300 block mb-1">
                      {std.code}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-3 leading-snug">
                      {std.name}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {std.desc}
                    </p>

                    {/* Interactive Highlights Accordion */}
                    {std.highlights && (
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <button
                          onClick={() => setExpandedCard(isExpanded ? null : std.id)}
                          className="w-full flex items-center justify-between text-xs font-mono font-semibold text-sky-300 hover:text-white transition-colors"
                        >
                          <span className="flex items-center gap-1.5">
                            <FileText className="w-3.5 h-3.5 text-[#FF4D5A]" />
                            {isExpanded ? "Hide Audit Scope" : "Quick Audit Highlights"}
                          </span>
                          <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                        </button>

                        {isExpanded && (
                          <div className="mt-3 space-y-1.5 text-xs text-slate-200 font-sans">
                            {std.highlights.map((h, i) => (
                              <div key={i} className="flex items-center gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                                <span>{h}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                    <Link
                      href={`/certification/${std.id}`}
                      className="w-full inline-flex items-center justify-between px-6 py-3.5 rounded-2xl bg-white text-slate-900 font-bold text-xs hover:bg-sky-400 hover:text-white transition-all shadow-lg group-hover:shadow-sky-400/30"
                    >
                      <span>Explore Standard Specs</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}

          </div>
        </div>

        {/* Bottom Status Bar */}
        <div className="px-6 md:px-16 flex items-center justify-between text-xs font-mono text-slate-400 shrink-0">
          <span>B4Q MANAGEMENT LTD • GLOBAL AUDIT SCOPE</span>
          <span className="hidden md:inline">ISO/IEC 17021-1 ACCREDITED</span>
        </div>

      </div>
    </div>
  );
}
