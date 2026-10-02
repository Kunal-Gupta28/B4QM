"use client";

import React from "react";
import { motion } from "framer-motion";
import { UserCheck, CheckCircle2 } from "lucide-react";
import { PersonnelCertificate } from "@/data/verifyData";

interface PersonnelCertResultCardProps {
  cert: PersonnelCertificate;
}

export function PersonnelCertResultCard({ cert }: PersonnelCertResultCardProps) {
  return (
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
            <span className="text-xs font-mono text-[#008AD8] font-bold block">{cert.certificateNumber}</span>
            <h2 className="text-xl font-bold text-slate-900">{cert.auditorName}</h2>
          </div>
        </div>

        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>{cert.status} AUDITOR ✓</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-700">
        <div>
          <span className="text-[10px] text-slate-400 font-mono uppercase block mb-1">Qualification Course</span>
          <span className="text-sm font-bold text-[#251574] font-mono bg-sky-50 px-2.5 py-1 rounded border border-sky-200 inline-block">
            {cert.courseTitle}
          </span>
        </div>

        <div>
          <span className="text-[10px] text-slate-400 font-mono uppercase block mb-1">Authorisation Grade</span>
          <span className="text-xs font-bold text-[#008AD8] block">{cert.grade} ({cert.standard})</span>
        </div>

        <div>
          <span className="text-[10px] text-slate-400 font-mono uppercase block mb-1">Issue / Expiry Dates</span>
          <div className="font-mono text-xs">
            <div>Issued: <strong>{cert.issueDate}</strong></div>
            <div>Expires: <strong className="text-emerald-700">{cert.expiryDate}</strong></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
