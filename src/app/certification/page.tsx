"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Award,
  ShieldCheck,
  Search,
  ArrowRight,
  CheckCircle2,
  Lock,
  Leaf,
  HeartPulse,
  Server,
  Utensils,
  Layers,
  Sparkles,
  FileCheck,
} from "lucide-react";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";
import { StandardCard } from "@/components/ui/StandardCard";
import ThreeHologramCube from "@/components/ui/ThreeHologramCube";
import { ISO_STANDARDS } from "@/lib/data";

export default function CertificationHubPage() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Quality & Operations",
    "Information Security & Privacy",
    "Health & Safety",
    "IT Services",
  ];

  const filteredStandards = ISO_STANDARDS.filter((std) => {
    if (selectedCategory === "All") return true;
    if (selectedCategory === "Quality & Operations") return std.id.includes("9001") || std.id.includes("22000");
    if (selectedCategory === "Information Security & Privacy") return std.id.includes("27001") || std.id.includes("27701");
    if (selectedCategory === "Health & Safety") return std.id.includes("45001") || std.id.includes("14001");
    if (selectedCategory === "IT Services") return std.id.includes("20000");
    return true;
  });

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#251574] selection:text-white">
      <Header onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-b from-sky-50/60 via-white to-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <ThreeHologramCube title="B4Q Accredited Standards" />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-[#008AD8] text-xs font-bold"
          >
            <Award className="w-4 h-4 text-[#008AD8]" />
            <span>Exemplar Global Accredited ISO Frameworks</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#251574] tracking-tight"
          >
            ISO Certification Standards Hub
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Explore our complete range of management system certifications. Built on High-Level Structure (HLS) for seamless integrated auditing across quality, information security, environment, health, and IT service standards.
          </motion.p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? "bg-[#251574] text-white shadow-md"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <main className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStandards.map((std) => (
            <StandardCard key={std.id} standard={std} />
          ))}
        </div>

        {/* Integrated Audit Banner */}
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-50 border-2 border-[#251574] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-mono font-bold text-[#008AD8] uppercase tracking-wider block">
              Integrated Management System (IMS)
            </span>
            <h3 className="text-2xl font-serif font-bold text-[#251574]">
              Combine ISO 9001 + 27001 + 14001 Into One Audit
            </h3>
            <p className="text-xs text-slate-600 max-w-xl">
              Reduce total audit man-days by up to 30% by conducting integrated surveillance and recertification audits.
            </p>
          </div>
          <Link href="/get-a-quote">
            <button className="px-7 py-3 rounded-full bg-[#FF4D5A] hover:bg-[#E63946] text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 shrink-0">
              <span>Calculate IMS Savings</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </main>

      <Footer />
      <WhatsAppWidget />
      <CommandPalette isOpen={commandPaletteOpen} onClose={() => setCommandPaletteOpen(false)} />
    </div>
  );
}
