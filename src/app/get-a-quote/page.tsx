"use client";

import React, { useState, useMemo } from "react";
import { Calculator } from "lucide-react";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";
import { QuoteStepProgress } from "@/components/quote/QuoteStepProgress";
import { QuoteStep1Standards } from "@/components/quote/QuoteStep1Standards";
import { QuoteStep2OrgDetails } from "@/components/quote/QuoteStep2OrgDetails";
import { QuoteStep3Scope } from "@/components/quote/QuoteStep3Scope";
import { QuoteStep4Review } from "@/components/quote/QuoteStep4Review";
import { QuoteSuccessScreen } from "@/components/quote/QuoteSuccessScreen";
import { useQuoteCalculator } from "@/hooks/useQuoteCalculator";

export default function GetAQuotePage() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [step, setStep] = useState(1);

  const [selectedStandards, setSelectedStandards] = useState<string[]>(["iso-9001"]);
  const [orgDetails, setOrgDetails] = useState({
    companyName: "",
    country: "United Kingdom",
    sites: "1 Site (Single Location)",
    employees: "1 - 25 Employees",
    industry: "Software & IT Services",
  });
  const [certScope, setCertScope] = useState({
    certStatus: "New Certification",
    existingCB: "",
    scopeDescription: "",
  });
  const [contactInfo, setContactInfo] = useState({
    contactName: "",
    workEmail: "",
    phone: "",
    jobTitle: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quoteReference, setQuoteReference] = useState("");

  const quoteMutation = useQuoteCalculator();

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

    quoteMutation.mutate(
      {
        standard: selectedStandards.join(", "),
        auditType: certScope.certStatus.toLowerCase().includes("transfer")
          ? "transfer"
          : certScope.certStatus.toLowerCase().includes("recertification")
          ? "recertification"
          : "initial",
        companyName: orgDetails.companyName || "Client Enterprise",
        contactName: contactInfo.contactName,
        email: contactInfo.workEmail,
        phone: contactInfo.phone || "+1234567890",
        country: orgDetails.country,
        numSites: orgDetails.sites.includes("2 to 5") ? 3 : orgDetails.sites.includes("6 to 15") ? 8 : 1,
        numEmployees: orgDetails.employees.includes("26 - 100") ? 50 : 15,
        complexity: "medium",
        comments: certScope.scopeDescription,
      },
      {
        onSuccess: (data) => {
          setQuoteReference(data.quoteId);
          setIsSubmitted(true);
        },
        onError: () => {
          const fallbackRef = `B4Q-Q-${Math.floor(100000 + Math.random() * 900000)}`;
          setQuoteReference(fallbackRef);
          setIsSubmitted(true);
        },
      }
    );
  };

  return (
    <div className="w-full min-h-[100dvh] max-w-[100dvw] bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-[#251574] selection:text-white">
      <Header onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Hero Header */}
      <section className="w-full max-w-full pt-[6dvh] pb-[4dvh] bg-white border-b border-slate-200">
        <div className="w-full max-w-4xl mx-auto px-[4%] sm:px-[5%] lg:px-[6%] text-center space-y-3">
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
      {!isSubmitted && <QuoteStepProgress step={step} />}

      {/* Main Quote Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">
        {!isSubmitted ? (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-6 sm:p-8 space-y-8">
            {step === 1 && (
              <QuoteStep1Standards
                selectedStandards={selectedStandards}
                toggleStandard={toggleStandard}
                onNext={() => setStep(2)}
              />
            )}

            {step === 2 && (
              <QuoteStep2OrgDetails
                orgDetails={orgDetails}
                setOrgDetails={setOrgDetails}
                onBack={() => setStep(1)}
                onNext={() => setStep(3)}
              />
            )}

            {step === 3 && (
              <QuoteStep3Scope
                certScope={certScope}
                setCertScope={setCertScope}
                onBack={() => setStep(2)}
                onNext={() => setStep(4)}
              />
            )}

            {step === 4 && (
              <QuoteStep4Review
                calculatedManDays={calculatedManDays}
                selectedStandards={selectedStandards}
                employees={orgDetails.employees}
                sites={orgDetails.sites}
                contactInfo={contactInfo}
                setContactInfo={setContactInfo}
                isPending={quoteMutation.isPending}
                onBack={() => setStep(3)}
                onSubmit={handleSubmitQuote}
              />
            )}
          </div>
        ) : (
          <QuoteSuccessScreen
            quoteReference={quoteReference}
            contactName={contactInfo.contactName}
            workEmail={contactInfo.workEmail}
            calculatedManDays={calculatedManDays}
          />
        )}
      </main>

      <Footer />
      <WhatsAppWidget />
      <CommandPalette isOpen={commandPaletteOpen} onClose={() => setCommandPaletteOpen(false)} />
    </div>
  );
}
