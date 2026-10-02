"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, QrCode, Download } from "lucide-react";
import { OrgCertificate } from "@/data/verifyData";

interface OrgCertResultCardProps {
  cert: OrgCertificate;
}

export function OrgCertResultCard({ cert }: OrgCertResultCardProps) {
  return (
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
            <span className="text-xs font-mono text-[#008AD8] font-bold block">{cert.certificateNumber}</span>
            <h2 className="text-xl font-bold text-slate-900">{cert.organisationName}</h2>
          </div>
        </div>

        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>{cert.status} ✓</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-700">
        <div>
          <span className="text-[10px] text-slate-400 font-mono uppercase block mb-1">Certified Standard</span>
          <span className="text-sm font-bold text-[#251574] font-mono bg-sky-50 px-2.5 py-1 rounded border border-sky-200 inline-block">
            {cert.standard}
          </span>
        </div>

        <div>
          <span className="text-[10px] text-slate-400 font-mono uppercase block mb-1">Accredited Scope</span>
          <p className="text-slate-800 leading-relaxed font-serif italic">"{cert.scope}"</p>
        </div>

        <div>
          <span className="text-[10px] text-slate-400 font-mono uppercase block mb-1">Issue / Expiry Dates</span>
          <div className="font-mono text-xs space-y-0.5">
            <div>Initial Issue: <strong>{cert.initialCertificationDate}</strong></div>
            <div>Valid Until: <strong className="text-emerald-700">{cert.expiryDate}</strong></div>
          </div>
        </div>

        <div>
          <span className="text-[10px] text-slate-400 font-mono uppercase block mb-1">Operational Sites</span>
          <span className="text-xs font-bold text-slate-800 bg-slate-100 px-2.5 py-1 rounded border border-slate-200 inline-block">
            {cert.sitesCount} Registered Site(s)
          </span>
        </div>
      </div>

      <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-3">
          <QrCode className="w-10 h-10 text-slate-700 p-1 bg-slate-100 rounded-lg border border-slate-200" />
          <div>
            <span className="font-mono font-bold text-slate-900 block">Cryptographic Verification Badge</span>
            <span className="text-slate-500 text-[11px]">{cert.accreditationBody} Registry Sync Active</span>
          </div>
        </div>

        <button
          onClick={() => alert(`Downloading verified certificate PDF for ${cert.certificateNumber}`)}
          className="px-5 py-2.5 rounded-full bg-[#008AD8] hover:bg-[#0077BC] text-white text-xs font-bold shadow transition-colors flex items-center gap-2"
        >
          <Download className="w-4 h-4" />
          <span>Download Verification PDF</span>
        </button>
      </div>
    </motion.div>
  );
}
