"use client";

import React from "react";
import { Check, BadgeCheck, ArrowRight } from "lucide-react";

export const STANDARDS_OPTIONS = [
  { id: "iso-9001", code: "ISO 9001:2015", title: "Quality Management System (QMS)", category: "Quality & Operations" },
  { id: "iso-14001", code: "ISO 14001:2015", title: "Environmental Management System (EMS)", category: "Environment & Safety" },
  { id: "iso-45001", code: "ISO 45001:2018", title: "Occupational Health & Safety (OH&S)", category: "Environment & Safety" },
  { id: "iso-22000", code: "ISO 22000:2018", title: "Food Safety Management System (FSMS)", category: "Food & Agriculture" },
  { id: "iso-27001", code: "ISO/IEC 27001:2022", title: "Information Security Management (ISMS)", category: "Security & Privacy" },
];

interface QuoteStep1StandardsProps {
  selectedStandards: string[];
  toggleStandard: (id: string) => void;
  onNext: () => void;
}

export function QuoteStep1Standards({ selectedStandards, toggleStandard, onNext }: QuoteStep1StandardsProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-[#251574] mb-1">Step 1: Choose ISO Standards</h2>
        <p className="text-xs text-slate-500">Select one or multiple standards. Integrated audits offer up to 20% man-day savings.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {STANDARDS_OPTIONS.map((std) => {
          const isSelected = selectedStandards.includes(std.id);
          return (
            <div
              key={std.id}
              onClick={() => toggleStandard(std.id)}
              className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                isSelected
                  ? "border-[#008AD8] bg-sky-50/50 shadow-sm"
                  : "border-slate-200 bg-slate-50 hover:border-slate-300"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold text-[#008AD8]">{std.code}</span>
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                    isSelected ? "bg-[#008AD8] text-white" : "border border-slate-300 bg-white"
                  }`}
                >
                  {isSelected && <Check className="w-3.5 h-3.5" />}
                </div>
              </div>
              <h4 className="text-sm font-bold text-slate-900 leading-snug">{std.title}</h4>
            </div>
          );
        })}
      </div>

      {selectedStandards.length > 1 && (
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-3">
          <BadgeCheck className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>
            <strong>Integrated Audit Discount Applied:</strong> Combining {selectedStandards.length} standards saves ~20% total man-days!
          </span>
        </div>
      )}

      <div className="flex justify-end pt-4 border-t border-slate-100">
        <button
          type="button"
          onClick={onNext}
          className="px-8 py-3 rounded-full bg-[#FF4D5A] hover:bg-[#E63946] text-white font-bold text-xs shadow-md flex items-center gap-2"
        >
          <span>Next: Org Info</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
