"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { ShieldCheck, AlertTriangle } from "lucide-react";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";
import { VerifySearchForm } from "@/components/verify/VerifySearchForm";
import { OrgCertResultCard } from "@/components/verify/OrgCertResultCard";
import { PersonnelCertResultCard } from "@/components/verify/PersonnelCertResultCard";
import { useCertificateVerification } from "@/hooks/useCertificateVerification";
import { OrgCertificate, PersonnelCertificate } from "@/data/verifyData";

function VerifyContent() {
  const searchParams = useSearchParams();
  const initialNumber = searchParams.get("number") || "";
  const initialName = searchParams.get("name") || "";
  const initialCountry = searchParams.get("country") || "ALL";

  const [activeTab, setActiveTab] = useState<"organisation" | "personnel">("organisation");
  const [certNumber, setCertNumber] = useState(initialNumber);
  const [nameInput, setNameInput] = useState(initialName);
  const [selectedCountry, setSelectedCountry] = useState(initialCountry);

  const [queryEnabled, setQueryEnabled] = useState(false);

  const queryInput = {
    type: activeTab,
    number: certNumber,
    name: nameInput,
    country: selectedCountry,
  };

  const { data, isLoading, isError, error } = useCertificateVerification(queryInput, queryEnabled);

  useEffect(() => {
    if (initialNumber || initialName) {
      setQueryEnabled(true);
    }
  }, [initialNumber, initialName]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQueryEnabled(true);
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

      {/* Main Verification Container */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-8"
      >
        <VerifySearchForm
          activeTab={activeTab}
          setActiveTab={(tab) => {
            setActiveTab(tab);
            setQueryEnabled(false);
          }}
          nameInput={nameInput}
          setNameInput={setNameInput}
          certNumber={certNumber}
          setCertNumber={setCertNumber}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          loading={isLoading}
          onSubmit={handleSubmit}
        />

        {/* Loading State */}
        {isLoading && (
          <div className="py-12 text-center space-y-3 mt-8 border-t border-slate-100">
            <div className="w-12 h-12 border-4 border-slate-200 border-t-[#008AD8] rounded-full animate-spin mx-auto" />
            <p className="text-xs font-mono font-bold text-[#251574] uppercase tracking-wider">
              Querying Official B4Q ISO Database via React Query...
            </p>
          </div>
        )}

        {/* Results Section */}
        {!isLoading && queryEnabled && (
          <div className="mt-8 pt-8 border-t border-slate-200">
            {data && activeTab === "organisation" && (
              <OrgCertResultCard cert={data as OrgCertificate} />
            )}

            {data && activeTab === "personnel" && (
              <PersonnelCertResultCard cert={data as PersonnelCertificate} />
            )}

            {isError && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-amber-50 rounded-2xl border border-amber-200 p-6 text-center space-y-4"
              >
                <AlertTriangle className="w-10 h-10 text-amber-600 mx-auto" />
                <h3 className="text-lg font-bold text-amber-900">Certificate Not Found in Public Index</h3>
                <p className="text-xs text-amber-800 max-w-md mx-auto leading-relaxed">
                  {error?.message || "Record not found in official B4Q public register."} Please double-check the certificate registration number or contact our global compliance registry team.
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
