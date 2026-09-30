"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  Leaf,
  Award,
  Sparkles,
  ArrowRight,
  Download,
  Search,
  Check,
  Globe2,
  Clock,
  Layers,
  ChevronRight,
  Sun,
  Moon
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function StyleguidePage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState<"colors" | "typography" | "buttons" | "inputs" | "badges" | "cards">("colors");

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${isDarkMode ? "dark bg-brand-navyDark text-slate-100" : "bg-slate-50 text-slate-900"}`}>
      <Header />

      <main className="flex-grow pt-24 pb-20">
        {/* HERO SECTION */}
        <section className="bg-brand-navy text-white py-14 lg:py-20 relative overflow-hidden border-b border-slate-800">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-emerald-300">
                  <Sparkles className="w-4 h-4 text-brand-coral" /> "Assured Precision" Design System
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
                  Design System Styleguide
                </h1>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Interactive reference showcase for B4Q Management Ltd. UI tokens, typography, button variants, badges, glassmorphism panels, and component micro-interactions.
                </p>
              </div>

              {/* Theme Toggle Trigger */}
              <div className="bg-white/10 p-2 rounded-2xl border border-white/20 flex items-center gap-2">
                <button
                  onClick={() => setIsDarkMode(false)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
                    !isDarkMode ? "bg-white text-brand-navy shadow-md" : "text-slate-300 hover:text-white"
                  }`}
                >
                  <Sun className="w-3.5 h-3.5" /> Light Mode
                </button>
                <button
                  onClick={() => setIsDarkMode(true)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
                    isDarkMode ? "bg-brand-coral text-white shadow-md" : "text-slate-300 hover:text-white"
                  }`}
                >
                  <Moon className="w-3.5 h-3.5" /> Dark Mode
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* STYLEGUIDE CATEGORY NAVIGATION TABS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200 dark:border-slate-800">
            {[
              { id: "colors", label: "Color Tokens" },
              { id: "typography", label: "Typography & Scale" },
              { id: "buttons", label: "Buttons & CTAs" },
              { id: "inputs", label: "Form Inputs" },
              { id: "badges", label: "Badges & Statuses" },
              { id: "cards", label: "Cards & Glass Panels" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-brand-navy text-white dark:bg-brand-coral dark:text-white shadow-md"
                    : "bg-white dark:bg-brand-cardDark text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </section>

        {/* SECTION 1: COLOR SWATCHES */}
        {activeTab === "colors" && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-6">
            <h2 className="text-2xl font-serif font-bold">Brand Color Palette</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { name: "Primary Ink Navy", hex: "#0B1B3F", bg: "bg-[#0B1B3F]", text: "text-white" },
                { name: "Navy Dark", hex: "#070F24", bg: "bg-[#070F24]", text: "text-white" },
                { name: "Card Dark", hex: "#0F1B3A", bg: "bg-[#0F1B3A]", text: "text-white" },
                { name: "Signal Coral", hex: "#F3525A", bg: "bg-[#F3525A]", text: "text-white" },
                { name: "Coral Hover", hex: "#D93B43", bg: "bg-[#D93B43]", text: "text-white" },
                { name: "Verified Emerald", hex: "#10B981", bg: "bg-[#10B981]", text: "text-white" },
                { name: "Surface Light", hex: "#F7F8FB", bg: "bg-[#F7F8FB]", text: "text-slate-900", border: true },
                { name: "Surface Muted", hex: "#EEF1F7", bg: "bg-[#EEF1F7]", text: "text-slate-900", border: true },
                { name: "Border Neutral", hex: "#E3E7EF", bg: "bg-[#E3E7EF]", text: "text-slate-900", border: true },
                { name: "Text Headings", hex: "#0B1B3F", bg: "bg-[#0B1B3F]", text: "text-white" },
                { name: "Text Body", hex: "#475569", bg: "bg-[#475569]", text: "text-white" },
                { name: "Text Muted", hex: "#94A3B8", bg: "bg-[#94A3B8]", text: "text-white" }
              ].map((swatch, idx) => (
                <div key={idx} className={`p-4 rounded-2xl space-y-3 border ${swatch.border ? "border-slate-200" : "border-transparent"}`}>
                  <div className={`h-16 rounded-xl ${swatch.bg} shadow-inner flex items-end p-2`}>
                    <span className={`text-[10px] font-mono font-bold ${swatch.text}`}>{swatch.hex}</span>
                  </div>
                  <div>
                    <div className="text-xs font-bold">{swatch.name}</div>
                    <div className="text-[10px] font-mono text-slate-400">{swatch.hex}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 2: TYPOGRAPHY SCALE */}
        {activeTab === "typography" && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-8">
            <h2 className="text-2xl font-serif font-bold">Typography Hierarchy</h2>

            <div className="bg-white dark:bg-brand-cardDark rounded-2xl p-8 border border-slate-200 dark:border-white/10 shadow-sm space-y-8">
              <div className="space-y-1">
                <span className="text-xs font-mono text-slate-400">Display Hero Headings (Playfair Display / Serif)</span>
                <div className="text-4xl sm:text-5xl font-serif font-bold">Assured ISO Certification & Audit Rigor</div>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono text-slate-400">Section Title H2 (36px / Serif)</span>
                <div className="text-3xl font-serif font-bold">Exemplar Global Authorised Lead Auditor Training</div>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono text-slate-400">Card Title H3 (24px / Sans Bold)</span>
                <div className="text-xl font-bold font-sans">ISO/IEC 27001:2022 Information Security</div>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono text-slate-400">Body Paragraph (17px / Inter Sans)</span>
                <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                  B4Q Management Ltd. is an international ISO certification body operating across the UK, India, USA, and Singapore. Audits are conducted with absolute independence and ISO/IEC 17021-1 compliance.
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono text-slate-400">Monospace Code & Certificate Numbers (JetBrains Mono)</span>
                <div className="font-mono text-xs sm:text-sm font-semibold text-brand-coral">
                  CERT-NO: B4Q-2026-9041-QMS · CLAUSE 8.28 SECURE CODING
                </div>
              </div>
            </div>
          </section>
        )}

        {/* SECTION 3: BUTTON VARIANTS */}
        {activeTab === "buttons" && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-8">
            <h2 className="text-2xl font-serif font-bold">Button Components & Interactive States</h2>

            <div className="bg-white dark:bg-brand-cardDark rounded-2xl p-8 border border-slate-200 dark:border-white/10 shadow-sm space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
                <button className="py-3 px-6 rounded-full bg-brand-coral hover:bg-brand-coralHover text-white text-xs font-semibold shadow-lg transition-transform hover:scale-[1.02] flex items-center justify-center gap-2">
                  <span>Primary Signal Coral</span> <ArrowRight className="w-4 h-4" />
                </button>

                <button className="py-3 px-6 rounded-full bg-brand-navy hover:bg-slate-800 text-white text-xs font-semibold shadow-md transition-transform hover:scale-[1.02] flex items-center justify-center gap-2">
                  <span>Secondary Deep Navy</span> <ShieldCheck className="w-4 h-4" />
                </button>

                <button className="py-3 px-6 rounded-full border border-slate-300 dark:border-slate-700 hover:border-brand-coral text-slate-800 dark:text-slate-200 text-xs font-semibold transition-colors flex items-center justify-center gap-2">
                  <span>Outline Ghost Pill</span> <Download className="w-4 h-4" />
                </button>

                <button className="py-3 px-6 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-lg transition-transform hover:scale-[1.02] flex items-center justify-center gap-2">
                  <span>Verification Emerald</span> <CheckCircle2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </section>
        )}

        {/* SECTION 4: FORM INPUTS */}
        {activeTab === "inputs" && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-8">
            <h2 className="text-2xl font-serif font-bold">Form Elements & Inputs</h2>

            <div className="bg-white dark:bg-brand-cardDark rounded-2xl p-8 border border-slate-200 dark:border-white/10 shadow-sm space-y-6 max-w-2xl">
              <div>
                <label className="block text-xs font-semibold mb-1">Standard Text Input</label>
                <input
                  type="text"
                  placeholder="Enter certificate number..."
                  className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-brand-coral"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1">Select Dropdown</label>
                <select className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-brand-coral">
                  <option>ISO 9001 Quality Management</option>
                  <option>ISO 27001 Information Security</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" id="demoCheck" defaultChecked className="w-4 h-4 rounded text-brand-coral" />
                <label htmlFor="demoCheck" className="text-xs">Accept privacy policy consent checkbox</label>
              </div>
            </div>
          </section>
        )}

        {/* SECTION 5: BADGES */}
        {activeTab === "badges" && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-8">
            <h2 className="text-2xl font-serif font-bold">Status Chips & Badges</h2>

            <div className="bg-white dark:bg-brand-cardDark rounded-2xl p-8 border border-slate-200 dark:border-white/10 shadow-sm flex flex-wrap gap-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" /> Certificate Valid ✓
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-coral/10 border border-brand-coral/20 text-xs font-mono text-brand-coral font-bold">
                <Sparkles className="w-3.5 h-3.5" /> Exemplar Global Authorised
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-brand-navy text-white text-xs font-mono font-bold">
                ISO/IEC 27001:2022
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-600 dark:text-amber-400 font-bold">
                Suspended / Under Review
              </span>
            </div>
          </section>
        )}

        {/* SECTION 6: CARDS */}
        {activeTab === "cards" && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-8">
            <h2 className="text-2xl font-serif font-bold">Glassmorphism Panels & Cards</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-panel p-6 rounded-2xl shadow-xl space-y-3">
                <span className="text-xs font-mono text-brand-coral">Glassmorphism Panel (.glass-panel)</span>
                <h3 className="text-lg font-bold">Frosted Glass Container</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Backdrop-filter blur background utility creating depth and modern aesthetic across hero and search tools.
                </p>
              </div>

              <div className="hover-coral-glow bg-white dark:bg-brand-cardDark p-6 rounded-2xl border border-slate-200 dark:border-white/10 space-y-3 cursor-pointer">
                <span className="text-xs font-mono text-emerald-500">Interactive Glow (.hover-coral-glow)</span>
                <h3 className="text-lg font-bold">Hover Card Glow Effect</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Card lifts 2px with a coral border glow on hover focus states.
                </p>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
