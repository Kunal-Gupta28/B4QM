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
  Sparkles,
  CheckCircle2,
  FileCheck2,
  Activity,
  Globe2,
  Lock,
  Search
} from "lucide-react";
import Link from "next/link";

export default function AuditCommandCenter() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: "01",
      title: "Application & Man-Day Proposal",
      timeline: "Days 1–3",
      icon: FileText,
      badge: "Stage 01 Proposal",
      summary: "Submit organizational scope and employee headcount. Receive a transparent IAF MD5 man-day audit proposal with zero hidden surcharges.",
      cockpitWidget: "MANDAY_ESTIMATOR",
      metrics: [
        { label: "Man-Day Table", value: "IAF MD5 Compliant" },
        { label: "Turnaround", value: "24-48 Hours" },
        { label: "Fee Surcharges", value: "Zero Hidden Fees" }
      ],
      deliverable: "Formal Fixed-Fee Multi-Year Proposal (PDF)"
    },
    {
      step: "02",
      title: "Stage 1 Readiness Audit",
      timeline: "Week 2",
      icon: ClipboardCheck,
      badge: "Stage 02 Readiness",
      summary: "Impartial evaluation of management system documentation, policy alignment, and scope readiness prior to full certification.",
      cockpitWidget: "DOCUMENT_SCANNER",
      metrics: [
        { label: "Clause Scope", value: "Clause 4 to 10" },
        { label: "Doc Review", value: "100% Complete" },
        { label: "Gap Analysis", value: "Readiness Verified" }
      ],
      deliverable: "Stage 1 Audit Readiness Report & Gap Assessment"
    },
    {
      step: "03",
      title: "Stage 2 Certification Audit",
      timeline: "Weeks 3–4",
      icon: ShieldCheck,
      badge: "Stage 03 Verification",
      summary: "Comprehensive on-site or hybrid audit verifying operational execution, evidence logs, and technical clause compliance.",
      cockpitWidget: "AUDITOR_RADAR",
      metrics: [
        { label: "Audit Format", value: "Hybrid / On-site" },
        { label: "Auditor Scope", value: "Exemplar Global Lead" },
        { label: "Findings Class", value: "Major/Minor NCR" }
      ],
      deliverable: "Stage 2 Formal On-site Audit Log & Evidence Review"
    },
    {
      step: "04",
      title: "Technical Decision & QR Issuance",
      timeline: "Day 30",
      icon: Award,
      badge: "Stage 04 Decision",
      summary: "Independent technical review committee verifies audit findings. Accredited certificate issued with QR code verification.",
      cockpitWidget: "QR_STAMP",
      metrics: [
        { label: "Review Committee", value: "Independent Panel" },
        { label: "Verification", value: "Instant QR Code" },
        { label: "Validity", value: "3 Years Accredited" }
      ],
      deliverable: "Official B4Q Accredited ISO Certificate + QR Seal"
    },
    {
      step: "05",
      title: "Annual Surveillance Audits",
      timeline: "Years 1 & 2",
      icon: RefreshCw,
      badge: "Stage 05 Surveillance",
      summary: "Brief yearly check-in audits in Years 1 & 2 to ensure continuous management system health and standard adherence.",
      cockpitWidget: "SURVEILLANCE_CLOCK",
      metrics: [
        { label: "Frequency", value: "Annual (Y1 & Y2)" },
        { label: "Registry Status", value: "Active Public List" },
        { label: "System Health", value: "Continuous Check" }
      ],
      deliverable: "Annual Surveillance Status & Continuous Audit Approval"
    },
    {
      step: "06",
      title: "Recertification Cycle",
      timeline: "Year 3",
      icon: FileCheck2,
      badge: "Stage 06 Renewal",
      summary: "Full triennial review at Year 3 to renew certificate validity for another 3-year cycle.",
      cockpitWidget: "RENEWAL_GAUGE",
      metrics: [
        { label: "Cycle", value: "3-Year Triennial" },
        { label: "Scope Review", value: "Full System Audit" },
        { label: "Status", value: "Renewed 3 Years" }
      ],
      deliverable: "Triennial Recertification Decision & Renewed Certificate"
    }
  ];

  const current = steps[activeStep];
  const StepIcon = current.icon;

  return (
    <section className="py-24 md:py-36 bg-slate-50 border-t border-slate-200/80 relative z-20 shadow-[0_-30px_60px_rgba(0,0,0,0.12)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-[#251574] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#008AD8]" />
            <span>Interactive Audit Command Center</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            6-Step ISO Audit Command Lifecycle
          </h2>
          <p className="text-slate-600 text-sm md:text-base mt-3">
            Click any command phase to simulate audit deliverables, timeline checkpoints, and accredited verification cockpits.
          </p>
        </div>

        {/* Cockpit Phase Selector */}
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

        {/* Command Cockpit Screen */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.step}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200/90 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative overflow-hidden"
          >
            {/* Left Operational Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-[#251574] text-white flex items-center justify-center shadow-lg shrink-0">
                  <StepIcon className="w-7 h-7 text-sky-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-extrabold font-mono text-[#251574]">
                      PHASE {current.step}
                    </span>
                    <span className="px-3 py-0.5 rounded-full bg-sky-50 text-[#008AD8] text-xs font-mono font-bold border border-sky-200">
                      {current.timeline}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-snug mt-0.5">
                    {current.title}
                  </h3>
                </div>
              </div>

              <p className="text-slate-600 text-base leading-relaxed">
                {current.summary}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                {current.metrics.map((m, i) => (
                  <div key={i} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
                    <div className="text-xs font-bold text-[#251574]">{m.value}</div>
                    <div className="text-[10px] text-slate-500 font-mono mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Deliverable Badge */}
              <div className="p-4 bg-slate-900 text-white rounded-2xl border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-sky-400 shrink-0" />
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Audit Deliverable Artifact</div>
                    <div className="text-xs font-bold text-slate-100">{current.deliverable}</div>
                  </div>
                </div>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-[10px] font-mono font-bold border border-emerald-500/30">
                  VERIFIED
                </span>
              </div>

              <div className="pt-2">
                <Link
                  href="/get-a-quote"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#FF4D5A] hover:bg-rose-600 text-white font-bold text-xs shadow-lg transition-all"
                >
                  <span>Request Audit Schedule</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Interactive Command Cockpit Widget */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-[#120a3e] to-slate-950 text-white rounded-3xl p-8 border border-slate-800 shadow-2xl space-y-6 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2 font-mono text-xs text-sky-400">
                  <Activity className="w-4 h-4 animate-pulse" />
                  <span>COCKPIT SIMULATOR</span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">ISO/IEC 17021-1</span>
              </div>

              {/* Dynamic Interactive Widget States */}
              {current.cockpitWidget === "MANDAY_ESTIMATOR" && (
                <div className="space-y-4">
                  <div className="text-center py-4 bg-white/5 rounded-2xl border border-white/10">
                    <span className="text-xs text-slate-400 font-mono block">Calculated Audit Days</span>
                    <span className="text-4xl font-extrabold text-sky-400 font-mono mt-1 block">4.5 Days</span>
                    <span className="text-[10px] text-emerald-400 font-mono mt-1 block">✓ IAF MD5 Table Match</span>
                  </div>
                </div>
              )}

              {current.cockpitWidget === "DOCUMENT_SCANNER" && (
                <div className="space-y-4">
                  <div className="text-center py-4 bg-white/5 rounded-2xl border border-white/10">
                    <span className="text-xs text-slate-400 font-mono block">Doc Hygiene Scan</span>
                    <span className="text-4xl font-extrabold text-emerald-400 font-mono mt-1 block">100% READY</span>
                    <span className="text-[10px] text-sky-300 font-mono mt-1 block">✓ Clauses 4-10 Verified</span>
                  </div>
                </div>
              )}

              {current.cockpitWidget === "AUDITOR_RADAR" && (
                <div className="space-y-4">
                  <div className="text-center py-4 bg-white/5 rounded-2xl border border-white/10">
                    <span className="text-xs text-slate-400 font-mono block">Deployed Lead Auditor</span>
                    <span className="text-2xl font-bold text-white mt-1 block">UK & IN Regional Team</span>
                    <span className="text-[10px] text-sky-400 font-mono mt-1 block">Exemplar Global Certified</span>
                  </div>
                </div>
              )}

              {current.cockpitWidget === "QR_STAMP" && (
                <div className="space-y-4 text-center">
                  <div className="py-4 bg-white/10 rounded-2xl border border-emerald-500/40">
                    <span className="text-xs text-emerald-300 font-mono block">Certificate Issued</span>
                    <span className="text-2xl font-bold text-white mt-1 block">B4Q-QMS-849201</span>
                    <span className="text-[10px] text-emerald-400 font-mono mt-1 block">✓ Live on Public Registry</span>
                  </div>
                </div>
              )}

              {(current.cockpitWidget === "SURVEILLANCE_CLOCK" || current.cockpitWidget === "RENEWAL_GAUGE") && (
                <div className="space-y-4 text-center">
                  <div className="py-4 bg-white/5 rounded-2xl border border-white/10">
                    <span className="text-xs text-slate-400 font-mono block">Certificate Status</span>
                    <span className="text-2xl font-bold text-emerald-400 mt-1 block">ACTIVE & VALID</span>
                    <span className="text-[10px] text-slate-300 font-mono mt-1 block">3-Year Triennial Protection</span>
                  </div>
                </div>
              )}

              <div className="pt-2 text-center">
                <span className="text-[11px] font-mono text-slate-400">
                  B4Q MANAGEMENT LTD • COCKPIT SIMULATOR
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
