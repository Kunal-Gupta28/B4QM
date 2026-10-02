"use client";

import React from "react";
import { motion } from "framer-motion";

interface QuoteStepProgressProps {
  step: number;
}

export function QuoteStepProgress({ step }: QuoteStepProgressProps) {
  return (
    <div className="w-full max-w-4xl mx-auto px-[4%] sm:px-[5%] lg:px-[6%] pt-8">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center justify-between text-xs font-mono text-slate-500">
          <span className="text-[#008AD8] font-bold">STEP {step} OF 4</span>
          <span className="font-semibold text-slate-700">
            {step === 1 && "Select ISO Standards"}
            {step === 2 && "Organisation Details"}
            {step === 3 && "Scope & Status"}
            {step === 4 && "Review & Submit"}
          </span>
        </div>

        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[#008AD8]"
            animate={{ width: `${step * 25}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <div className="grid grid-cols-4 gap-2 text-center text-[11px] font-mono">
          {["1. Standards", "2. Org Info", "3. Scope", "4. Review"].map((label, idx) => (
            <div
              key={idx}
              className={`py-1.5 rounded-lg transition-colors ${
                step === idx + 1
                  ? "bg-[#251574] text-white font-bold"
                  : step > idx + 1
                  ? "bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200"
                  : "text-slate-400 bg-slate-50"
              }`}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
