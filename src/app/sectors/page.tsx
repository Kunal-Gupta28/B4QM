"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Building2,
  Search,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Layers,
  Sparkles,
  Zap,
  Globe2
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";
import { IAF_SECTORS } from "@/data/sectorsData";

export default function SectorsPage() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredSectors = IAF_SECTORS.filter((sector) => {
    const matchesSearch =
      sector.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sector.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sector.iafCode.includes(searchQuery);

    if (activeFilter === "ALL") return matchesSearch;
    if (activeFilter === "MANUFACTURING")
      return (
        matchesSearch &&
        ["03", "04", "05", "06", "07", "09", "10", "12", "13", "14", "17", "18", "19", "20", "21", "22", "23"].includes(
          sector.iafCode
        )
      );
    if (activeFilter === "SERVICES")
      return (
        matchesSearch &&
        ["08", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39"].includes(sector.iafCode)
      );
    if (activeFilter === "PRIMARY_INFRA")
      return matchesSearch && ["01", "24", "28"].includes(sector.iafCode);

    return matchesSearch;
  });

  return (
    <div className="w-full min-h-[100dvh] max-w-[100dvw] flex flex-col bg-slate-50 text-slate-900 overflow-x-hidden">
      <Header onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Hero Section */}
      <section className="relative w-full max-w-full pt-[8dvh] pb-[5dvh] bg-gradient-to-b from-[#251574] via-[#120a3e] to-[#251574] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="w-full max-w-7xl mx-auto px-[4%] sm:px-[5%] lg:px-[6%] relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-mono text-sky-300 backdrop-blur-md">
            <Globe2 className="w-4 h-4 text-amber-400" />
            <span>ACCREDITED INDUSTRIES WE SERVE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Accredited Audit Scope Across <span className="text-sky-400">Industries We Serve.</span>
          </h1>

          <p className="text-slate-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            From Agriculture (IAF 01) and Pharmaceuticals (IAF 13) to IT (IAF 33) and Healthcare (IAF 38) — B4Q provides accredited third-party ISO audit and certification services across every major global industry sector.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto pt-4">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by IAF Code (e.g. 33), Sector Title, or Industry..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white text-slate-900 text-sm font-medium outline-none shadow-xl placeholder:text-slate-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Sectors Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {[
              { id: "ALL", label: "All Industries We Serve" },
              { id: "MANUFACTURING", label: "Manufacturing & Heavy Industry" },
              { id: "SERVICES", label: "Technology & Business Services" },
              { id: "PRIMARY_INFRA", label: "Agri, Infra & Circular Economy" },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                  activeFilter === f.id
                    ? "bg-[#251574] text-white shadow-md"
                    : "bg-white text-slate-700 hover:bg-slate-200 border border-slate-200"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid of 32 Sectors */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSectors.map((sector) => (
              <Link
                key={sector.iafCode}
                href={`/sectors/${sector.slug}`}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-2xl bg-[#251574] text-white flex items-center justify-center font-extrabold font-mono text-sm shadow-md">
                      {sector.iafCode}
                    </span>
                    <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-sky-50 text-[#008AD8] border border-sky-200">
                      IAF CODE {sector.iafCode}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#008AD8] transition-colors">
                    {sector.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {sector.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {sector.applicableStandards.map((std) => (
                      <span
                        key={std}
                        className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-mono font-semibold"
                      >
                        {std}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between text-xs font-bold text-[#251574]">
                  <span>Explore Sector Audit Scope</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
      <CommandPalette isOpen={commandPaletteOpen} onClose={() => setCommandPaletteOpen(false)} />
    </div>
  );
}
