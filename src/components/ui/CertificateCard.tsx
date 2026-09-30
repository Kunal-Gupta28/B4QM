"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Award, CheckCircle2, QrCode, Building2, Calendar } from "lucide-react";
import { CertificateData } from "@/types";

interface CertificateCardProps {
  certificate?: CertificateData;
  className?: string;
}

const DEFAULT_CERT: CertificateData = {
  certNumber: "B4Q-ISMS-2026-8842",
  clientName: "Apex Global Technologies Ltd.",
  standard: "ISO/IEC 27001:2022 (ISMS)",
  scope: "Design, development, and hosting of enterprise cloud SaaS applications and cyber managed services.",
  country: "United Kingdom",
  issueDate: "2024-03-15",
  expiryDate: "2027-03-14",
  status: "Valid",
  sites: ["London HQ", "Manchester DC"],
  type: "Organisation",
};

export const CertificateCard: React.FC<CertificateCardProps> = ({
  certificate = DEFAULT_CERT,
  className = "",
}) => {
  return (
    <div className={`w-full max-w-md ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative bg-white text-slate-900 p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xl overflow-hidden group select-none"
      >
        {/* Subtle Top Seal Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-navy via-brand-coral to-brand-navy" />

        {/* Card Header: Issuer Logo & Valid Status Pill */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-navy flex items-center justify-center text-white font-bold text-sm shadow-sm">
              B4Q
            </div>
            <div>
              <span className="font-serif text-base font-bold tracking-tight text-slate-900 block leading-tight">
                B4Q Management Ltd.
              </span>
              <span className="text-[11px] text-slate-500 font-medium tracking-wide uppercase">
                ISO Certification Body
              </span>
            </div>
          </div>

          {/* Valid Emerald Status Pill */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Valid Certificate</span>
          </div>
        </div>

        {/* Certificate Reference Badge */}
        <div className="mb-4">
          <span className="text-[10px] text-slate-400 uppercase font-mono tracking-wider block mb-1">
            Certificate Registration No.
          </span>
          <div className="inline-block px-3 py-1 rounded-md bg-slate-50 border border-slate-200 font-mono text-xs font-bold text-slate-800 tracking-wider">
            {certificate.certNumber}
          </div>
        </div>

        {/* Client & Standard Info */}
        <div className="space-y-3.5 mb-6">
          <div>
            <span className="text-[10px] text-slate-400 uppercase font-mono tracking-wider block mb-0.5 flex items-center gap-1">
              <Building2 className="w-3 h-3 text-slate-500" /> Certified Organization
            </span>
            <h3 className="text-base font-bold text-slate-900 leading-snug">
              {certificate.clientName}
            </h3>
          </div>

          <div>
            <span className="text-[10px] text-slate-400 uppercase font-mono tracking-wider block mb-0.5">
              Management System Standard
            </span>
            <span className="text-xs font-semibold text-brand-navy bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200 inline-block font-mono">
              {certificate.standard}
            </span>
          </div>

          <div>
            <span className="text-[10px] text-slate-400 uppercase font-mono tracking-wider block mb-0.5">
              Scope of Registration
            </span>
            <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 italic font-serif">
              "{certificate.scope}"
            </p>
          </div>
        </div>

        {/* Card Footer: Dates & QR Verification */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
          <div className="space-y-1 font-mono text-[11px]">
            <div className="flex items-center gap-1.5 text-slate-500">
              <Calendar className="w-3.5 h-3.5 text-emerald-600" />
              <span>Issue: <strong className="text-slate-900">{certificate.issueDate}</strong></span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-500">
              <Calendar className="w-3.5 h-3.5 text-brand-coral" />
              <span>Expiry: <strong className="text-slate-900">{certificate.expiryDate}</strong></span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700" title="Scan to verify online">
              <QrCode className="w-6 h-6" />
            </div>
            <div className="hidden sm:flex flex-col text-right">
              <span className="text-[10px] font-bold text-slate-900 flex items-center gap-1">
                <Award className="w-3 h-3 text-brand-navy" /> Exemplar Global
              </span>
              <span className="text-[9px] text-slate-500 font-mono">Public Registry</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
