"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Download,
  CheckCircle2,
  XCircle,
  Info,
  Sparkles,
  FileCheck,
  ArrowRight,
  Check,
  X
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const LOGO_MARKS = [
  { id: "iso-9001", code: "ISO 9001:2015", standard: "Quality Management System", color: "from-blue-600 to-indigo-700" },
  { id: "iso-27001", code: "ISO/IEC 27001:2022", standard: "Information Security Management", color: "from-rose-600 to-brand-coral" },
  { id: "iso-14001", code: "ISO 14001:2015", standard: "Environmental Management System", color: "from-emerald-600 to-teal-700" },
  { id: "iso-45001", code: "ISO 45001:2018", standard: "Occupational Health & Safety", color: "from-amber-600 to-orange-700" },
  { id: "iso-22000", code: "ISO 22000:2018", standard: "Food Safety Management System", color: "from-yellow-600 to-amber-700" },
  { id: "iso-27701", code: "ISO/IEC 27701:2019", standard: "Privacy Information Management", color: "from-purple-600 to-indigo-700" },
  { id: "iso-20000-1", code: "ISO/IEC 20000-1:2018", standard: "IT Service Management System", color: "from-cyan-600 to-blue-700" }
];

export default function LogoRegulationsPage() {
  const [downloadToast, setDownloadToast] = useState<string | null>(null);

  const triggerDownload = (code: string, format: string) => {
    setDownloadToast(`Downloading B4Q ${code} Certification Mark (${format})...`);
    setTimeout(() => {
      setDownloadToast(null);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-brand-navyDark text-slate-900 dark:text-slate-100 flex flex-col font-sans">
      <Header />

      <main className="flex-grow pt-24 pb-20">
        {/* HERO SECTION */}
        <section className="bg-brand-navy text-white py-14 lg:py-20 relative overflow-hidden border-b border-slate-800">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-emerald-300">
                <ShieldCheck className="w-4 h-4 text-brand-emerald" /> Official Certification Marks & Vector Assets
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
                Certification Marks & Logo Regulations
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Download high-resolution PNG and SVG vector certification marks for certified organisations. Guidelines govern the placement and usage of B4Q certification badges under Regulation J.1.
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

        {/* CERTIFICATION MARKS GRID */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h2 className="text-2xl font-serif font-bold text-brand-navy dark:text-white">
              Official Certification Marks
            </h2>
            <p className="text-xs text-slate-500">
              Only organisations with active, verified B4Q certificates are licensed to display these marks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOGO_MARKS.map((mark) => (
              <div
                key={mark.id}
                className="bg-white dark:bg-brand-cardDark rounded-2xl p-6 border border-slate-200 dark:border-white/10 shadow-sm space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Mark Preview Box */}
                  <div className="p-6 bg-slate-900 rounded-xl border border-slate-800 text-center space-y-3 relative overflow-hidden group">
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-tr shadow-lg flex items-center justify-center text-white font-serif font-black text-xl border border-white/20">
                      B4Q
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-xs font-bold font-mono text-white tracking-wide">{mark.code}</div>
                      <div className="text-[10px] font-mono text-emerald-400">CERTIFIED ORGANISATION</div>
                    </div>
                    <div className="text-[9px] font-mono text-slate-400">Certificate No: B4Q-XXXXXX</div>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-brand-navy dark:text-white">{mark.code}</h3>
                    <p className="text-xs text-slate-500">{mark.standard}</p>
                  </div>
                </div>

                {/* Download Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => triggerDownload(mark.code, "PNG")}
                    className="py-2 px-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-mono font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5" /> PNG
                  </button>
                  <button
                    onClick={() => triggerDownload(mark.code, "SVG")}
                    className="py-2 px-3 bg-brand-navy dark:bg-brand-coral hover:opacity-90 text-white text-xs font-mono font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5" /> Vector SVG
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* LOGO USAGE DO'S & DON'TS TABLE */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="bg-white dark:bg-brand-cardDark rounded-3xl p-8 border border-slate-200 dark:border-white/10 shadow-xl space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs font-mono text-brand-coral uppercase tracking-wider">Regulation J.1</span>
              <h2 className="text-2xl font-serif font-bold text-brand-navy dark:text-white">
                Logo Usage Rules: Do's & Don'ts
              </h2>
              <p className="text-xs text-slate-500 max-w-xl mx-auto">
                Certified organisations must adhere strictly to ISO/IEC 17021-1 regulations regarding certification mark display.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* DO'S COLUMN */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm uppercase font-mono pb-2 border-b border-emerald-500/20">
                  <CheckCircle2 className="w-5 h-5" /> Allowed Usage (Do's)
                </div>
                <ul className="space-y-3 text-xs text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>Display on corporate stationery, letterheads, email signatures, and business cards.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>Publish on official company websites, promotional brochures, and marketing collateral.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>Include valid certificate registration number (`B4Q-XXXXXX`) alongside the mark.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>Maintain original proportions and color specifications supplied in official vector assets.</span>
                  </li>
                </ul>
              </div>

              {/* DON'TS COLUMN */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold text-sm uppercase font-mono pb-2 border-b border-rose-500/20">
                  <XCircle className="w-5 h-5" /> Prohibited Usage (Don'ts)
                </div>
                <ul className="space-y-3 text-xs text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <X className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                    <span><strong>NEVER</strong> apply the mark directly on physical products, product packaging, or primary containers.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <X className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                    <span><strong>NEVER</strong> place the mark on laboratory testing reports or calibration certificates.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <X className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                    <span><strong>NEVER</strong> alter logo colors, aspect ratio, or overlay conflicting typography.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <X className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                    <span><strong>NEVER</strong> continue displaying marks after certificate expiry or suspension.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
