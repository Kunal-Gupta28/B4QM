"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Search,
  Building2,
  UserCheck,
  CheckCircle2,
  AlertTriangle,
  QrCode,
  Download,
  RefreshCw,
} from "lucide-react";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";
import { COUNTRIES, OrgCertificate, PersonnelCertificate } from "@/data/verifyData";

function VerifyContent() {
  const searchParams = useSearchParams();
  const initialNumber = searchParams.get("number") || "";
  const initialName = searchParams.get("name") || "";
  const initialCountry = searchParams.get("country") || "ALL";

  const [activeTab, setActiveTab] = useState<"organisation" | "personnel">("organisation");
  const [certNumber, setCertNumber] = useState(initialNumber);
  const [nameInput, setNameInput] = useState(initialName);
  const [selectedCountry, setSelectedCountry] = useState(initialCountry);

  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [orgResult, setOrgResult] = useState<OrgCertificate | null>(null);
  const [auditorResult, setAuditorResult] = useState<PersonnelCertificate | null>(null);
  const [notFoundMessage, setNotFoundMessage] = useState<string | null>(null);

  const performSearch = async (num: string, name: string, country: string, tab: "organisation" | "personnel") => {
    if (!num.trim() && !name.trim()) return;

    setLoading(true);
    setSearched(true);
    setOrgResult(null);
    setAuditorResult(null);
    setNotFoundMessage(null);

    try {
      const queryParams = new URLSearchParams({
        type: tab,
        number: num,
        name: name,
        country: country,
      });

      const res = await fetch(`/api/verify?${queryParams.toString()}`);
      const data = await res.json();

      if (data.success && data.data) {
        if (tab === "organisation") {
          setOrgResult(data.data);
        } else {
          setAuditorResult(data.data);
        }
      } else {
        setNotFoundMessage(data.message || "Record not found in official B4Q public register.");
      }
    } catch (err) {
      setNotFoundMessage("Network error querying verification registry.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (initialNumber || initialName) {
      performSearch(initialNumber, initialName, initialCountry, activeTab);
    }
  }, [initialNumber, initialName, initialCountry]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    performSearch(certNumber, nameInput, selectedCountry, activeTab);
  };

  return (
    <div className="space-y-8">
      {/* Page Title Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-[#008AD8] text-xs font-bold"
        >
          <ShieldCheck className="w-4 h-4 text-[#008AD8]" />
          <span>IAF MLA Aligned Public Verification Registry</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl font-serif font-bold text-[#251574] tracking-tight"
        >
          Verify Certificate Authenticity
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-600 text-sm sm:text-base leading-relaxed"
        >
          Inspect active validity, accredited scopes, issue dates, and auditor credentials in real time across UK, India, USA, and Singapore registries.
        </motion.p>
      </div>

      {/* Main Verification Card Container */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-8"
      >
        {/* Search Mode Tabs */}
        <div className="flex border-b border-slate-200 mb-6">
          <button
            onClick={() => {
              setActiveTab("organisation");
              setSearched(false);
            }}
            className={`flex-1 py-3 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 border-b-2 transition-colors ${
              activeTab === "organisation"
                ? "border-[#251574] text-[#251574]"
                : "border-transparent text-slate-500 hover:text-slate-900"
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Organisation Certificate</span>
          </button>
          <button
            onClick={() => {
              setActiveTab("personnel");
              setSearched(false);
            }}
            className={`flex-1 py-3 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 border-b-2 transition-colors ${
              activeTab === "personnel"
                ? "border-[#251574] text-[#251574]"
                : "border-transparent text-slate-500 hover:text-slate-900"
            }`}
          >
            <UserCheck className="w-4 h-4" />
            <span>Auditor Personnel Certificate</span>
          </button>
        </div>

        {/* Search Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-mono">
                {activeTab === "organisation" ? "Organisation Name" : "Auditor Full Name"}
              </label>
              <input
                type="text"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                placeholder={activeTab === "organisation" ? "e.g. Apex Global" : "e.g. SitaNath Nandi"}
                className="w-full bg-slate-50 text-slate-900 placeholder-slate-400 text-sm px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#008AD8] font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-mono">
                Certificate Registration Reference
              </label>
              <input
                type="text"
                value={certNumber}
                onChange={(e) => setCertNumber(e.target.value.toUpperCase())}
                placeholder="e.g. B4Q-9001-88421"
                className="w-full bg-slate-50 text-slate-900 placeholder-slate-400 text-sm px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#008AD8] font-mono uppercase font-bold"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="w-full sm:w-auto">
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1 font-mono">
                Filter Registry Region
              </label>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full sm:w-auto bg-slate-50 text-slate-800 text-xs px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#008AD8] font-medium"
              >
                <option value="ALL">All Global Registries (UK, IN, US, SG)</option>
                {COUNTRIES.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.flag} {c.name}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#FF4D5A] hover:bg-[#E63946] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-white" />
                  <span>Searching Registry...</span>
                </>
              ) : (
                <>
                  <Search className="w-4 h-4" />
                  <span>Verify Certificate</span>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Loading Indicator */}
        {loading && (
          <div className="py-12 text-center space-y-3">
            <div className="w-12 h-12 border-4 border-slate-200 border-t-[#008AD8] rounded-full animate-spin mx-auto" />
            <p className="text-xs font-mono font-bold text-[#251574] uppercase tracking-wider">
              Querying Official B4Q ISO Database...
            </p>
          </div>
        )}

        {/* Results Section */}
        {!loading && searched && (
          <div className="mt-8 pt-8 border-t border-slate-200">
            {/* Organisation Result Card */}
            {orgResult && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl border-2 border-emerald-500 shadow-xl p-6 sm:p-8 space-y-6"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#251574] text-white flex items-center justify-center font-serif font-bold text-lg shadow-sm">
                      B4Q
                    </div>
                    <div>
                      <span className="text-xs font-mono text-[#008AD8] font-bold block">{orgResult.certificateNumber}</span>
                      <h2 className="text-xl font-bold text-slate-900">{orgResult.organisationName}</h2>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>{orgResult.status} ✓</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-700">
                  <div>
                    <span className="text-[10px] text-slate-400 font-mono uppercase block mb-1">Certified Standard</span>
                    <span className="text-sm font-bold text-[#251574] font-mono bg-sky-50 px-2.5 py-1 rounded border border-sky-200 inline-block">
                      {orgResult.standard}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] text-slate-400 font-mono uppercase block mb-1">Accredited Scope</span>
                    <p className="text-slate-800 leading-relaxed font-serif italic">"{orgResult.scope}"</p>
                  </div>

                  <div>
                    <span className="text-[10px] text-slate-400 font-mono uppercase block mb-1">Issue / Expiry Dates</span>
                    <div className="font-mono text-xs space-y-0.5">
                      <div>Initial Issue: <strong>{orgResult.initialCertificationDate}</strong></div>
                      <div>Valid Until: <strong className="text-emerald-700">{orgResult.expiryDate}</strong></div>
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] text-slate-400 font-mono uppercase block mb-1">Operational Sites</span>
                    <span className="text-xs font-bold text-slate-800 bg-slate-100 px-2.5 py-1 rounded border border-slate-200 inline-block">
                      {orgResult.sitesCount} Registered Site(s)
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                  <div className="flex items-center gap-3">
                    <QrCode className="w-10 h-10 text-slate-700 p-1 bg-slate-100 rounded-lg border border-slate-200" />
                    <div>
                      <span className="font-mono font-bold text-slate-900 block">Cryptographic Verification Badge</span>
                      <span className="text-slate-500 text-[11px]">{orgResult.accreditationBody} Registry Sync Active</span>
                    </div>
                  </div>

                  <button
                    onClick={() => alert(`Downloading verified certificate PDF for ${orgResult.certificateNumber}`)}
                    className="px-5 py-2.5 rounded-full bg-[#008AD8] hover:bg-[#0077BC] text-white text-xs font-bold shadow transition-colors flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Verification PDF</span>
                  </button>
                </div>
              </motion.div>
            )}

            {/* Personnel Result Card */}
            {auditorResult && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl border-2 border-emerald-500 shadow-xl p-6 sm:p-8 space-y-6"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#008AD8] text-white flex items-center justify-center font-bold text-lg shadow-sm">
                      <UserCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-[#008AD8] font-bold block">{auditorResult.certificateNumber}</span>
                      <h2 className="text-xl font-bold text-slate-900">{auditorResult.auditorName}</h2>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>{auditorResult.status} AUDITOR ✓</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-700">
                  <div>
                    <span className="text-[10px] text-slate-400 font-mono uppercase block mb-1">Qualification Course</span>
                    <span className="text-sm font-bold text-[#251574] font-mono bg-sky-50 px-2.5 py-1 rounded border border-sky-200 inline-block">
                      {auditorResult.courseTitle}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] text-slate-400 font-mono uppercase block mb-1">Authorisation Grade</span>
                    <span className="text-xs font-bold text-[#008AD8] block">{auditorResult.grade} ({auditorResult.standard})</span>
                  </div>

                  <div>
                    <span className="text-[10px] text-slate-400 font-mono uppercase block mb-1">Issue / Expiry Dates</span>
                    <div className="font-mono text-xs">
                      <div>Issued: <strong>{auditorResult.issueDate}</strong></div>
                      <div>Expires: <strong className="text-emerald-700">{auditorResult.expiryDate}</strong></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Not Found State */}
            {notFoundMessage && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-amber-50 rounded-2xl border border-amber-200 p-6 text-center space-y-4"
              >
                <AlertTriangle className="w-10 h-10 text-amber-600 mx-auto" />
                <h3 className="text-lg font-bold text-amber-900">Certificate Not Found in Public Index</h3>
                <p className="text-xs text-amber-800 max-w-md mx-auto leading-relaxed">
                  {notFoundMessage} Please double-check the certificate registration number or contact our global compliance registry team.
                </p>
              </motion.div>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default function VerifyPage() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  return (
    <div className="w-full min-h-[100dvh] max-w-[100dvw] bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-[#251574] selection:text-white">
      <Header onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      <main className="flex-1 pt-[6dvh] pb-[10dvh] w-full max-w-5xl mx-auto px-[4%] sm:px-[5%] lg:px-[6%]">
        <Suspense fallback={<div className="py-20 text-center font-mono text-xs text-slate-500">Loading registry utility...</div>}>
          <VerifyContent />
        </Suspense>
      </main>

      <Footer />
      <WhatsAppWidget />
      <CommandPalette isOpen={commandPaletteOpen} onClose={() => setCommandPaletteOpen(false)} />
    </div>
  );
}
