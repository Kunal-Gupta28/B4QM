"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ProcessStep {
  step: string;
  title: string;
  desc: string;
  timeline: string;
}

export default function ProcessStepperGsap({ steps }: { steps: ProcessStep[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!cardsRef.current) return;

      const cards = cardsRef.current.querySelectorAll(".process-card");

      // Slow, luxurious GSAP Parallax Entrance for white cards
      cards.forEach((card, idx) => {
        gsap.fromTo(
          card,
          {
            y: 90 + (idx % 3) * 20, // Different initial offset per column for depth
            opacity: 0,
            scale: 0.96,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "top 60%",
              scrub: 1.2, // Slower, silky parallax scrub
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-24 md:py-36 bg-slate-50 border-t border-slate-200/80 relative z-20 shadow-2xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF4D5A] mb-2">
            Transparent Audit Roadmap
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            6-Step ISO Certification Lifecycle
          </h2>
          <p className="text-slate-600 text-sm md:text-base mt-3">
            From application to 3-year recertification. Simple, structured, and compliant with ISO/IEC 17021-1.
          </p>
        </div>

        {/* Parallax White Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {steps.map((step) => (
            <div
              key={step.step}
              className="process-card bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl transition-shadow relative overflow-hidden group"
            >
              {/* Subtle Card Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#251574] via-[#008AD8] to-[#FF4D5A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-extrabold font-mono text-[#251574]">
                  {step.step}
                </span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-mono font-semibold border border-slate-200">
                  {step.timeline}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#008AD8] transition-colors">
                {step.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <Link
            href="/get-a-quote"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#251574] hover:bg-indigo-900 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all"
          >
            <span>Calculate Man-Days & Audit Cost</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
