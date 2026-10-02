"use client";

import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface CertScope {
  certStatus: string;
  existingCB: string;
  scopeDescription: string;
}

interface QuoteStep3ScopeProps {
  certScope: CertScope;
  setCertScope: React.Dispatch<React.SetStateAction<CertScope>>;
  onBack: () => void;
  onNext: () => void;
}

export function QuoteStep3Scope({ certScope, setCertScope, onBack, onNext }: QuoteStep3ScopeProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-[#251574] mb-1">Step 3: Scope & Certification Status</h2>
        <p className="text-xs text-slate-500">Specify whether this is a new certification or transfer from another body.</p>
      </div>

      <div className="space-y-4 text-xs text-slate-700">
        <div>
          <label className="block font-bold text-slate-900 mb-2">Certification Project Type</label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {["New Certification", "Transfer from Existing CB", "Recertification Cycle"].map((type) => (
              <div
                key={type}
                onClick={() => setCertScope({ ...certScope, certStatus: type })}
                className={`p-3 rounded-xl border-2 text-center cursor-pointer transition-all ${
                  certScope.certStatus === type
                    ? "border-[#008AD8] bg-sky-50 font-bold text-[#251574]"
                    : "border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300"
                }`}
              >
                {type}
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className="block font-bold text-slate-900 mb-1">Audit Scope Description (Optional)</label>
          <textarea
            rows={3}
            value={certScope.scopeDescription}
            onChange={(e) => setCertScope({ ...certScope, scopeDescription: e.target.value })}
            placeholder="e.g. Design, development, and hosting of enterprise cloud SaaS products..."
            className="w-full bg-slate-50 text-slate-900 text-xs px-4 py-3 rounded-xl border border-slate-200 focus:outline-none"
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
          type="button"
          onClick={onNext}
          className="px-8 py-3 rounded-full bg-[#FF4D5A] hover:bg-[#E63946] text-white font-bold text-xs shadow-md flex items-center gap-2"
        >
          <span>Next: Review & Contact</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
