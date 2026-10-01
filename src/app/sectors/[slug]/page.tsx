"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  AlertTriangle,
  FileText,
  HelpCircle,
  Building2,
  ChevronDown
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";
import { IAF_SECTORS } from "@/data/sectorsData";

export default function SectorDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const sector = IAF_SECTORS.find((s) => s.slug === resolvedParams.slug);
  if (!sector) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 overflow-x-hidden">
      <Header onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#251574] via-[#120a3e] to-[#251574] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono text-sky-300">
            <span>IAF CODE {sector.iafCode}</span>
            <span>•</span>
            <span>ACCREDITED SCOPE</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            {sector.title}
          </h1>

          <p className="text-sky-200 text-lg max-w-3xl leading-relaxed">
            {sector.tagline}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {sector.applicableStandards.map((std) => (
              <span key={std} className="px-3 py-1 rounded-full bg-white/15 text-white font-mono text-xs font-bold border border-white/20">
                {std}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main Sector Content Body */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Overview & Intro Paragraphs */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Sector Overview & Audit Scope
            </h2>
            <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed">
              {sector.introText.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          {/* Grid: Why It Matters & Activities */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Why It Matters */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-[#251574]">
                Why Certification Matters in {sector.title}
              </h3>
              <div className="space-y-3">
                {sector.whyItMatters.map((w, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-slate-700 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{w}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Activities & Scope */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-[#008AD8]">
                Covered Activities & Operations
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {sector.activities.map((act, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 rounded-xl text-xs font-semibold text-slate-800 border border-slate-200/80">
                    • {act}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Grid: Focus Areas & Critical Risks */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Focus Areas */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-slate-900">
                Core Audit Focus Areas
              </h3>
              <div className="space-y-2">
                {sector.focusAreas.map((fa, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                    <ShieldCheck className="w-4 h-4 text-sky-500 shrink-0" />
                    <span>{fa}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Critical Risks */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-[#FF4D5A]">
                Critical Industry Risk Areas
              </h3>
              <div className="space-y-2">
                {sector.criticalRisks.map((cr, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                    <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>{cr}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="bg-gradient-to-br from-[#251574] to-[#120a3e] text-white rounded-3xl p-8 md:p-12 shadow-xl space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Verified Business Benefits of Certification
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sector.keyBenefits.map((kb, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sky-100 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{kb}</span>
                </div>
              ))}
            </div>
            <div className="pt-4">
              <Link
                href="/get-a-quote"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF4D5A] hover:bg-rose-600 text-white font-bold rounded-2xl shadow-lg transition-all"
              >
                <span>Get Instant Quote for {sector.title}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Sector FAQs */}
          {sector.faqs.length > 0 && (
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">
                Sector Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                {sector.faqs.map((faq, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full px-6 py-4 text-left font-bold text-slate-900 text-base flex justify-between items-center"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-5 h-5 transition-transform ${openFaq === idx ? "rotate-180" : ""}`} />
                    </button>
                    {openFaq === idx && (
                      <div className="px-6 pb-6 text-sm text-slate-600 border-t border-slate-100 pt-4">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
      <CommandPalette isOpen={commandPaletteOpen} onClose={() => setCommandPaletteOpen(false)} />
    </div>
  );
}
