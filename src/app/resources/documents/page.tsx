"use client";

import React, { useState, useMemo } from "react";
import { FileText, Search, Scale } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";
import { PUBLIC_DOCUMENTS } from "@/data/documentsData";
import { DocumentCard } from "@/components/documents/DocumentCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export default function DocumentLibraryPage() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Governance & Agreements", "Client Forms", "Policies & Appeals"];

  const filteredDocs = useMemo(() => {
    return PUBLIC_DOCUMENTS.filter((doc) => {
      const matchesSearch =
        doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === "All" || doc.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 overflow-x-hidden">
      <Header onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#251574] via-[#120a3e] to-[#251574] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 text-center">
          <Breadcrumbs
            items={[
              { label: "General", href: "/resources/documents" },
              { label: "Public Document Library" },
            ]}
          />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-mono text-sky-300">
            <FileText className="w-4 h-4 text-sky-400" />
            <span>PUBLIC DOCUMENT LIBRARY (DOCS A–P)</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Registered Corporate Documents & Policies
          </h1>

          <p className="text-slate-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Access mandatory ISO/IEC 17021-1 accredited documentation, application forms, general conditions, logo usage guidelines, and impartiality policies.
          </p>

          {/* Search Input */}
          <div className="max-w-xl mx-auto pt-4">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search documents by title, code (e.g. DOC-A-APP), or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white text-slate-900 text-sm font-medium outline-none shadow-xl placeholder:text-slate-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Document Table & Policies Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? "bg-[#251574] text-white shadow-md"
                    : "bg-white text-slate-700 hover:bg-slate-200 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Documents Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredDocs.map((doc) => (
              <DocumentCard key={doc.code} doc={doc} />
            ))}
          </div>

          {/* Corporate Terms & Refund Policy Highlight Box */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm space-y-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Corporate Operating Terms & Refund Policy Highlights
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Return & Refund Policy */}
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
                  <Scale className="w-5 h-5 text-[#FF4D5A]" />
                  <span>Return & Refund Policy</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Requests for refund must be submitted within <strong>7 days</strong> of purchase in original condition. Under B4Q policy, exactly <strong>50% of the total amount will be refunded</strong> to the customer bank account within <strong>5–7 working days</strong>.
                </p>
              </div>

              {/* Information Available on Request */}
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
                  <FileText className="w-5 h-5 text-[#008AD8]" />
                  <span>Information Available on Request</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  By emailing <strong className="text-[#251574]">info@b4qm.com</strong>, stakeholders can request geographical areas of operation, status of a given certification, certified client names/cities, fee structures, or formal quotations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
      <CommandPalette isOpen={commandPaletteOpen} onClose={() => setCommandPaletteOpen(false)} />
    </div>
  );
}
