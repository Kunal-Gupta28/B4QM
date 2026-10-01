"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Award,
  Globe2,
  Users,
  CheckCircle2,
  XCircle,
  Download,
  ArrowRight,
  X,
  Building2,
  Check
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";

const TEAM_MEMBERS = [
  {
    id: "sn-nandi",
    name: "SitaNath Nandi",
    role: "Senior Lead Auditor & Technical Director",
    credentials: ["MBA", "B.E. Computer Science"],
    experienceYears: 25,
    standards: ["ISO 9001", "ISO 27001", "ISO 20000-1", "ISO 27701", "ISO 50001"],
    bio: "Over 25 years of IT systems analysis, business architecture, and lead auditing experience across IT services, financial tech, and enterprise management systems."
  },
  {
    id: "miraj-sahab",
    name: "Miraj Sahab",
    role: "Principal Audit & Training Tutor",
    credentials: ["MBA", "Lead Auditor QMS/EMS/OH&S"],
    experienceYears: 31,
    standards: ["ISO 9001", "ISO 14001", "ISO 45001", "ISO 17025", "NABH"],
    bio: "31+ years of auditing, accredited training, and industrial compliance leadership across manufacturing, healthcare, and testing laboratories."
  },
  {
    id: "hari-bharthy",
    name: "Hari Haran Bharthy",
    role: "Quality & Environmental Systems Auditor",
    credentials: ["B.Sc Chemistry", "PG Dip HR"],
    experienceYears: 26,
    standards: ["ISO 9001", "ISO 14001", "TQM", "5S", "SAP-QM"],
    bio: "26+ years of expertise in quality assurance, environmental management systems, process engineering, and total quality management."
  },
  {
    id: "ranadheer-macharla",
    name: "Ranadheer Macharla",
    role: "InfoSec & FSMS Lead Auditor",
    credentials: ["B.Sc CS", "MCA"],
    experienceYears: 21,
    standards: ["ISO 27001", "ISO 22000", "BCM", "CMMI", "EHS"],
    bio: "21 years of corporate training and lead auditing across InfoSec, business continuity, CMMI, quality management, and food safety."
  },
  {
    id: "purushottam-moga",
    name: "Purushottam Moga",
    role: "Industrial & Safety Systems Tutor",
    credentials: ["B.E. Mechanical", "Six Sigma"],
    experienceYears: 20,
    standards: ["ISO 9001", "ISO 14001", "ISO 45001", "Six Sigma"],
    bio: "20+ years of industrial engineering, manufacturing quality, health & safety training, and process optimization."
  },
  {
    id: "yasser-tantawy",
    name: "Dr. Yasser Tantawy",
    role: "Senior Aviation & Defence Auditor",
    credentials: ["Ph.D. Engineering", "LA QHSE/ISMS"],
    experienceYears: 30,
    standards: ["ISO 9001", "ISO 27001", "ISO 22301", "QHSE", "EnMS"],
    bio: "30 years of international auditing across defence, aviation, maritime, and critical infrastructure sectors in UK, Europe, and Middle East."
  }
];

export default function AboutPage() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<typeof TEAM_MEMBERS[0] | null>(null);

  return (
    <div className="w-full min-h-[100dvh] max-w-[100dvw] bg-white text-slate-900 flex flex-col font-sans selection:bg-[#251574] selection:text-white">
      <Header onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Hero */}
      <section className="w-full max-w-full pt-[6dvh] pb-[4dvh] md:pt-[10dvh] md:pb-[6dvh] bg-gradient-to-b from-sky-50/60 via-white to-slate-50 border-b border-slate-200">
        <div className="w-full max-w-7xl mx-auto px-[4%] sm:px-[5%] lg:px-[6%] text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-[#008AD8] text-xs font-bold font-mono"
          >
            <ShieldCheck className="w-4 h-4 text-[#008AD8]" />
            <span>ISO/IEC 17021-1 Certified Impartiality</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-serif font-bold text-[#251574] tracking-tight"
          >
            About B4Q Management Ltd.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed"
          >
            Pioneering international certification body and Exemplar Global authorised training provider delivering impartial, value-adding management system audits across the UK, India, USA, and Singapore.
          </motion.p>
        </div>
      </section>

      {/* Main Narrative & Impartiality Grid */}
      <main className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 space-y-20">
        
        {/* Quality Policy Cards */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono font-bold text-[#008AD8] uppercase tracking-wider block mb-1">Our Core Commitment</span>
            <h2 className="text-3xl font-serif font-bold text-[#251574]">Quality Policy Pillars</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#008AD8] flex items-center justify-center font-bold text-base">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900">Value-Added Auditing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Process-oriented audits focused on real organizational effectiveness, risk management, and continual improvement.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#008AD8] flex items-center justify-center font-bold text-base">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900">Total Impartiality</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Absolute independence guaranteed per ISO/IEC 17021-1 standards with zero consulting conflicts of interest.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#008AD8] flex items-center justify-center font-bold text-base">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900">Global Recognition</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Worldwide certificate validity and Exemplar Global authorised training credentials across four international hubs.
              </p>
            </div>
          </div>
        </section>

        {/* Impartiality Comparison Table: We Always / We Never */}
        <section className="p-8 sm:p-10 rounded-2xl bg-slate-50 border-2 border-[#251574] space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold text-[#008AD8] uppercase tracking-wider block">ISO 17021 Compliance</span>
            <h2 className="text-3xl font-serif font-bold text-[#251574]">Impartiality Protocol: We Always vs We Never</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-3">
              <h3 className="text-base font-bold text-emerald-800 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>What We ALWAYS Do</span>
              </h3>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /><span>Conduct independent technical review before granting certification.</span></li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /><span>Maintain transparent public certificate verification register.</span></li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" /><span>Evaluate ongoing impartiality risks via an independent committee.</span></li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-3">
              <h3 className="text-base font-bold text-[#FF4D5A] flex items-center gap-2">
                <XCircle className="w-5 h-5 text-[#FF4D5A]" />
                <span>What We NEVER Do</span>
              </h3>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-start gap-2"><X className="w-4 h-4 text-[#FF4D5A] shrink-0 mt-0.5" /><span>We NEVER provide management system consultancy services.</span></li>
                <li className="flex items-start gap-2"><X className="w-4 h-4 text-[#FF4D5A] shrink-0 mt-0.5" /><span>We NEVER outsource audits to consultancy companies.</span></li>
                <li className="flex items-start gap-2"><X className="w-4 h-4 text-[#FF4D5A] shrink-0 mt-0.5" /><span>We NEVER state that certification is 'faster, easier or cheaper'.</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold text-[#008AD8] uppercase tracking-wider block">Auditor Credentials</span>
            <h2 className="text-3xl font-serif font-bold text-[#251574]">Our Senior Technical Leadership</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM_MEMBERS.map((m) => (
              <div
                key={m.id}
                onClick={() => setSelectedMember(m)}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 cursor-pointer space-y-4 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#008AD8] font-bold text-lg flex items-center justify-center border border-sky-200 font-serif">
                    {m.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200">
                    {m.experienceYears}+ Yrs Exp.
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900">{m.name}</h3>
                  <span className="text-xs text-[#008AD8] font-semibold block">{m.role}</span>
                </div>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">{m.bio}</p>

                <div className="flex flex-wrap gap-1 pt-2 border-t border-slate-100">
                  {m.standards.slice(0, 3).map((std) => (
                    <span key={std} className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-mono font-medium">
                      {std}
                    </span>
                  ))}
                  {m.standards.length > 3 && <span className="text-[10px] text-slate-400 font-mono">+{m.standards.length - 3} more</span>}
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Team Detail Drawer Modal */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl border border-slate-200 shadow-2xl p-6 sm:p-8 max-w-lg w-full space-y-6 relative text-slate-900"
            >
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-sky-50 text-[#008AD8] font-serif font-bold text-2xl flex items-center justify-center border border-sky-200">
                  {selectedMember.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#251574]">{selectedMember.name}</h3>
                  <span className="text-xs font-semibold text-[#008AD8] block">{selectedMember.role}</span>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-700">
                <div>
                  <strong className="block text-slate-900 font-bold mb-1">Academic & Professional Credentials:</strong>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedMember.credentials.map((c) => (
                      <span key={c} className="px-2 py-0.5 rounded bg-slate-100 text-slate-800 font-mono text-[11px] font-semibold">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <strong className="block text-slate-900 font-bold mb-1">Lead Auditing Standards Covered:</strong>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedMember.standards.map((s) => (
                      <span key={s} className="px-2.5 py-1 rounded-md bg-sky-50 text-[#008AD8] font-mono text-xs font-bold border border-sky-200">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <strong className="block text-slate-900 font-bold mb-1">Professional Background:</strong>
                  <p className="leading-relaxed text-slate-600">{selectedMember.bio}</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
      <WhatsAppWidget />
      <CommandPalette isOpen={commandPaletteOpen} onClose={() => setCommandPaletteOpen(false)} />
    </div>
  );
}
