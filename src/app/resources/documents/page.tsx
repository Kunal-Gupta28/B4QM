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
  ArrowRight,
  Lock,
  Scale,
  Building2,
  RefreshCw
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
  fileType: "PDF" | "DOCX";
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
    updatedDate: "July 2026",
    description: "Official initial application form required to determine organizational scope, employee headcount, and site sampling."
  },
  {
    letter: "B",
    code: "DOC-B-AGR",
    title: "Certificate Agreement & Proposal Acceptance",
    category: "Governance & Agreements",
    fileSize: "680 KB",
    fileType: "PDF",
    updatedDate: "July 2026",
    description: "Contractual agreement specifying fixed-fee terms, multi-year audit scope, and client rights."
  },
  {
    letter: "C",
    code: "DOC-C-CSAT",
    title: "Customer Satisfaction Survey Form",
    category: "Client Forms",
    fileSize: "210 KB",
    fileType: "PDF",
    updatedDate: "July 2026",
    description: "Client evaluation form to assess audit value, auditor professionalism, and service delivery."
  },
  {
    letter: "D",
    code: "DOC-D-COMP",
    title: "Procedures for Complaints, Appeals & Feedback",
    category: "Policies & Appeals",
    fileSize: "510 KB",
    fileType: "PDF",
    updatedDate: "July 2026",
    description: "Public procedure outlining the independent escalation process for client complaints and audit decision appeals."
  },
  {
    letter: "E",
    code: "DOC-E-PROC",
    title: "Certification Process (Stage 1 to Recertification)",
    category: "Governance & Agreements",
    fileSize: "730 KB",
    fileType: "PDF",
    updatedDate: "July 2026",
    description: "Detailed walkthrough of the multi-year certification cycle, surveillance audits, and technical decisions."
  },
  {
    letter: "F",
    code: "DOC-F-INFO",
    title: "Information Available on Request Policy",
    category: "Governance & Agreements",
    fileSize: "340 KB",
    fileType: "PDF",
    updatedDate: "July 2026",
    description: "Summary of public registry access, client verification rules, geographical scope, and fee structures."
  },
  {
    letter: "G",
    code: "DOC-G-COND",
    title: "General Operating Conditions for Applicants & B4Q",
    category: "Governance & Agreements",
    fileSize: "590 KB",
    fileType: "PDF",
    updatedDate: "July 2026",
    description: "Official operating conditions governing applicant responsibilities, B4Q obligations, and site access."
  },
  {
    letter: "H",
    code: "DOC-H-FAQ",
    title: "Frequently Asked Questions (FAQ) Reference Guide",
    category: "Client Forms",
    fileSize: "450 KB",
    fileType: "PDF",
    updatedDate: "July 2026",
    description: "Answers to common queries regarding remote audits, ISO 27001:2022 transition, and certificate validity."
  },
  {
    letter: "I",
    code: "DOC-I-TERMS",
    title: "Website Terms of Use & Legal Notices",
    category: "Governance & Agreements",
    fileSize: "290 KB",
    fileType: "PDF",
    updatedDate: "July 2026",
    description: "Terms governing the use of b4qm.com online portals, verification tools, cookies, and disclaimers."
  },
  {
    letter: "J",
    code: "DOC-J-LOGO",
    title: "Logo Usage Regulations for Certified Clients",
    category: "Policies & Appeals",
    fileSize: "820 KB",
    fileType: "PDF",
    updatedDate: "July 2026",
    description: "Strict graphic standards and rules for displaying B4Q certification marks on stationary, websites, and vehicles."
  },
  {
    letter: "K",
    code: "DOC-K-SUSP",
    title: "Procedure for Follow-Up, Grant, Renewal & Suspension",
    category: "Policies & Appeals",
    fileSize: "610 KB",
    fileType: "PDF",
    updatedDate: "July 2026",
    description: "Criteria for certificate grant, scope expansion, surveillance suspension, or certificate withdrawal."
  },
  {
    letter: "L",
    code: "DOC-L-IMP",
    title: "Statement of Impartiality Policy",
    category: "Policies & Appeals",
    fileSize: "390 KB",
    fileType: "PDF",
    updatedDate: "July 2026",
    description: "Public commitment to 100% independent, unbiased assessment under ISO/IEC 17021-1 with zero consulting conflict."
  },
  {
    letter: "M",
    code: "DOC-M-POL",
    title: "Impartiality & Conflict of Interest Policy",
    category: "Policies & Appeals",
    fileSize: "480 KB",
    fileType: "PDF",
    updatedDate: "July 2026",
    description: "Internal governance framework managing potential threats to impartiality across all audit activities."
  },
  {
    letter: "N",
    code: "DOC-N-FAKE",
    title: "Fake / Forgery / Duplicate Certificate Warning & Registry",
    category: "Policies & Appeals",
    fileSize: "310 KB",
    fileType: "PDF",
    updatedDate: "July 2026",
    description: "Official advisory on identifying fake or forged certificates and verifying authentic B4Q QR monogram seals."
  },
  {
    letter: "O",
    code: "DOC-O-CLIENT",
    title: "Obligation of Registration Client",
    category: "Governance & Agreements",
    fileSize: "410 KB",
    fileType: "PDF",
    updatedDate: "July 2026",
    description: "Exhaustive list of 13 mandatory requirements client organizations must maintain to keep active certification."
  },
  {
    letter: "P",
    code: "DOC-P-QCC",
    title: "Obligation of B4Q Management Ltd.",
    category: "Governance & Agreements",
    fileSize: "380 KB",
    fileType: "PDF",
    updatedDate: "July 2026",
    description: "Formal commitments of B4Q Management Ltd. regarding auditor visits, confidentiality, and accurate reporting."
  }
];

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
              <div
                key={doc.code}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-[#251574] text-white flex items-center justify-center font-extrabold font-mono text-base shadow-md">
                        {doc.letter}
                      </div>
                      <div>
                        <span className="font-mono text-xs font-bold text-[#008AD8]">{doc.code}</span>
                        <span className="text-[10px] text-slate-400 block font-mono">Updated: {doc.updatedDate}</span>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-mono font-semibold">
                      {doc.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {doc.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {doc.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500">{doc.fileType} • {doc.fileSize}</span>
                  <a
                    href={`/docs/${doc.code}.pdf`}
                    download
                    className="px-5 py-2.5 bg-[#251574] hover:bg-[#008AD8] text-white text-xs font-bold rounded-xl transition-colors shadow-sm flex items-center gap-2"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>
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
