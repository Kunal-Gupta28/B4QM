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
    {
      q: "How does the public certificate verification tool work?",
      a: "Anyone—including enterprise procurement teams and regulators—can enter an organisation name or certificate number into our /verify tool to inspect active validity, scope, issue date, and IAF alignment.",
    },
    {
      q: "Why is impartiality critical for a Certification Body?",
      a: "ISO/IEC 17021 standards strictly prohibit certification bodies from offering management system consulting. B4Q guarantees 100% independent, impartial audits with zero conflict of interest.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#251574] selection:text-white">
      {/* Global Light Header */}
      <Header onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Pure Light Hero Section with Logo Color Accent Gradient */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-gradient-to-b from-sky-50/60 via-white to-slate-50 border-b border-slate-200">
        <div className="absolute inset-0 subtle-grid opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Eyebrow Chip in Cyan Blue */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-[#008AD8] text-xs font-bold"
              >
                <ShieldCheck className="w-4 h-4 text-[#008AD8]" />
                <span>Impartial ISO Certification Body · UK · IN · US · SG</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#251574] tracking-tight leading-[1.1]"
              >
                Certification that stands up to <span className="italic font-normal text-[#FF4D5A]">scrutiny.</span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
              >
                Accredited third-party audits and Exemplar Global auditor training for ISO 9001, 27001, 14001, 45001, 22000, 27701 & 20000-1 across four global hubs.
              </motion.p>

              {/* Action Buttons with Logo Crimson Coral & Cyan Blue */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
              >
                <Link href="/get-a-quote" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#FF4D5A] hover:bg-[#E63946] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2">
                    <span>Get a Certification Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
                <Link href="/verify" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-sky-50 hover:bg-sky-100 text-[#008AD8] border border-sky-200 font-bold text-sm transition-all flex items-center justify-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#008AD8]" />
                    <span>Verify a Certificate</span>
                  </button>
                </Link>
              </motion.div>
            </div>

            {/* Hero Right: Clean Certificate Preview Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <CertificateCard />
            </div>

          </div>
        </div>
      </section>

      {/* Light Transparent Certificate Search Bar Strip */}
      <section className="bg-slate-100 py-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleHeroSearch} className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-3 sm:p-4 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 text-slate-900 px-2">
              <Search className="w-5 h-5 text-[#008AD8] shrink-0" />
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#251574] block">Instant Verification</span>
                <span className="text-xs text-slate-500 hidden sm:block">Search organisation name or cert reference</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto flex-1 max-w-2xl">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter company name (e.g. Apex) or Cert No. (e.g. B4Q-ISMS-2026-8842)..."
                className="w-full bg-slate-50 text-slate-900 placeholder-slate-400 text-sm px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#008AD8] font-mono"
              />
              <select
                value={searchCountry}
                onChange={(e) => setSearchCountry(e.target.value)}
                className="w-full sm:w-auto bg-slate-50 text-slate-700 text-xs px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#008AD8] shrink-0 font-medium"
              >
                <option value="ALL">All Countries</option>
                <option value="UK">United Kingdom 🇬🇧</option>
                <option value="IN">India 🇮🇳</option>
                <option value="US">United States 🇺🇸</option>
                <option value="SG">Singapore 🇸🇬</option>
              </select>
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2.5 bg-[#008AD8] hover:bg-[#0077BC] text-white font-bold text-xs rounded-xl shadow-sm transition-colors shrink-0 flex items-center justify-center gap-1.5"
              >
                Verify Now
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Trust & Stats Strip with Indigo/Cyan Accents */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200/80">
              <span className="text-3xl font-serif font-bold text-[#251574] block mb-1">4 Global</span>
              <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Offices (UK, IN, US, SG)</span>
            </div>
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200/80">
              <span className="text-3xl font-serif font-bold text-[#008AD8] block mb-1">7 Standard</span>
              <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">ISO Systems Certified</span>
            </div>
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200/80">
              <span className="text-3xl font-serif font-bold text-[#251574] block mb-1">150+ Yrs</span>
              <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Combined Auditor Exp.</span>
            </div>
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200/80">
              <span className="text-3xl font-serif font-bold text-[#FF4D5A] block mb-1">100%</span>
              <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">ISO 17021 Impartiality</span>
            </div>
          </div>
        </div>
      </section>

      {/* ISO Standards Grid Section */}
      <section className="py-20 md:py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#008AD8] uppercase tracking-widest block mb-2 font-mono">
              Management Systems
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#251574] tracking-tight mb-4">
              International ISO Certification Standards
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We conduct rigorous, value-added third-party audits tailored to your industry operations.
            </p>

            {/* Filter Category Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-colors ${
                    activeCategory === cat
                      ? "bg-[#251574] text-white shadow-sm"
                      : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStandards.map((std) => (
              <StandardCard key={std.id} standard={std} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Impartiality Commitment */}
      <section className="py-20 md:py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-[#008AD8] uppercase tracking-widest font-mono block">
                Why B4Q Management
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#251574] tracking-tight leading-tight">
                Built on audit integrity, technical rigor & global recognition.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                As an accredited certification body operating per ISO/IEC 17021-1 standards, B4Q delivers process-oriented audits that add tangible operational value without bureaucratic friction.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <Scale className="w-5 h-5 text-[#251574] mb-2" />
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Impartial by Policy</h4>
                  <p className="text-xs text-slate-600">Zero consulting conflict of interest. Independent audit committee review.</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <Users className="w-5 h-5 text-[#008AD8] mb-2" />
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Senior Auditors</h4>
                  <p className="text-xs text-slate-600">Lead auditors with 20–30+ years of sector-specific auditing experience.</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <Globe className="w-5 h-5 text-[#FF4D5A] mb-2" />
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Hybrid & On-Site</h4>
                  <p className="text-xs text-slate-600">IAF MD4 compliant remote and hybrid audit capabilities worldwide.</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <Award className="w-5 h-5 text-[#251574] mb-2" />
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Exemplar Global</h4>
                  <p className="text-xs text-slate-600">Authorised training provider for Lead & Internal Auditor credentials.</p>
                </div>
              </div>
            </div>

            {/* Right Impartiality Executive Light Card */}
            <div className="lg:col-span-6">
              <div className="bg-slate-50 text-slate-900 p-8 md:p-10 rounded-2xl border-2 border-[#251574] shadow-lg relative overflow-hidden">
                <Quote className="w-16 h-16 text-slate-200 absolute top-4 right-4 pointer-events-none" />
                
                <span className="text-xs font-mono font-bold text-[#251574] uppercase tracking-widest block mb-4">
                  Official Statement of Impartiality
                </span>

                <blockquote className="text-base md:text-lg font-serif italic text-slate-800 leading-relaxed mb-6">
                  "B4Q Management Ltd. understands the importance of impartiality in carrying out management system certification activities. We manage conflicts of interest and ensure the objectivity of our certification decisions per ISO/IEC 17021-1 standards."
                </blockquote>

                <div className="space-y-2 text-xs text-slate-700 border-t border-slate-200 pt-6 font-sans">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#008AD8] shrink-0" />
                    <span>We <strong>NEVER</strong> provide management system consulting.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#008AD8] shrink-0" />
                    <span>We <strong>NEVER</strong> outsource audits to consultancy firms.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#008AD8] shrink-0" />
                    <span>We <strong>NEVER</strong> claim certification is 'easier or cheaper'.</span>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <Link href="/about" className="text-xs font-bold text-[#251574] hover:underline inline-flex items-center gap-1">
                    Read Full Quality Policy <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-[10px] text-slate-500 font-mono">ISO/IEC 17021-1:2015</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Process Stepper Section */}
      <section className="py-20 md:py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#008AD8] uppercase tracking-widest font-mono block mb-2">
              Certification Lifecycle
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#251574] tracking-tight">
              Six Steps to Accredited Certification
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              A structured, predictable certification journey from initial quote to triennial recertification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((s) => (
              <div key={s.step} className="p-6 bg-white rounded-xl border border-slate-200 hover:border-slate-300 shadow-sm transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#251574] text-white">
                    Step {s.step}
                  </span>
                  <span className="text-xs font-semibold text-[#008AD8] bg-sky-50 px-2.5 py-0.5 rounded border border-sky-200 font-mono">
                    {s.timeline}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exemplar Global Training Showcase Section */}
      <section className="py-20 md:py-24 bg-sky-50/60 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold text-[#008AD8] uppercase tracking-widest font-mono block mb-2">
                Authorised Training Partner
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#251574] tracking-tight">
                Exemplar Global Accredited Auditor Training
              </h2>
              <p className="text-slate-600 text-sm max-w-2xl mt-2">
                Recognized Lead Auditor and Internal Auditor qualification courses for ISO professionals.
              </p>
            </div>
            <Link href="/training" className="shrink-0">
              <button className="px-6 py-2.5 rounded-full bg-white hover:bg-slate-50 text-[#251574] border border-slate-300 text-xs font-bold shadow-sm transition-colors inline-flex items-center gap-2">
                Browse Full Course Catalog
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[10px] px-2.5 py-1 rounded-full bg-red-50 text-[#FF4D5A] font-mono font-bold block w-fit mb-3 border border-red-100">
                  5 Days · 40 Hours
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">ISO 27001:2022 Lead Auditor</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Master ISMS auditing against the 93 modernized Annex A controls. Includes Exemplar Global examination.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Pass Mark: 70%</span>
                <Link href="/training/lead-auditor-iso-27001" className="text-[#251574] font-bold hover:underline">
                  Course Details →
                </Link>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[10px] px-2.5 py-1 rounded-full bg-sky-50 text-[#008AD8] font-mono font-bold block w-fit mb-3 border border-sky-100">
                  5 Days · 40 Hours
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">ISO 9001:2015 Lead Auditor</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Comprehensive QMS audit methodology covering Process Approach and Risk-Based Thinking.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Pass Mark: 70%</span>
                <Link href="/training/lead-auditor-iso-9001" className="text-[#251574] font-bold hover:underline">
                  Course Details →
                </Link>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[10px] px-2.5 py-1 rounded-full bg-indigo-50 text-[#251574] font-mono font-bold block w-fit mb-3 border border-indigo-100">
                  2 Days · 16 Hours
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">ISO Internal Auditor Certification</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Practical training for internal audit teams, non-conformity drafting, and management review prep.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Pass Mark: 60%</span>
                <Link href="/training/internal-auditor" className="text-[#251574] font-bold hover:underline">
                  Course Details →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-20 md:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#008AD8] uppercase tracking-widest font-mono block mb-2">
              Client Feedback
            </span>
            <h2 className="text-3xl font-serif font-bold text-[#251574] tracking-tight">
              Trusted by Quality & Security Leaders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div key={idx} className="p-6 bg-slate-50 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed italic mb-6">"{t.quote}"</p>
                </div>
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{t.author}</h4>
                    <span className="text-[11px] text-slate-500 block">{t.role} · {t.company}</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-white text-slate-700 font-mono font-semibold border border-slate-200">
                    {t.standard}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-24 bg-slate-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-[#008AD8] uppercase tracking-widest font-mono block mb-2">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl font-serif font-bold text-[#251574] tracking-tight">
              ISO Certification Insights
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-2xs">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-semibold text-slate-900 text-sm hover:bg-slate-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${openFaq === idx ? "rotate-180 text-[#251574]" : ""}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Light Executive CTA Section */}
      <section className="py-16 bg-white text-slate-900 text-center border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#251574]">
            Ready for accredited ISO certification?
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            Get an instant man-day and fee calculation tailored to your organization size and scope.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/get-a-quote">
              <button className="px-8 py-3.5 rounded-full bg-[#FF4D5A] hover:bg-[#E63946] text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2">
                <span>Get a Certification Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-8 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 font-semibold text-sm transition-colors">
                Contact Global Offices
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />

      {/* Discrete WhatsApp Trigger */}
      <WhatsAppWidget />

      {/* Global Command Palette */}
      <CommandPalette isOpen={commandPaletteOpen} onClose={() => setCommandPaletteOpen(false)} />
    </div>
  );
}
