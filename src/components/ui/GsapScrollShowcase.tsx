"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ShieldCheck, Award, Lock, CheckCircle2, Sparkles, Globe2 } from "lucide-react";
import Link from "next/link";

export default function GsapScrollShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRevealRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Scrubbing Text Reveal Animation
      if (textRevealRef.current) {
        const words = textRevealRef.current.querySelectorAll(".reveal-word");
        gsap.fromTo(
          words,
          { opacity: 0.15, y: 15 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            scrollTrigger: {
              trigger: textRevealRef.current,
              start: "top 80%",
              end: "bottom 40%",
              scrub: 0.8,
            },
          }
        );
      }

      // 2. Card Stacking & Scale Scroll Effect
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".bento-card");
        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { scale: 0.9, opacity: 0.4, y: 40 },
            {
              scale: 1,
              opacity: 1,
              y: 0,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "top 50%",
                scrub: 0.5,
              },
            }
          );
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const headlineWords = [
    "We", "don't", "just", "audit", "compliance—", "we", "engineer", "bulletproof",
    "trust", "that", "accelerates", "global", "enterprise", "growth."
  ];

  return (
    <section ref={containerRef} className="py-24 md:py-36 bg-slate-50 relative overflow-hidden">
      {/* Background Decorative Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Pill Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-200/60 text-[#251574] text-xs font-semibold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-4 h-4 text-[#008AD8]" />
            <span>Exemplar Global Accredited Methodology</span>
          </div>
        </div>

        {/* 1. Scrubbing Headline Reveal */}
        <div className="text-center max-w-5xl mx-auto mb-20 md:mb-28">
          <h2
            ref={textRevealRef}
            className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.25]"
          >
            {headlineWords.map((word, idx) => (
              <span key={idx} className="reveal-word inline-block mx-1.5 transition-colors">
                {word}
              </span>
            ))}
          </h2>
        </div>

        {/* 2. Gapless Bento Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 grid-flow-dense"
        >
          {/* Bento Card 1: Large Featured Core Pillar (Col Span 2) */}
          <div className="bento-card md:col-span-2 bg-gradient-to-br from-[#251574] to-[#120a3e] rounded-3xl p-8 md:p-10 text-white shadow-xl border border-indigo-900/40 relative overflow-hidden group">
            <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-[#008AD8]/20 rounded-full blur-3xl group-hover:bg-[#FF4D5A]/20 transition-all duration-700" />

            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 mb-6 text-sky-400 group-hover:scale-110 transition-transform duration-500">
              <ShieldCheck className="w-7 h-7" />
            </div>

            <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
              100% Impartiality Guaranteed
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Uncompromising ISO Accreditation
            </h3>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
              Operating under strict ISO/IEC 17021-1 standards with zero conflict of interest. Our lead auditors evaluate management systems against rigorous global standards.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/about/accreditation"
                className="px-6 py-3.5 bg-[#FF4D5A] hover:bg-rose-600 text-white font-bold rounded-xl shadow-md transition-all text-sm"
              >
                Verify Accreditation Scope
              </Link>
            </div>
          </div>

          {/* Bento Card 2: ISO 27001 Security Standard */}
          <Link
            href="/certification/iso-27001"
            className="bento-card bg-white rounded-3xl p-8 shadow-sm border border-slate-200/80 hover:shadow-xl transition-all duration-500 group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#008AD8] flex items-center justify-center mb-5 group-hover:bg-[#008AD8] group-hover:text-white transition-colors duration-300">
                <Lock className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold text-sky-600 uppercase tracking-wider">
                ISO 27001:2022
              </span>
              <h4 className="text-xl font-bold text-slate-900 mt-1 mb-2">
                Information Security
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Complete Annex A 93 control audit framework protecting digital assets and cloud infrastructure.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center text-xs font-semibold text-[#008AD8]">
              <span>Explore Controls</span>
              <span>→</span>
            </div>
          </Link>

          {/* Bento Card 3: Exemplar Global Training */}
          <Link
            href="/training"
            className="bento-card bg-white rounded-3xl p-8 shadow-sm border border-slate-200/80 hover:shadow-xl transition-all duration-500 group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-[#FF4D5A] flex items-center justify-center mb-5 group-hover:bg-[#FF4D5A] group-hover:text-white transition-colors duration-300">
                <Award className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold text-rose-600 uppercase tracking-wider">
                Exemplar Global
              </span>
              <h4 className="text-xl font-bold text-slate-900 mt-1 mb-2">
                Lead Auditor Courses
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Internationally recognized CQI & Exemplar Global certified lead and internal auditor qualifications.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center text-xs font-semibold text-[#FF4D5A]">
              <span>Course Catalog</span>
              <span>→</span>
            </div>
          </Link>

          {/* Bento Card 4: Global Footprint Stats (Col Span 2) */}
          <div className="bento-card md:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-slate-200/80 hover:shadow-xl transition-all duration-500 relative overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-[#251574] flex items-center justify-center">
                  <Globe2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Global Audit Footprint</h4>
                  <p className="text-xs text-slate-500">4 International Regional Hubs</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 bg-slate-50 rounded-2xl p-4 border border-slate-100">
              <div className="text-center">
                <div className="text-xl font-bold text-[#251574]">UK</div>
                <div className="text-[10px] text-slate-500 uppercase font-mono">Headquarters</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-[#008AD8]">India</div>
                <div className="text-[10px] text-slate-500 uppercase font-mono">Regional Hub</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-indigo-600">USA</div>
                <div className="text-[10px] text-slate-500 uppercase font-mono">Americas</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-emerald-600">Singapore</div>
                <div className="text-[10px] text-slate-500 uppercase font-mono">APAC Hub</div>
              </div>
            </div>
          </div>

          {/* Bento Card 5: Fast Certificate Verification Tool Card */}
          <div className="bento-card md:col-span-2 bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-3xl p-8 shadow-xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono font-medium mb-3">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Instant QR Public Verification</span>
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">
                Verify Any B4Q Certificate
              </h4>
              <p className="text-xs text-slate-300 max-w-md">
                Search our global registry instantly by Organisation Name or Monogram Certificate Number.
              </p>
            </div>

            <Link
              href="/verify"
              className="shrink-0 px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl text-sm transition-colors shadow-md"
            >
              Launch Verification Tool →
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
