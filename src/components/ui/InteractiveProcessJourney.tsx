"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  ClipboardCheck,
  ShieldCheck,
  Award,
  RefreshCw,
  ArrowRight,
  Clock,
  Sparkles,
  CheckCircle2,
  FileCheck2,
  Lock,
  Download
} from "lucide-react";
import Link from "next/link";

export default function InteractiveProcessJourney() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: "01",
      title: "Application & Proposal",
      timeline: "Days 1–3",
      icon: FileText,
      color: "from-sky-500 to-[#251574]",
      accent: "#008AD8",
      summary: "Submit your organizational scope and site details. Receive a transparent multi-year audit proposal with zero hidden fees.",
      details: [
        "Multi-site IAF man-day calculation per IAF MD5 tables",
        "Transparent fixed-fee proposal with zero travel markups",
        "Formal certification agreement & impartiality declaration",
      ],
      artifact: "Draft Audit Proposal & Scope Agreement (PDF)",
    },
    {
      step: "02",
      title: "Stage 1 Readiness Audit",
      timeline: "Week 2",
      icon: ClipboardCheck,
      color: "from-indigo-600 to-[#251574]",
      accent: "#6366F1",
      summary: "Impartial evaluation of your management system documentation, policy alignment, and scope readiness.",
      details: [
        "Documentation adequacy review against ISO clauses",
        "Evaluation of internal audit & management review records",
        "Identification of potential Stage 2 readiness gaps",
      ],
      artifact: "Stage 1 Readiness Audit Report & Checklist",
    },
    {
      step: "03",
      title: "Stage 2 Certification Audit",
      timeline: "Weeks 3–4",
      icon: ShieldCheck,
      color: "from-[#251574] to-indigo-900",
      accent: "#251574",
      summary: "Comprehensive on-site or hybrid audit verifying operational execution, evidence logs, and clause compliance.",
      details: [
        "Sampling of operational processes, logs, and technical controls",
        "Interviews with process owners, staff, and leadership",
        "Categorization of audit findings (Major, Minor, Opportunity for Improvement)",
      ],
      artifact: "Stage 2 Audit Plan & On-site Audit Log",
    },
    {
      step: "04",
      title: "Decision & Issuance",
      timeline: "Day 30",
      icon: Award,
      color: "from-rose-500 to-[#FF4D5A]",
      accent: "#FF4D5A",
      summary: "Independent technical review committee verifies audit findings. Accredited certificate issued with QR code verification.",
      details: [
        "Independent technical reviewer evaluation",
        "Issuance of official B4Q ISO Certificate",
        "Listing on Public Certificate Verification Registry",
      ],
      artifact: "Official B4Q ISO Certificate with QR Code Seal",
    },
    {
      step: "05",
      title: "Annual Surveillance",
      timeline: "Years 1 & 2",
      icon: RefreshCw,
      color: "from-emerald-600 to-teal-800",
      accent: "#10B981",
      summary: "Brief yearly check-in audits in Years 1 & 2 to ensure continuous system health and standard adherence.",
      details: [
        "Verification of continual improvement & corrective actions",
        "Sampling of core operational & high-risk processes",
        "Maintenance of active certificate status on public registry",
      ],
      artifact: "Surveillance Audit Confirmation Report",
    },
    {
      step: "06",
      title: "Recertification Cycle",
      timeline: "Year 3",
      icon: FileCheck2,
      color: "from-amber-500 to-rose-600",
      accent: "#F59E0B",
      summary: "Full triennial review at Year 3 to renew certificate validity for another 3-year cycle.",
      details: [
        "Comprehensive 3-year management system performance review",
        "Evaluation of changes to organizational scope and context",
        "Renewal of ISO Certificate for next 3-year cycle",
      ],
      artifact: "Triennial Recertification Audit Decision",
    },
  ];

  const currentStep = steps[activeStep];
  const StepIcon = currentStep.icon;

  return (
    <section className="py-24 md:py-36 bg-slate-50 border-t border-slate-200/80 relative z-20 shadow-[0_-30px_60px_rgba(0,0,0,0.12)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-[#FF4D5A] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4 text-[#FF4D5A]" />
            <span>Interactive Audit Journey Engine</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            6-Step ISO Certification Lifecycle
          </h2>
          <p className="text-slate-600 text-sm md:text-base mt-3">
            Click any step to inspect audit deliverables, timeline checkpoints, and accredited lifecycle requirements.
          </p>
        </div>

        {/* Step Navigation Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={s.step}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden group ${
                  isActive
                    ? "bg-[#251574] text-white border-[#251574] shadow-xl scale-[1.03]"
                    : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100/80 shadow-xs"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xl font-extrabold font-mono ${isActive ? "text-sky-300" : "text-[#251574]"}`}>
                    {s.step}
                  </span>
                  <Icon className={`w-4 h-4 ${isActive ? "text-[#FF4D5A]" : "text-slate-400 group-hover:text-[#251574]"}`} />
                </div>
                <div className="text-xs font-bold truncate leading-tight">
                  {s.title}
                </div>
                <div className={`text-[10px] font-mono mt-1 ${isActive ? "text-sky-200" : "text-slate-500"}`}>
                  {s.timeline}
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Active Step Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep.step}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200/90 shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
          >
            {/* Background Radial Glow */}
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-sky-50 rounded-full blur-3xl pointer-events-none" />

            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#251574] to-[#008AD8] text-white flex items-center justify-center shadow-lg shrink-0">
                  <StepIcon className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-extrabold font-mono text-[#251574]">
                      STEP {currentStep.step}
                    </span>
                    <span className="px-3 py-0.5 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-bold">
                      {currentStep.timeline}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-snug mt-0.5">
                    {currentStep.title}
                  </h3>
                </div>
              </div>

              <p className="text-slate-600 text-base leading-relaxed">
                {currentStep.summary}
              </p>

              {/* Key Deliverables Checkmarks */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#251574]">
                  Key Audit Checkpoints & Requirements:
                </div>
                <div className="space-y-2">
                  {currentStep.details.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs md:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/get-a-quote"
                  className="px-6 py-3 bg-[#FF4D5A] hover:bg-rose-600 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-2"
                >
                  <span>Request Stage 1 Audit Date</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Artifact Preview Badge */}
            <div className="lg:col-span-5 relative z-10">
              <div className="bg-gradient-to-br from-slate-900 to-[#120a3e] text-white rounded-2xl p-6 border border-slate-800 shadow-xl space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-sky-400">
                    <FileText className="w-4 h-4" />
                    <span>AUDIT DELIVERABLE ARTIFACT</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold">
                    VERIFIED
                  </span>
                </div>

                <div className="p-4 bg-white/5 rounded-xl border border-white/10 font-mono text-xs font-semibold text-slate-200 leading-normal">
                  {currentStep.artifact}
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-white/10">
                  <span>Standard Compliance: ISO/IEC 17021-1</span>
                  <span className="text-sky-300 font-bold">IAF Aligned</span>
                </div>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
