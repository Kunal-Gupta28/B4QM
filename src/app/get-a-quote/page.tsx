"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calculator,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Globe2,
  Users,
  Check,
  ArrowRight,
  ArrowLeft,
  Award,
  Layers,
  FileText,
  Send,
  Download,
  Info,
  BadgeCheck,
} from "lucide-react";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";

const STANDARDS_OPTIONS = [
  { id: "iso-9001", code: "ISO 9001:2015", title: "Quality Management System (QMS)", category: "Quality & Operations" },
  { id: "iso-27001", code: "ISO/IEC 27001:2022", title: "Information Security Management (ISMS)", category: "Security & Privacy" },
  { id: "iso-14001", code: "ISO 14001:2015", title: "Environmental Management System (EMS)", category: "Environment & Safety" },
  { id: "iso-45001", code: "ISO 45001:2018", title: "Occupational Health & Safety (OH&S)", category: "Environment & Safety" },
  { id: "iso-22000", code: "ISO 22000:2018", title: "Food Safety Management System (FSMS)", category: "Food & Agriculture" },
  { id: "iso-27701", code: "ISO/IEC 27701:2019", title: "Privacy Information Management (PIMS)", category: "Security & Privacy" },
  { id: "iso-20000-1", code: "ISO/IEC 20000-1:2018", title: "IT Service Management System (ITSMS)", category: "IT & Digital" }
];

const COUNTRIES = [
  "United Kingdom",
  "India",
  "United States",
  "Singapore",
  "Australia",
  "Germany",
  "United Arab Emirates",
  "Canada",
  "France",
  "Japan",
  "Other International"
];

const SITES_OPTIONS = ["1 Site (Single Location)", "2 to 5 Sites", "6 to 15 Sites", "16+ Multi-site"];
const EMPLOYEES_OPTIONS = ["1 - 25 Employees", "26 - 100 Employees", "101 - 500 Employees", "501 - 2,500 Employees", "2,500+ Employees"];
const INDUSTRIES = [
  "Software & IT Services",
  "Manufacturing & Engineering",
  "Food, Agriculture & Processing",
  "Construction & Infrastructure",
  "Healthcare & Pharmaceuticals",
  "Financial Services & Banking",
  "Logistics & Supply Chain",
  "Public Sector & Education",
  "Professional Services & Consulting"
];

export default function GetAQuotePage() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [step, setStep] = useState(1);

  const [selectedStandards, setSelectedStandards] = useState<string[]>(["iso-9001"]);
  const [orgDetails, setOrgDetails] = useState({
    companyName: "",
    country: "United Kingdom",
    sites: "1 Site (Single Location)",
    employees: "1 - 25 Employees",
    industry: "Software & IT Services"
  });
  const [certScope, setCertScope] = useState({
    certStatus: "New Certification",
    existingCB: "",
    scopeDescription: ""
  });
  const [contactInfo, setContactInfo] = useState({
    contactName: "",
    workEmail: "",
    phone: "",
    jobTitle: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quoteReference, setQuoteReference] = useState("");

  const toggleStandard = (id: string) => {
    if (selectedStandards.includes(id)) {
      if (selectedStandards.length > 1) {
        setSelectedStandards(selectedStandards.filter((s) => s !== id));
      }
    } else {
      setSelectedStandards([...selectedStandards, id]);
    }
  };

  const calculatedManDays = useMemo(() => {
    let base = selectedStandards.length * 3.5;
    if (orgDetails.employees.includes("26 - 100")) base += 1.5;
    if (orgDetails.employees.includes("101 - 500")) base += 3.5;
    if (orgDetails.employees.includes("501")) base += 6;
    if (orgDetails.employees.includes("2,500+")) base += 9;

    if (orgDetails.sites.includes("2 to 5")) base += 2;
    if (orgDetails.sites.includes("6 to 15")) base += 4;
    if (orgDetails.sites.includes("16+")) base += 7;

    if (selectedStandards.length > 1) {
      base = base * 0.8;
    }

    return Math.round(base * 10) / 10;
  }, [selectedStandards, orgDetails]);

  const handleSubmitQuote = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `B4Q-Q-${Math.floor(100000 + Math.random() * 900000)}`;
    setQuoteReference(ref);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-[#251574] selection:text-white">
      <Header onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Hero Header */}
      <section className="pt-20 pb-12 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-[#008AD8] text-xs font-bold font-mono">
            <Calculator className="w-4 h-4 text-[#008AD8]" />
            <span>IAF Standardised Audit Man-Day Calculator</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#251574]">
            Calculate Your ISO Certification Quote
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Get an accurate, transparent man-days quote estimation tailored to your organisation's size, standard combination, and site structure.
          </p>
        </div>
      </section>

      {/* Stepper Progress Bar */}
      {!isSubmitted && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 w-full">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-slate-500">
              <span className="text-[#008AD8] font-bold">STEP {step} OF 4</span>
              <span className="font-semibold text-slate-700">
                {step === 1 && "Select ISO Standards"}
                {step === 2 && "Organisation Details"}
                {step === 3 && "Scope & Status"}
                {step === 4 && "Review & Submit"}
              </span>
            </div>

            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#008AD8]"
                animate={{ width: `${step * 25}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <div className="grid grid-cols-4 gap-2 text-center text-[11px] font-mono">
              {["1. Standards", "2. Org Info", "3. Scope", "4. Review"].map((label, idx) => (
                <div
                  key={idx}
                  className={`py-1.5 rounded-lg transition-colors ${
                    step === idx + 1
                      ? "bg-[#251574] text-white font-bold"
                      : step > idx + 1
                      ? "bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200"
                      : "text-slate-400 bg-slate-50"
                  }`}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Quote Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">
        {!isSubmitted ? (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-6 sm:p-8 space-y-8">
            
            {/* Step 1: Standards Selection */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-[#251574] mb-1">Step 1: Choose ISO Standards</h2>
                  <p className="text-xs text-slate-500">Select one or multiple standards. Integrated audits offer up to 20% man-day savings.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {STANDARDS_OPTIONS.map((std) => {
                    const isSelected = selectedStandards.includes(std.id);
                    return (
                      <div
                        key={std.id}
                        onClick={() => toggleStandard(std.id)}
                        className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          isSelected
                            ? "border-[#008AD8] bg-sky-50/50 shadow-sm"
                            : "border-slate-200 bg-slate-50 hover:border-slate-300"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-mono text-xs font-bold text-[#008AD8]">{std.code}</span>
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${isSelected ? "bg-[#008AD8] text-white" : "border border-slate-300 bg-white"}`}>
                            {isSelected && <Check className="w-3.5 h-3.5" />}
                          </div>
                        </div>
                        <h4 className="text-sm font-bold text-slate-900 leading-snug">{std.title}</h4>
                      </div>
                    );
                  })}
                </div>

                {selectedStandards.length > 1 && (
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-3">
                    <BadgeCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span><strong>Integrated Audit Discount Applied:</strong> Combining {selectedStandards.length} standards saves ~20% total man-days!</span>
                  </div>
                )}

                <div className="flex justify-end pt-4 border-t border-slate-100">
                  <button
                    onClick={() => setStep(2)}
                    className="px-8 py-3 rounded-full bg-[#FF4D5A] hover:bg-[#E63946] text-white font-bold text-xs shadow-md flex items-center gap-2"
                  >
                    <span>Next: Org Info</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Org Info */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-[#251574] mb-1">Step 2: Organisation Details</h2>
                  <p className="text-xs text-slate-500">Provide company size and site count for accurate IAF man-day calculations.</p>
                </div>

                <div className="space-y-4 text-xs text-slate-700">
                  <div>
                    <label className="block font-bold text-slate-900 mb-1">Company / Organisation Name</label>
                    <input
                      type="text"
                      value={orgDetails.companyName}
                      onChange={(e) => setOrgDetails({ ...orgDetails, companyName: e.target.value })}
                      placeholder="e.g. Apex Global Technologies Ltd."
                      className="w-full bg-slate-50 text-slate-900 text-sm px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#008AD8]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-900 mb-1">Primary Operating Country</label>
                      <select
                        value={orgDetails.country}
                        onChange={(e) => setOrgDetails({ ...orgDetails, country: e.target.value })}
                        className="w-full bg-slate-50 text-slate-800 text-xs px-3 py-3 rounded-xl border border-slate-200 focus:outline-none"
                      >
                        {COUNTRIES.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-900 mb-1">Industry Sector</label>
                      <select
                        value={orgDetails.industry}
                        onChange={(e) => setOrgDetails({ ...orgDetails, industry: e.target.value })}
                        className="w-full bg-slate-50 text-slate-800 text-xs px-3 py-3 rounded-xl border border-slate-200 focus:outline-none"
                      >
                        {INDUSTRIES.map((i) => (
                          <option key={i} value={i}>{i}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-900 mb-1">Total Employee Headcount</label>
                      <select
                        value={orgDetails.employees}
                        onChange={(e) => setOrgDetails({ ...orgDetails, employees: e.target.value })}
                        className="w-full bg-slate-50 text-slate-800 text-xs px-3 py-3 rounded-xl border border-slate-200 focus:outline-none"
                      >
                        {EMPLOYEES_OPTIONS.map((e) => (
                          <option key={e} value={e}>{e}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-900 mb-1">Number of Operational Sites</label>
                      <select
                        value={orgDetails.sites}
                        onChange={(e) => setOrgDetails({ ...orgDetails, sites: e.target.value })}
                        className="w-full bg-slate-50 text-slate-800 text-xs px-3 py-3 rounded-xl border border-slate-200 focus:outline-none"
                      >
                        {SITES_OPTIONS.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <button
                    onClick={() => setStep(1)}
                    className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="px-8 py-3 rounded-full bg-[#FF4D5A] hover:bg-[#E63946] text-white font-bold text-xs shadow-md flex items-center gap-2"
                  >
                    <span>Next: Scope & Status</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Scope */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-[#251574] mb-1">Step 3: Scope & Certification Status</h2>
                  <p className="text-xs text-slate-500">Specify whether this is a new certification or transfer from another body.</p>
                </div>

                <div className="space-y-4 text-xs text-slate-700">
                  <div>
                    <label className="block font-bold text-slate-900 mb-2">Certification Project Type</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {["New Certification", "Transfer from Existing CB", "Recertification Cycle"].map((type) => (
                        <div
                          key={type}
                          onClick={() => setCertScope({ ...certScope, certStatus: type })}
                          className={`p-3 rounded-xl border-2 text-center cursor-pointer transition-all ${
                            certScope.certStatus === type
                              ? "border-[#008AD8] bg-sky-50 font-bold text-[#251574]"
                              : "border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300"
                          }`}
                        >
                          {type}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-900 mb-1">Audit Scope Description (Optional)</label>
                    <textarea
                      rows={3}
                      value={certScope.scopeDescription}
                      onChange={(e) => setCertScope({ ...certScope, scopeDescription: e.target.value })}
                      placeholder="e.g. Design, development, and hosting of enterprise cloud SaaS products..."
                      className="w-full bg-slate-50 text-slate-900 text-xs px-4 py-3 rounded-xl border border-slate-200 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <button
                    onClick={() => setStep(2)}
                    className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                  <button
                    onClick={() => setStep(4)}
                    className="px-8 py-3 rounded-full bg-[#FF4D5A] hover:bg-[#E63946] text-white font-bold text-xs shadow-md flex items-center gap-2"
                  >
                    <span>Next: Review & Contact</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Review & Submit */}
            {step === 4 && (
              <form onSubmit={handleSubmitQuote} className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-[#251574] mb-1">Step 4: Review Quote Summary & Submit</h2>
                  <p className="text-xs text-slate-500">Provide your contact details to receive your formal PDF proposal.</p>
                </div>

                {/* Instant Calculation Box */}
                <div className="p-6 rounded-2xl bg-sky-50 border-2 border-[#008AD8] space-y-4">
                  <div className="flex items-center justify-between border-b border-sky-200 pb-3">
                    <span className="text-xs font-mono font-bold text-[#251574] uppercase">Estimated Audit Man-Days</span>
                    <span className="text-2xl font-serif font-bold text-[#008AD8]">{calculatedManDays} Days</span>
                  </div>
                  <div className="text-xs text-slate-600 space-y-1">
                    <div>Selected Standards: <strong className="text-slate-900">{selectedStandards.length} Standards ({selectedStandards.join(", ")})</strong></div>
                    <div>Headcount & Sites: <strong className="text-slate-900">{orgDetails.employees} · {orgDetails.sites}</strong></div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
                  <div>
                    <label className="block font-bold text-slate-900 mb-1">Your Full Name *</label>
                    <input
                      required
                      type="text"
                      value={contactInfo.contactName}
                      onChange={(e) => setContactInfo({ ...contactInfo, contactName: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full bg-slate-50 text-slate-900 text-sm px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-900 mb-1">Work Email Address *</label>
                    <input
                      required
                      type="email"
                      value={contactInfo.workEmail}
                      onChange={(e) => setContactInfo({ ...contactInfo, workEmail: e.target.value })}
                      placeholder="sarah@company.com"
                      className="w-full bg-slate-50 text-slate-900 text-sm px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                  <button
                    type="submit"
                    className="px-8 py-3.5 rounded-full bg-[#FF4D5A] hover:bg-[#E63946] text-white font-bold text-sm shadow-md flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Request Formal Quote Proposal</span>
                  </button>
                </div>
              </form>
            )}

          </div>
        ) : (
          /* Success Screen */
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl border-2 border-emerald-500 shadow-xl p-8 sm:p-12 text-center space-y-6"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-[#008AD8]">QUOTE REFERENCE: {quoteReference}</span>
              <h2 className="text-3xl font-serif font-bold text-[#251574]">Quote Calculation Complete</h2>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Thank you, {contactInfo.contactName}. We have logged your estimated audit requirement of <strong>{calculatedManDays} Man-Days</strong>. A detailed multi-year proposal has been dispatched to <strong>{contactInfo.workEmail}</strong>.
              </p>
            </div>

            <div className="pt-4 flex justify-center gap-4">
              <Link href="/">
                <button className="px-6 py-3 rounded-full bg-[#251574] text-white font-bold text-xs shadow">
                  Return to Home
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </main>

      <Footer />
      <WhatsAppWidget />
      <CommandPalette isOpen={commandPaletteOpen} onClose={() => setCommandPaletteOpen(false)} />
    </div>
  );
}
