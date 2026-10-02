"use client";

import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const COUNTRIES = [
  "United Kingdom",
  "India",
  "United States",
  "Singapore",
  "Australia",
  "Germany",
  "United Arab Emirates",
  "Canada",
  "France",
  "Japan",
  "Other International",
];

export const SITES_OPTIONS = ["1 Site (Single Location)", "2 to 5 Sites", "6 to 15 Sites", "16+ Multi-site"];
export const EMPLOYEES_OPTIONS = [
  "1 - 25 Employees",
  "26 - 100 Employees",
  "101 - 500 Employees",
  "501 - 2,500 Employees",
  "2,500+ Employees",
];
export const INDUSTRIES = [
  "Software & IT Services",
  "Manufacturing & Engineering",
  "Food, Agriculture & Processing",
  "Construction & Infrastructure",
  "Healthcare & Pharmaceuticals",
  "Financial Services & Banking",
  "Logistics & Supply Chain",
  "Public Sector & Education",
  "Professional Services & Consulting",
];

interface OrgDetails {
  companyName: string;
  country: string;
  sites: string;
  employees: string;
  industry: string;
}

interface QuoteStep2OrgDetailsProps {
  orgDetails: OrgDetails;
  setOrgDetails: React.Dispatch<React.SetStateAction<OrgDetails>>;
  onBack: () => void;
  onNext: () => void;
}

export function QuoteStep2OrgDetails({ orgDetails, setOrgDetails, onBack, onNext }: QuoteStep2OrgDetailsProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-[#251574] mb-1">Step 2: Organisation Details</h2>
        <p className="text-xs text-slate-500">Provide company size and site count for accurate IAF man-day calculations.</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-bold text-[#251574] mb-1.5">Company / Organisation Name</label>
          <input
            type="text"
            value={orgDetails.companyName}
            onChange={(e) => setOrgDetails({ ...orgDetails, companyName: e.target.value })}
            placeholder="e.g. Apex Global Technologies Ltd."
            className="form-input-clean"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-[#251574] mb-1.5">Primary Operating Country</label>
            <select
              value={orgDetails.country}
              onChange={(e) => setOrgDetails({ ...orgDetails, country: e.target.value })}
              className="form-select-clean"
            >
              {COUNTRIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-[#251574] mb-1.5">Industry Sector</label>
            <select
              value={orgDetails.industry}
              onChange={(e) => setOrgDetails({ ...orgDetails, industry: e.target.value })}
              className="form-select-clean"
            >
              {INDUSTRIES.map((i) => (
                <option key={i} value={i}>{i}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-[#251574] mb-1.5">Total Employee Headcount</label>
            <select
              value={orgDetails.employees}
              onChange={(e) => setOrgDetails({ ...orgDetails, employees: e.target.value })}
              className="form-select-clean"
            >
              {EMPLOYEES_OPTIONS.map((e) => (
                <option key={e} value={e}>{e}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-[#251574] mb-1.5">Number of Operational Sites</label>
            <select
              value={orgDetails.sites}
              onChange={(e) => setOrgDetails({ ...orgDetails, sites: e.target.value })}
              className="form-select-clean"
            >
              {SITES_OPTIONS.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
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
          <span>Next: Scope & Status</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
