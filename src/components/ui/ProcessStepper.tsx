"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, SearchCheck, ShieldCheck, Award, RefreshCw, CheckCircle2, Clock, Calendar, ArrowRight } from "lucide-react";
import { Button } from "./Button";
import Link from "next/link";

interface StepDetail {
  number: number;
  title: string;
  shortLabel: string;
  icon: React.ReactNode;
  duration: string;
  description: string;
  deliverables: string[];
  clausesCovered: string;
  tip: string;
}

const STEPS: StepDetail[] = [
  {
    number: 1,
    title: "Application & Scope Quotation",
    shortLabel: "1. Apply & Quote",
    icon: <FileText className="w-5 h-5 text-brand-coral" />,
    duration: "1–3 Business Days",
    description:
      "Submit your organization's scope, site count, headcount, and IT infrastructure details via our online quote portal. B4Q technical assessors compute exact audit man-days per IAF MD rules.",
    deliverables: [
      "Formal Man-Day Assessment & Proposal",
      "Binding Audit Agreement (Doc B)",
      "Assigned Lead Auditor Profile",
    ],
    clausesCovered: "ISO/IEC 17021-1 § 9.1",
    tip: "No hidden travel expenses or surprise charges — fixed-fee transparent pricing.",
  },
  {
    number: 2,
    title: "Stage 1 Readiness & Document Review",
    shortLabel: "2. Stage 1 Audit",
    icon: <SearchCheck className="w-5 h-5 text-indigo-500" />,
    duration: "1–2 Days Audit",
    description:
      "Your lead auditor evaluates system documentation, scope boundaries, management review minutes, internal audit results, and regulatory compliance registers to verify readiness for Stage 2.",
    deliverables: [
      "Stage 1 Evaluation Report",
      "Gap Analysis Summary",
      "Confirmed Stage 2 Audit Plan",
    ],
    clausesCovered: "ISO/IEC 17021-1 § 9.3.1.2",
    tip: "Stage 1 can be conducted remotely via secure screen share to minimize travel overhead.",
  },
  {
    number: 3,
    title: "Stage 2 Certification Audit",
    shortLabel: "3. Stage 2 Audit",
    icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
    duration: "2–5 Days On-site / Remote",
    description:
      "Comprehensive evaluation of operational processes, control implementation, staff interviews, and evidence sampling across all declared locations to assess standard conformance.",
    deliverables: [
      "Detailed Audit Findings & Non-Conformity Report",
      "Corrective Action Plan (CAP) Matrix",
      "Recommendation for Certification",
    ],
    clausesCovered: "ISO/IEC 17021-1 § 9.3.1.3",
    tip: "Auditors focus on value-adding process effectiveness, not pedantic paperwork traps.",
  },
  {
    number: 4,
    title: "Technical Review & Certificate Issuance",
    shortLabel: "4. Decision & Cert",
    icon: <Award className="w-5 h-5 text-brand-coral" />,
    duration: "5–7 Business Days",
    description:
      "An independent B4Q Technical Review Panel verifies audit evidence, resolves corrective action responses, and grants official 3-year ISO Certification.",
    deliverables: [
      "Official B4Q ISO Certificate (PDF & Print)",
      "Public Registry Listing in B4Q Online Lookup",
      "High-Resolution Certification Marks & Logo Pack",
    ],
    clausesCovered: "ISO/IEC 17021-1 § 9.5",
    tip: "Your certificate status becomes instantly searchable online for customer verification.",
  },
  {
    number: 5,
    title: "Annual Surveillance Audits",
    shortLabel: "5. Surveillance",
    icon: <Calendar className="w-5 h-5 text-cyan-500" />,
    duration: "Year 1 & Year 2",
    description:
      "Conducted at months 12 and 24 to ensure continuous improvement, system maintenance, internal audit execution, and ongoing compliance with standard updates.",
    deliverables: [
      "Annual Surveillance Audit Report",
      "Certificate Maintenance Confirmation",
      "Continual Improvement Roadmap",
    ],
    clausesCovered: "ISO/IEC 17021-1 § 9.6.2",
    tip: "Surveillance audits require roughly 33% of initial Stage 2 man-day duration.",
  },
  {
    number: 6,
    title: "Recertification Renewal Audit",
    shortLabel: "6. Recertification",
    icon: <RefreshCw className="w-5 h-5 text-emerald-500" />,
    duration: "Month 36 (Year 3 Renewal)",
    description:
      "A complete re-assessment of the management system prior to 3-year certificate expiration to issue a fresh 3-year certification cycle.",
    deliverables: [
      "Recertification Audit Report",
      "Renewed 3-Year ISO Certificate",
      "Updated Scope & Site Schedule",
    ],
    clausesCovered: "ISO/IEC 17021-1 § 9.6.3",
    tip: "Ensures seamless continuity of accredited certification without coverage gaps.",
  },
];

export const ProcessStepper: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const currentStep = STEPS.find((s) => s.number === activeStep) || STEPS[0];

  return (
    <div className="w-full space-y-8 font-sans">
      {/* Desktop Stepper Progress Header */}
      <div className="hidden lg:grid grid-cols-6 gap-2 relative">
        {/* Background Connecting Line */}
        <div className="absolute top-6 left-12 right-12 h-0.5 bg-brand-border dark:bg-white/10 -z-0" />
        
        {STEPS.map((step) => {
          const isActive = step.number === activeStep;
          const isCompleted = step.number < activeStep;

          return (
            <button
              key={step.number}
              onClick={() => setActiveStep(step.number)}
              className="flex flex-col items-center text-center group cursor-pointer relative z-10"
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center font-mono font-bold text-sm transition-all duration-300 shadow-soft ${
                  isActive
                    ? "bg-brand-coral text-white ring-4 ring-brand-coral/20 scale-110"
                    : isCompleted
                    ? "bg-brand-navy text-white dark:bg-emerald-500/20 dark:text-emerald-400 border border-emerald-500/30"
                    : "bg-white dark:bg-brand-cardDark text-slate-400 border border-brand-border dark:border-white/10 group-hover:border-brand-coral"
                }`}
              >
                {isCompleted ? <CheckCircle2 className="w-5 h-5 text-emerald-400" /> : step.number}
              </div>
              <span
                className={`text-xs font-semibold mt-3 transition-colors ${
                  isActive
                    ? "text-brand-coral"
                    : "text-brand-navy dark:text-slate-300 group-hover:text-brand-coral"
                }`}
              >
                {step.shortLabel}
              </span>
            </button>
          );
        })}
      </div>

      {/* Mobile Stepper Pill Buttons */}
      <div className="lg:hidden flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {STEPS.map((step) => {
          const isActive = step.number === activeStep;
          return (
            <button
              key={step.number}
              onClick={() => setActiveStep(step.number)}
              className={`px-3.5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                isActive
                  ? "bg-brand-coral text-white shadow-soft"
                  : "bg-brand-surfaceMuted dark:bg-white/5 text-slate-300 hover:bg-white/10"
              }`}
            >
              {step.shortLabel}
            </button>
          );
        })}
      </div>

      {/* Active Step Detailed Content Box */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep.number}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25 }}
          className="bg-white dark:bg-brand-cardDark rounded-2xl p-6 sm:p-8 border border-brand-border dark:border-white/10 shadow-soft grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Main Description */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-brand-surfaceMuted dark:bg-white/5 border border-brand-border dark:border-white/10">
                {currentStep.icon}
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-brand-coral uppercase tracking-wider block">
                  Step {currentStep.number} of 6
                </span>
                <h3 className="font-serif text-2xl font-bold text-brand-navy dark:text-white">
                  {currentStep.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-brand-textBody dark:text-slate-300 leading-relaxed">
              {currentStep.description}
            </p>

            {/* Key Deliverables List */}
            <div className="pt-3">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                Key Step Deliverables:
              </h4>
              <ul className="space-y-2">
                {currentStep.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-brand-navy dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Side Fact Card */}
          <div className="bg-brand-surfaceLight dark:bg-slate-900/80 p-5 rounded-xl border border-brand-border/80 dark:border-white/10 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-brand-border dark:border-white/10 pb-3">
                <span className="text-xs text-slate-400 font-mono">Estimated Duration</span>
                <span className="text-xs font-bold text-brand-navy dark:text-emerald-400 flex items-center gap-1 font-mono">
                  <Clock className="w-3.5 h-3.5" /> {currentStep.duration}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-brand-border dark:border-white/10 pb-3">
                <span className="text-xs text-slate-400 font-mono">Standard Standard Clause</span>
                <span className="text-xs font-bold font-mono text-brand-coral">
                  {currentStep.clausesCovered}
                </span>
              </div>

              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-700 dark:text-emerald-300">
                <strong className="block mb-0.5">Auditor Insight:</strong>
                {currentStep.tip}
              </div>
            </div>

            <Link href="/get-a-quote" className="block">
              <Button variant="primary" size="sm" className="w-full justify-center" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                Start Certification Step 1
              </Button>
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
