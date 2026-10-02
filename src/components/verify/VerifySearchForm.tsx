"use client";

import React from "react";
import { Search, RefreshCw, Building2, UserCheck } from "lucide-react";
import { COUNTRIES } from "@/data/verifyData";

interface VerifySearchFormProps {
  activeTab: "organisation" | "personnel";
  setActiveTab: (tab: "organisation" | "personnel") => void;
  nameInput: string;
  setNameInput: (val: string) => void;
  certNumber: string;
  setCertNumber: (val: string) => void;
  selectedCountry: string;
  setSelectedCountry: (val: string) => void;
  loading: boolean;
  onSubmit: (e: React.FormEvent) => void;
}

export function VerifySearchForm({
  activeTab,
  setActiveTab,
  nameInput,
  setNameInput,
  certNumber,
  setCertNumber,
  selectedCountry,
  setSelectedCountry,
  loading,
  onSubmit,
}: VerifySearchFormProps) {
  return (
    <div>
      <div className="flex border-b border-slate-200 mb-6">
        <button
          type="button"
          onClick={() => setActiveTab("organisation")}
          className={`flex-1 py-3 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 border-b-2 transition-colors ${
            activeTab === "organisation"
              ? "border-[#251574] text-[#251574]"
              : "border-transparent text-slate-500 hover:text-slate-900"
          }`}
        >
          <Building2 className="w-4 h-4" />
          <span>Organisation Certificate</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("personnel")}
          className={`flex-1 py-3 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 border-b-2 transition-colors ${
            activeTab === "personnel"
              ? "border-[#251574] text-[#251574]"
              : "border-transparent text-slate-500 hover:text-slate-900"
          }`}
        >
          <UserCheck className="w-4 h-4" />
          <span>Auditor Personnel Certificate</span>
        </button>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-[#251574] mb-1.5 font-sans">
              {activeTab === "organisation" ? "Organisation Name" : "Auditor Full Name"}
            </label>
            <input
              type="text"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              placeholder={activeTab === "organisation" ? "e.g. Apex Global" : "e.g. SitaNath Nandi"}
              className="form-input-clean"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-[#251574] mb-1.5 font-sans">
              Certificate Registration Reference
            </label>
            <input
              type="text"
              value={certNumber}
              onChange={(e) => setCertNumber(e.target.value.toUpperCase())}
              placeholder="e.g. B4Q-9001-88421"
              className="form-input-clean font-mono uppercase font-bold"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <div className="w-full sm:w-auto">
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1 font-mono">
              Filter Registry Region
            </label>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="form-select-clean min-w-[260px]"
            >
              <option value="ALL">All Global Registries (UK, IN, US, SG)</option>
              {COUNTRIES.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.flag} {c.name}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#FF4D5A] hover:bg-[#E63946] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
          >
            {loading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin text-white" />
                <span>Searching Registry...</span>
              </>
            ) : (
              <>
                <Search className="w-4 h-4" />
                <span>Verify Certificate</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
