"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface QuoteSuccessScreenProps {
  quoteReference: string;
  contactName: string;
  workEmail: string;
  calculatedManDays: number;
}

export function QuoteSuccessScreen({
  quoteReference,
  contactName,
  workEmail,
  calculatedManDays,
}: QuoteSuccessScreenProps) {
  return (
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
          Thank you, {contactName || "Valued Partner"}. We have logged your estimated audit requirement of <strong>{calculatedManDays} Man-Days</strong>. A detailed multi-year proposal has been dispatched to <strong>{workEmail || "your email"}</strong>.
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
  );
}
