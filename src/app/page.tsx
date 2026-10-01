"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  Search,
  ArrowRight,
  CheckCircle2,
  Lock,
  Leaf,
  HeartPulse,
  Server,
  Utensils,
  Globe,
  Users,
  Building2,
  ChevronDown,
  HelpCircle,
  Star,
  Quote,
  Clock,
  BookOpen,
  Check,
  Scale,
  FileText,
} from "lucide-react";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CertificateCard } from "@/components/ui/CertificateCard";
import { StandardCard } from "@/components/ui/StandardCard";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";
import GsapScrollShowcase from "@/components/ui/GsapScrollShowcase";
import ThreeHologramGlobe from "@/components/ui/ThreeHologramGlobe";
import { ISO_STANDARDS } from "@/lib/data";

export default function HomePage() {
  const router = useRouter();

  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchCountry, setSearchCountry] = useState("ALL");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    router.push(`/verify?number=${encodeURIComponent(searchQuery)}&country=${searchCountry}`);
  };

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

  const processSteps = [
    {
      step: "01",
      title: "Application & Proposal",
      desc: "Submit your organizational scope and site details. Receive a transparent multi-year audit proposal with zero hidden fees.",
      timeline: "Days 1–3",
    },
    {
      step: "02",
      title: "Stage 1 Readiness Audit",
      desc: "Impartial evaluation of your management system documentation, policy alignment, and scope readiness.",
      timeline: "Week 2",
    },
    {
      step: "03",
      title: "Stage 2 Certification Audit",
      desc: "Comprehensive on-site or hybrid audit verifying operational execution, evidence logs, and clause compliance.",
      timeline: "Weeks 3–4",
    },
    {
      step: "04",
      title: "Decision & Certificate Issuance",
      desc: "Independent technical review committee verifies audit findings. Accredited certificate issued with QR code verification.",
      timeline: "Day 30",
    },
    {
      step: "05",
      title: "Annual Surveillance Audits",
      desc: "Brief yearly check-in audits in Years 1 & 2 to ensure continuous system health and standard adherence.",
      timeline: "Years 1 & 2",
    },
    {
      step: "06",
      title: "Recertification Cycle",
      desc: "Full triennial review at Year 3 to renew certificate validity for another 3-year cycle.",
      timeline: "Year 3",
    },
  ];

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
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden w-full max-w-full">
      <Header onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
        {/* Ambient Radial Mesh Gradient Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
          <div className="absolute top-12 left-10 w-96 h-96 bg-[#251574]/10 rounded-full blur-3xl" />
          <div className="absolute top-32 right-10 w-96 h-96 bg-[#008AD8]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-[#FF4D5A]/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6"
            >
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-semibold text-slate-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[#251574] font-bold">Exemplar Global</span>
                <span className="text-slate-300">|</span>
                <span className="text-slate-600">Authorised ISO Certification Body</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                ISO Certification That Stands Up To{" "}
                <span className="bg-gradient-to-r from-[#251574] via-[#008AD8] to-[#FF4D5A] bg-clip-text text-transparent">
                  Global Scrutiny.
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl">
                Accredited third-party ISO audit & certification services across UK, India, USA & Singapore. Impartial, transparent, and trusted by global enterprises.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/get-a-quote"
                  className="px-8 py-4 bg-[#FF4D5A] hover:bg-rose-600 text-white font-bold rounded-2xl shadow-lg shadow-rose-500/20 hover:shadow-xl hover:scale-[1.02] transition-all flex items-center gap-2"
                >
                  <span>Get Instant Audit Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  href="/verify"
                  className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 font-semibold rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center gap-2"
                >
                  <Search className="w-4 h-4 text-[#008AD8]" />
                  <span>Verify Certificate</span>
                </Link>
              </div>

              {/* Key Trust Stats */}
              <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-6 max-w-lg">
                <div>
                  <div className="text-2xl md:text-3xl font-extrabold text-[#251574]">4 Global</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">Offices (UK, IN, US, SG)</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-extrabold text-[#008AD8]">7+ ISO</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">Accredited Standards</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-extrabold text-emerald-600">100%</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">Impartiality Audits</div>
                </div>
              </div>
            </motion.div>

            {/* Right Interactive Certificate Card with 3D Hologram Globe */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex flex-col items-center justify-center relative"
            >
              <div className="absolute inset-0 z-0 opacity-80 pointer-events-auto">
                <ThreeHologramGlobe />
              </div>
              
              <div className="relative z-10 w-full max-w-sm sm:max-w-md">
                <CertificateCard
                  certificate={{
                    certNumber: "B4Q-ISMS-849201",
                    clientName: "Global CyberSec Enterprises Ltd",
                    standard: "ISO 27001:2022",
                    scope: "Provision of Cloud Managed Security Services, SOC Monitoring, and Information Security Governance.",
                    issueDate: "2024-01-15",
                    expiryDate: "2027-01-14",
                    status: "Valid",
                    country: "United Kingdom",
                    sites: ["London HQ", "Manchester DC"],
                    type: "Organisation",
                  }}
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Quick Verification Lookup Bar */}
      <section className="bg-[#251574] py-8 text-white relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleHeroSearch} className="flex flex-col md:flex-row items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-3xl border border-white/20">
            <div className="flex items-center gap-3 shrink-0 px-2">
              <ShieldCheck className="w-6 h-6 text-sky-400" />
              <span className="font-bold text-sm tracking-wide">Public Registry Check:</span>
            </div>

            <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-12 gap-3">
              <input
                type="text"
                placeholder="Enter Certificate Number (e.g. B4Q-QMS-104928) or Organisation Name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="sm:col-span-8 px-4 py-2.5 bg-white text-slate-900 text-sm font-medium rounded-xl outline-none placeholder:text-slate-400"
              />
              <select
                value={searchCountry}
                onChange={(e) => setSearchCountry(e.target.value)}
                className="sm:col-span-4 px-4 py-2.5 bg-white text-slate-900 text-sm font-medium rounded-xl outline-none"
              >
                <option value="ALL">All Countries (UK, IN, US, SG)</option>
                <option value="UK">United Kingdom</option>
                <option value="IN">India</option>
                <option value="US">United States</option>
                <option value="SG">Singapore</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-6 py-2.5 bg-[#FF4D5A] hover:bg-rose-600 text-white font-bold text-sm rounded-xl shrink-0 transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4" />
              <span>Verify Now</span>
            </button>
          </form>
        </div>
      </section>

      {/* NEW: GSAP Scrubbing & Stacking Showcase Section */}
      <GsapScrollShowcase />

      {/* Standards Filterable Grid Section */}
      <section className="py-20 md:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#008AD8] mb-2">
                Accredited Audit Scope
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
                ISO Standards Certification
              </h2>
            </div>

            {/* Category Filter Pills */}
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

          {/* Cards Grid (Limited to 6 Featured Standards on Home Page) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStandards.slice(0, 6).map((std) => (
              <StandardCard key={std.id} standard={std} />
            ))}
          </div>

          {/* Browse All 30 Standards CTA Button */}
          <div className="mt-12 text-center">
            <Link
              href="/certification"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#251574] hover:bg-[#008AD8] text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <span>Browse All 30 Accredited ISO Standards</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
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
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs"
              >
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
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />
    </div>
  );
}
