"use client";

import React from "react";
import { ArrowLeft, Send, RefreshCw } from "lucide-react";

interface ContactInfo {
  contactName: string;
  workEmail: string;
  phone: string;
  jobTitle: string;
}

interface QuoteStep4ReviewProps {
  calculatedManDays: number;
  selectedStandards: string[];
  employees: string;
  sites: string;
  contactInfo: ContactInfo;
  setContactInfo: React.Dispatch<React.SetStateAction<ContactInfo>>;
  isPending: boolean;
  onBack: () => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function QuoteStep4Review({
  calculatedManDays,
  selectedStandards,
  employees,
  sites,
  contactInfo,
  setContactInfo,
  isPending,
  onBack,
  onSubmit,
}: QuoteStep4ReviewProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-[#251574] mb-1">Step 4: Review Quote Summary & Submit</h2>
        <p className="text-xs text-slate-500">Provide your contact details to receive your formal PDF proposal.</p>
      </div>

      <div className="p-6 rounded-2xl bg-sky-50 border-2 border-[#008AD8] space-y-4">
        <div className="flex items-center justify-between border-b border-sky-200 pb-3">
          <span className="text-xs font-mono font-bold text-[#251574] uppercase">Estimated Audit Man-Days</span>
          <span className="text-2xl font-serif font-bold text-[#008AD8]">{calculatedManDays} Days</span>
        </div>
        <div className="text-xs text-slate-600 space-y-1">
          <div>
            Selected Standards: <strong className="text-slate-900">{selectedStandards.length} Standards ({selectedStandards.join(", ")})</strong>
          </div>
          <div>
            Headcount & Sites: <strong className="text-slate-900">{employees} · {sites}</strong>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-bold text-[#251574] mb-1.5">Your Full Name *</label>
          <input
            required
            type="text"
            value={contactInfo.contactName}
            onChange={(e) => setContactInfo({ ...contactInfo, contactName: e.target.value })}
            placeholder="e.g. Sarah Jenkins"
            className="form-input-clean"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-[#251574] mb-1.5">Work Email Address *</label>
          <input
            required
            type="email"
            value={contactInfo.workEmail}
            onChange={(e) => setContactInfo({ ...contactInfo, workEmail: e.target.value })}
            placeholder="sarah@company.com"
            className="form-input-clean"
          />
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
        <button
          type="button"
          onClick={onBack}
          className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>
        <button
          type="submit"
          disabled={isPending}
          className="px-8 py-3.5 rounded-full bg-[#FF4D5A] hover:bg-[#E63946] text-white font-bold text-sm shadow-md flex items-center gap-2 disabled:opacity-50"
        >
          {isPending ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin text-white" />
              <span>Calculating & Transmitting...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Request Formal Quote Proposal</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
