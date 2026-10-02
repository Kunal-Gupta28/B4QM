"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ChevronDown, Quote } from "lucide-react";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StandardCard } from "@/components/ui/StandardCard";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeVerificationBar } from "@/components/home/HomeVerificationBar";
import { ISO_STANDARDS } from "@/lib/data";

// Lazy loading heavy GSAP Scroll Showcase component
const GsapScrollShowcase = dynamic(() => import("@/components/ui/GsapScrollShowcase"), {
  ssr: false,
  loading: () => <div className="py-20 text-center text-xs font-mono text-slate-400">Loading interactive showcase...</div>,
});

export default function HomePage() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const categories = [
    "All",
    "Quality & Operations",
    "Information Security & Privacy",
    "Health & Safety",
    "IT Services",
  ];

  const filteredStandards = ISO_STANDARDS.filter((std) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Quality & Operations") return std.id.includes("9001") || std.id.includes("22000");
    if (activeCategory === "Information Security & Privacy") return std.id.includes("27001") || std.id.includes("27701");
    if (activeCategory === "Health & Safety") return std.id.includes("45001") || std.id.includes("14001");
    if (activeCategory === "IT Services") return std.id.includes("20000");
    return true;
  });

  const testimonials = [
    {
      quote: "B4Q's lead auditors brought tremendous clarity during our ISO 27001:2022 audit. Their rigorous yet pragmatic evaluation allowed us to secure 4 global enterprise contracts.",
      author: "Rajesh Malhotra",
      role: "VP of Information Security",
      company: "Apex Global Technology",
      standard: "ISO 27001:2022",
    },
    {
      quote: "The certificate verification tool has been invaluable for our enterprise procurement. Clients verify our active ISO 9001 status in seconds without tedious paperwork.",
      author: "Catherine Vance",
      role: "Director of Quality Assurance",
      company: "CyberShield Systems UK",
      standard: "ISO 9001:2015",
    },
    {
      quote: "Impartial, professional, and globally respected. Combining ISO 14001 and ISO 45001 into a single Integrated Management System saved our sites over 30% in audit overhead.",
      author: "Marcus Brody",
      role: "Global EHS Manager",
      company: "Vanguard Heavy Engineering",
      standard: "ISO 14001 & 45001 (IMS)",
    },
  ];

  const faqs = [
    {
      q: "What factors determine the cost of ISO certification?",
      a: "ISO certification fees are based on standardized IAF man-day tables. Factors include total employee headcount, number of operational sites, scope complexity, and industry risk category. B4Q provides transparent, fixed-fee quotes with no hidden surcharges.",
    },
    {
      q: "How long does the ISO certification process take?",
      a: "For small-to-medium enterprises with an established management system, the process from Stage 1 readiness to final certificate issuance typically takes 3 to 6 weeks.",
    },
    {
      q: "Are remote and hybrid audits permitted under accreditation?",
      a: "Yes. Under IAF MD4 guidelines, B4Q conducts hybrid and remote audits using secure video streaming and electronic document review where site risk profiles allow.",
    },
    {
      q: "What is the transition process for ISO 27001:2022?",
      a: "All new ISO 27001 certifications issued by B4Q are under the 2022 revision. Certified firms update their Statement of Applicability (SoA) to reflect the 93 modernized controls.",
    },
  ];

  return (
    <div className="min-h-[100dvh] flex flex-col bg-white overflow-x-hidden w-full max-w-[100dvw]">
      <Header onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      <HomeHero />
      <HomeVerificationBar />

      <GsapScrollShowcase />

      {/* Standards Grid */}
      <section className="py-[6dvh] md:py-[10dvh] bg-white relative w-full max-w-full">
        <div className="w-full max-w-7xl mx-auto px-[4%] sm:px-[5%] lg:px-[6%]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#008AD8] mb-2">
                Accredited Audit Scope
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
                ISO Standards Certification
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    activeCategory === cat
                      ? "bg-[#251574] text-white shadow-sm"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStandards.slice(0, 6).map((std) => (
              <StandardCard key={std.id} standard={std} />
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#008AD8] mb-2">
              Verified Client Outcomes
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Trusted by Industry Leaders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-slate-50 rounded-3xl p-8 border border-slate-200 flex flex-col justify-between">
                <div>
                  <Quote className="w-8 h-8 text-[#008AD8]/40 mb-4" />
                  <p className="text-slate-700 text-sm leading-relaxed italic mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200/60">
                  <div className="font-bold text-slate-900 text-sm">{t.author}</div>
                  <div className="text-xs text-slate-500">{t.role} • {t.company}</div>
                  <div className="inline-block mt-2 px-2.5 py-0.5 bg-indigo-50 text-[#251574] rounded-full text-[10px] font-mono font-bold">
                    {t.standard}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 md:py-32 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#251574] mb-2">
              Common Queries
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between font-bold text-slate-900 text-base md:text-lg hover:text-[#008AD8] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                      openFaq === idx ? "rotate-180 text-[#008AD8]" : "text-slate-400"
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action Strip */}
      <section className="bg-gradient-to-r from-[#251574] via-[#160c49] to-[#251574] text-white py-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Ready to Begin Your ISO Certification Journey?
          </h2>
          <p className="text-sky-200 text-base md:text-lg max-w-2xl mx-auto">
            Get an instant, transparent man-day quote or speak with our accredited lead auditors across UK, IN, US & SG.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/get-a-quote"
              className="px-8 py-4 bg-[#FF4D5A] hover:bg-rose-600 text-white font-bold rounded-2xl shadow-xl transition-all"
            >
              Calculate Quote Now
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold rounded-2xl transition-all"
            >
              Contact Global Offices
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
      <CommandPalette isOpen={commandPaletteOpen} onClose={() => setCommandPaletteOpen(false)} />
    </div>
  );
}
