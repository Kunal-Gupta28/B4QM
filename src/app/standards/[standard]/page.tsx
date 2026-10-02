"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Award,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Download,
  Building2,
  Clock,
  HelpCircle,
  FileCheck,
  Globe,
  Layers,
  Check,
} from "lucide-react";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";
import { getStandardBySlug, ALL_STANDARDS } from "@/data/standardsData";
import { AnnexAExplorer } from "@/components/ui/AnnexAExplorer";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export default function StandardDetailPage() {
  const params = useParams();
  const slug = params?.standard as string;
  const standard = getStandardBySlug(slug) || ALL_STANDARDS[0];

  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("overview");
  const [openClause, setOpenClause] = useState<number | null>(4);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const navItems = [
    { id: "overview", label: "Overview" },
    { id: "benefits", label: "Key Benefits" },
    { id: "clauses", label: "Clause 4–10 Requirements" },
    ...(standard.slug === "iso-27001" ? [{ id: "annex-a", label: "Annex A Controls Explorer" }] : []),
    { id: "cost", label: "Cost & Man-Days" },
    { id: "faq", label: "FAQ" },
  ];

  const scrollToSection = (id: string) => {
    setActiveNav(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#251574] selection:text-white">
      <Header onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-24 md:pb-20 bg-gradient-to-b from-sky-50/60 via-white to-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs
            items={[
              { label: "ISO Standards", href: "/standards" },
              { label: standard.code },
            ]}
          />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-[#008AD8] text-xs font-bold font-mono">
            <Award className="w-4 h-4 text-[#008AD8]" />
            <span>{standard.code} Specification</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#251574] tracking-tight">
            {standard.name}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
            {standard.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link href="/get-a-quote">
              <button className="px-7 py-3.5 rounded-full bg-[#FF4D5A] hover:bg-[#E63946] text-white font-bold text-sm shadow-md transition-colors flex items-center gap-2">
                <span>Get a Certification Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky In-Page Navigation Bar */}
      <div className="sticky top-[65px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-6 overflow-x-auto py-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-xs font-bold whitespace-nowrap px-3 py-1.5 rounded-full transition-colors ${
                activeNav === item.id
                  ? "bg-[#251574] text-white shadow-2xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Sections */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20 flex-1">
        
        {/* Overview Section */}
        <section id="overview" className="space-y-6">
          <span className="text-xs font-mono font-bold text-[#008AD8] uppercase tracking-wider block">Overview & Purpose</span>
          <h2 className="text-3xl font-serif font-bold text-[#251574]">What is {standard.code}?</h2>
          <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-4">
            <p className="text-sm text-slate-700 leading-relaxed">{standard.tagline}</p>
            <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-800 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span><strong>Primary Standard Code:</strong> {standard.code} ({standard.category})</span>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="space-y-6">
          <span className="text-xs font-mono font-bold text-[#008AD8] uppercase tracking-wider block">Value Added</span>
          <h2 className="text-3xl font-serif font-bold text-[#251574]">Key Operational Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {standard.keyBenefits.map((b, idx) => (
              <div key={idx} className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm space-y-2">
                <div className="w-8 h-8 rounded-lg bg-sky-50 text-[#008AD8] flex items-center justify-center font-bold text-xs">
                  {idx + 1}
                </div>
                <h3 className="text-base font-bold text-slate-900">{b.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Clause 4-10 Accordion Section */}
        <section id="clauses" className="space-y-6">
          <span className="text-xs font-mono font-bold text-[#008AD8] uppercase tracking-wider block">High Level Structure (HLS)</span>
          <h2 className="text-3xl font-serif font-bold text-[#251574]">Clause 4–10 Requirements</h2>
          <div className="space-y-3">
            {standard.clauses.map((c) => (
              <div key={c.clauseNumber} className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                <button
                  onClick={() => setOpenClause(openClause === c.clauseNumber ? null : c.clauseNumber)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm hover:bg-slate-100 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#251574] text-white">Clause {c.clauseNumber}</span>
                    <span>{c.title}</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${openClause === c.clauseNumber ? "rotate-180 text-[#251574]" : ""}`} />
                </button>
                {openClause === c.clauseNumber && (
                  <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3 bg-white space-y-2">
                    <p>{c.summary}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Annex A Explorer (If ISO 27001) */}
        {standard.slug === "iso-27001" && (
          <section id="annex-a" className="space-y-6 pt-4">
            <AnnexAExplorer />
          </section>
        )}

        {/* Cost & Man-Days Section */}
        <section id="cost" className="space-y-6">
          <span className="text-xs font-mono font-bold text-[#008AD8] uppercase tracking-wider block">IAF Standardized Pricing</span>
          <h2 className="text-3xl font-serif font-bold text-[#251574]">Audit Duration & Man-Days Factors</h2>
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-md space-y-6">
            <p className="text-xs text-slate-600 leading-relaxed">
              B4Q calculates audit fees strictly according to IAF mandatory document tables. Your quote depends on organizational complexity, employee count, and site numbers—never arbitrary markup.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-2xl font-bold text-[#251574] block">1–25 Headcount</span>
                <span className="text-xs font-mono text-slate-600">~ 2 to 3 Audit Days</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-2xl font-bold text-[#251574] block">26–100 Headcount</span>
                <span className="text-xs font-mono text-slate-600">~ 4 to 6 Audit Days</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <span className="text-2xl font-bold text-[#251574] block">100+ Enterprise</span>
                <span className="text-xs font-mono text-slate-600">Custom Multi-Site Scope</span>
              </div>
            </div>
            <div className="pt-2 text-center">
              <Link href="/get-a-quote">
                <button className="px-8 py-3.5 rounded-full bg-[#FF4D5A] hover:bg-[#E63946] text-white font-bold text-xs shadow-md transition-colors inline-flex items-center gap-2">
                  <span>Calculate Custom Man-Days & Fee Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="space-y-6">
          <span className="text-xs font-mono font-bold text-[#008AD8] uppercase tracking-wider block">Standard FAQ</span>
          <h2 className="text-3xl font-serif font-bold text-[#251574]">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {standard.faqs.map((faq, idx) => (
              <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm hover:bg-slate-100 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${openFaq === idx ? "rotate-180 text-[#251574]" : ""}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
      <WhatsAppWidget />
      <CommandPalette isOpen={commandPaletteOpen} onClose={() => setCommandPaletteOpen(false)} />
    </div>
  );
}
