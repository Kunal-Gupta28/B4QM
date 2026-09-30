"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  Globe2,
  Download,
  FileCheck,
  CheckCircle2,
  Check,
  ExternalLink,
  Sparkles,
  Layers
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const ACCREDITATION_CERTIFICATES = [
  {
    title: "Exemplar Global Authorised Training Provider Certificate",
    body: "Exemplar Global Inc., USA (formerly RABQSA)",
    certNo: "EG-ATP-2026-8812",
    scope: "Lead Auditor & Internal Auditor Training Programs for QMS, ISMS, EMS, OH&S, FSMS, PIMS & ITSMS",
    fileSize: "850 KB",
    validity: "Valid through 2028"
  },
  {
    title: "ISO/IEC 17021-1 Management System Accreditation Scope",
    body: "International Accreditation Body & IAF Partner",
    certNo: "CB-ACC-17021-492",
    scope: "Third-party audit and certification of management systems under ISO 9001, 27001, 14001, 45001, 22000, 27701 & 20000-1",
    fileSize: "1.4 MB",
    validity: "Valid through 2028"
  },
  {
    title: "IAF Multilateral Recognition Arrangement (MLA) Member Schedule",
    body: "International Accreditation Forum (IAF)",
    certNo: "IAF-MLA-B4Q-09",
    scope: "Global mutual recognition of management system certificates across 100+ member economies",
    fileSize: "620 KB",
    validity: "Active Standing"
  }
];

const IAF_SCOPES = [
  { code: "IAF 14 / 17 / 18", industry: "Basic Metals, Machinery & Electrical Equipment Manufacturing", standards: "ISO 9001, ISO 14001, ISO 45001" },
  { code: "IAF 19 / 33", industry: "Information Technology, Software Development & Cloud Data Centers", standards: "ISO 27001, ISO 27701, ISO 20000-1" },
  { code: "IAF 03 / 34", industry: "Food Products, Beverage Processing & Agricultural Chains", standards: "ISO 22000, ISO 9001" },
  { code: "IAF 28 / 35", industry: "Construction, Civil Infrastructure & Property Development", standards: "ISO 9001, ISO 14001, ISO 45001" },
  { code: "IAF 32 / 37", industry: "Financial Services, Banking, Healthcare & Professional Services", standards: "ISO 9001, ISO 27001, ISO 27701" }
];

export default function AccreditationPage() {
  const [downloadToast, setDownloadToast] = useState<string | null>(null);

  const handleDownload = (title: string) => {
    setDownloadToast(`Downloading ${title}...`);
    setTimeout(() => {
      setDownloadToast(null);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-brand-navyDark text-slate-900 dark:text-slate-100 flex flex-col font-sans">
      <Header />

      <main className="flex-grow pt-24 pb-20">
        {/* HERO SECTION */}
        <section className="bg-brand-navy text-white py-16 lg:py-24 relative overflow-hidden border-b border-slate-800">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-xs font-mono text-emerald-300 border border-emerald-500/30">
                <ShieldCheck className="w-4 h-4 text-brand-emerald" /> Verified International Accreditation & IAF MLA Status
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                Authentic Accreditation & Global Recognition
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                B4Q Management Ltd. holds authentic international accreditation under ISO/IEC 17021-1 and operates as an Authorised Training Provider of Exemplar Global Inc., USA. Download our active accreditation certificates and scope schedules below.
              </p>
            </div>
          </div>
        </section>

        {/* TOAST NOTIFICATION */}
        {downloadToast && (
          <div className="fixed top-24 right-6 z-50 bg-emerald-600 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 text-xs font-mono animate-bounce">
            <CheckCircle2 className="w-5 h-5" />
            <span>{downloadToast}</span>
          </div>
        )}

        {/* EXEMPLAR GLOBAL PARTNERSHIP BAND */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
          <div className="bg-gradient-to-r from-brand-navy via-slate-900 to-brand-navyDark border border-white/10 rounded-3xl p-8 sm:p-12 text-white shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-coral/20 text-brand-coral text-xs font-mono">
                  <Award className="w-4 h-4" /> Official Training Partnership
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                  Exemplar Global Inc., USA Authorised Provider
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  As an Exemplar Global Authorised Training Provider (formerly RABQSA), B4Q course completion certificates grant delegates direct eligibility for professional auditor registration across global certification bodies and audit registries.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center space-y-3 backdrop-blur-md">
                <div className="w-14 h-14 rounded-2xl bg-brand-coral text-white font-serif font-bold flex items-center justify-center text-xl mx-auto shadow-lg">
                  EG
                </div>
                <div className="text-xs font-mono text-emerald-400 font-bold">EG ATP REF: EG-ATP-2026</div>
                <p className="text-[11px] text-slate-300">Verified & active under Exemplar Global international register.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ACCREDITATION CERTIFICATES DOWNLOAD GRID */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-navy dark:text-white">
              Official Accreditation Certificates
            </h2>
            <p className="text-xs text-slate-500">
              Transparent, public access to our active accreditation documents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ACCREDITATION_CERTIFICATES.map((cert, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-brand-cardDark rounded-2xl p-6 border border-slate-200 dark:border-white/10 shadow-sm space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-brand-coral font-bold">{cert.certNo}</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-600 font-semibold">
                      {cert.validity}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-brand-navy dark:text-white leading-snug">
                    {cert.title}
                  </h3>

                  <div className="text-xs text-slate-400 font-mono">{cert.body}</div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-2 border-t border-slate-100 dark:border-slate-800">
                    {cert.scope}
                  </p>
                </div>

                <button
                  onClick={() => handleDownload(cert.title)}
                  className="w-full py-2.5 px-4 rounded-xl bg-brand-navy dark:bg-brand-coral hover:opacity-90 text-white text-xs font-semibold transition-opacity flex items-center justify-center gap-2 shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" /> Download Certificate ({cert.fileSize})
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* IAF MULTILATERAL AGREEMENT SCOPE TABLE */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="bg-white dark:bg-brand-cardDark rounded-3xl p-8 border border-slate-200 dark:border-white/10 shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-brand-coral uppercase">IAF MLA Scope</span>
                <h2 className="text-2xl font-serif font-bold text-brand-navy dark:text-white">
                  Accredited Industry Sectors & Codes
                </h2>
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-500 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
                <Globe2 className="w-3.5 h-3.5" /> 100+ IAF Economies Recognized
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800 font-mono text-slate-400 uppercase">
                    <th className="py-3 px-4">IAF Sector Code</th>
                    <th className="py-3 px-4">Industry Sector Description</th>
                    <th className="py-3 px-4">Accredited ISO Standards</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {IAF_SCOPES.map((scope, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-900/40">
                      <td className="py-3.5 px-4 font-mono font-bold text-brand-navy dark:text-white">{scope.code}</td>
                      <td className="py-3.5 px-4 text-slate-700 dark:text-slate-300 font-medium">{scope.industry}</td>
                      <td className="py-3.5 px-4 font-mono text-brand-coral">{scope.standards}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
