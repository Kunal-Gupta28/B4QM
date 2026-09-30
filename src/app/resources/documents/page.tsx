"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileText,
  Search,
  Download,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  ArrowRight
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";

export interface PublicDoc {
  letter: string;
  code: string;
  title: string;
  category: "Governance & Agreements" | "Client Forms" | "Policies & Appeals";
  fileSize: string;
  fileType: "PDF";
  updatedDate: string;
  description: string;
}

const PUBLIC_DOCUMENTS: PublicDoc[] = [
  {
    letter: "A",
    code: "DOC-A-APP",
    title: "Application Form for Management System Certification",
    category: "Client Forms",
    fileSize: "420 KB",
    fileType: "PDF",
    updatedDate: "Jan 2026",
    description: "Official initial application document required to determine audit scope, man-days, and site sampling."
  },
  {
    letter: "B",
    code: "DOC-B-AGR",
    title: "Certification Terms & Client Agreement",
    category: "Governance & Agreements",
    fileSize: "680 KB",
    fileType: "PDF",
    updatedDate: "Feb 2026",
    description: "Contractual rights and obligations between B4Q Management Ltd. and certified organisations."
  },
  {
    letter: "C",
    code: "DOC-C-CSAT",
    title: "Customer Satisfaction Survey & Feedback",
    category: "Client Forms",
    fileSize: "210 KB",
    fileType: "PDF",
    updatedDate: "Jan 2026",
    description: "Client evaluation form to assess audit value, auditor professionalism, and service delivery."
  },
  {
    letter: "D",
    code: "DOC-D-COMP",
    title: "Complaints, Appeals & Feedback Procedure",
    category: "Policies & Appeals",
    fileSize: "510 KB",
    fileType: "PDF",
    updatedDate: "Mar 2026",
    description: "Public procedure outlining the independent escalation process for client complaints and audit decision appeals."
  },
  {
    letter: "E",
    code: "DOC-E-PROC",
    title: "Certification Process Overview (Stage 1 to Recertification)",
    category: "Governance & Agreements",
    fileSize: "730 KB",
    fileType: "PDF",
    updatedDate: "Feb 2026",
    description: "Detailed walkthrough of the multi-year certification cycle, surveillance audits, and technical decisions."
  },
  {
    letter: "F",
    code: "DOC-F-INFO",
    title: "Information Available on Request",
    category: "Governance & Agreements",
    fileSize: "340 KB",
    fileType: "PDF",
    updatedDate: "Jan 2026",
    description: "Summary of public registry access, certified client verification rules, and confidentiality policies."
  },
  {
    letter: "G",
    code: "DOC-G-COND",
    title: "General Operating Conditions & Impartiality Policy",
    category: "Policies & Appeals",
    fileSize: "590 KB",
    fileType: "PDF",
    updatedDate: "Feb 2026",
    description: "Official statement governing impartiality, zero consulting policy, and conflict of interest management."
  },
  {
    letter: "H",
    code: "DOC-H-FAQ",
    title: "Public FAQ & Certification Reference Guide",
    category: "Client Forms",
    fileSize: "450 KB",
    fileType: "PDF",
    updatedDate: "Jan 2026",
    description: "Answers to common queries regarding remote audits, ISO 27001 transition, and IAF CertSearch integration."
  },
  {
    letter: "I",
    code: "DOC-I-TERMS",
    title: "Website Terms of Use & Legal Notice",
    category: "Governance & Agreements",
    fileSize: "290 KB",
    fileType: "PDF",
    updatedDate: "Jan 2026",
    description: "Terms governing the use of b4qm.com online portals, verification tools, and intellectual property."
  },
  {
    letter: "J.1",
    code: "DOC-J1-LOGO",
    title: "Logo Use Regulations for Certified Clients",
    category: "Policies & Appeals",
    fileSize: "820 KB",
    fileType: "PDF",
    updatedDate: "Mar 2026",
    description: "Strict graphic standards and rules for displaying B4Q certification marks on stationary, websites, and vehicles."
  },
  {
    letter: "K",
    code: "DOC-K-RENEW",
    title: "Follow-up, Granting, Renewing & Suspending Procedure",
    category: "Policies & Appeals",
    fileSize: "610 KB",
    fileType: "PDF",
    updatedDate: "Feb 2026",
    description: "Criteria for certificate grant, scope expansion, surveillance suspension, or certificate withdrawal."
  },
  {
    letter: "L",
    code: "DOC-L-COVID",
    title: "Remote & Hybrid Audit Operations Policy",
    category: "Policies & Appeals",
    fileSize: "390 KB",
    fileType: "PDF",
    updatedDate: "Jan 2026",
    description: "IAF MD4 compliant guidelines for remote auditing using ICT tools during travel or site access restrictions."
  }
];

export default function DocumentLibraryPage() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredDocs = useMemo(() => {
    return PUBLIC_DOCUMENTS.filter((doc) => {
      const matchesSearch =
        doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.letter.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || doc.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#251574] selection:text-white">
      <Header onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Hero */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-20 bg-gradient-to-b from-sky-50/60 via-white to-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-[#008AD8] text-xs font-bold font-mono"
          >
            <FileText className="w-4 h-4 text-[#008AD8]" />
            <span>Public Document Library (Docs A–L)</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-serif font-bold text-[#251574] tracking-tight"
          >
            Public Regulations & Governance Documents
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed"
          >
            Search and download official B4Q certification application forms, client agreements, impartiality policies, and logo use regulations.
          </motion.p>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="bg-slate-100 py-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search document title or code..."
                className="w-full bg-slate-50 text-slate-900 placeholder-slate-400 text-xs pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#008AD8] font-medium"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {["All", "Governance & Agreements", "Client Forms", "Policies & Appeals"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-colors ${
                    selectedCategory === cat
                      ? "bg-[#251574] text-white shadow-sm"
                      : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Document List Rows */}
      <main className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 space-y-4">
        {filteredDocs.map((doc) => (
          <div
            key={doc.code}
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#008AD8] border border-sky-200 flex items-center justify-center font-serif font-bold text-lg shrink-0">
                {doc.letter}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[#251574]">{doc.code}</span>
                  <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    {doc.category}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900">{doc.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed max-w-2xl">{doc.description}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 shrink-0 w-full md:w-auto justify-between md:justify-end pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
              <div className="text-right text-[11px] font-mono text-slate-500">
                <div>Format: <strong className="text-slate-900">{doc.fileType}</strong> ({doc.fileSize})</div>
                <div>Updated: {doc.updatedDate}</div>
              </div>
              <button
                onClick={() => alert(`Downloading document: ${doc.title} (${doc.code}.pdf)`)}
                className="px-5 py-2.5 rounded-full bg-[#008AD8] hover:bg-[#0077BC] text-white text-xs font-bold shadow-sm transition-colors flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </button>
            </div>
          </div>
        ))}
      </main>

      <Footer />
      <WhatsAppWidget />
      <CommandPalette isOpen={commandPaletteOpen} onClose={() => setCommandPaletteOpen(false)} />
    </div>
  );
}
