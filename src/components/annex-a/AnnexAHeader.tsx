"use client";

import React from "react";
import { Sparkles } from "lucide-react";

interface Stats {
  total: number;
  organizational: number;
  people: number;
  physical: number;
  technological: number;
  new2022: number;
}

interface AnnexAHeaderProps {
  stats: Stats;
}

export function AnnexAHeader({ stats }: AnnexAHeaderProps) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-coral/20 border border-brand-coral/40 text-brand-coral text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ISO/IEC 27001:2022 Interactive Tool</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight">
          Annex A Controls Explorer (93 Controls)
        </h3>
        <p className="text-slate-400 text-sm mt-2 max-w-2xl">
          Explore the modernized ISO 27001:2022 control framework. Filter by the 4 simplified themes, inspect the 11 brand-new cybersecurity controls, or reference 2013-to-2022 mapping.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
        <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
          <span className="text-2xl font-bold font-mono text-white">{stats.total}</span>
          <span className="text-[11px] block text-slate-400 font-medium mt-0.5">Total Controls</span>
        </div>
        <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20">
          <span className="text-2xl font-bold font-mono text-blue-400">{stats.organizational}</span>
          <span className="text-[11px] block text-blue-300/80 font-medium mt-0.5">Organizational</span>
        </div>
        <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
          <span className="text-2xl font-bold font-mono text-emerald-400">{stats.people}</span>
          <span className="text-[11px] block text-emerald-300/80 font-medium mt-0.5">People</span>
        </div>
        <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20">
          <span className="text-2xl font-bold font-mono text-amber-400">{stats.physical}</span>
          <span className="text-[11px] block text-amber-300/80 font-medium mt-0.5">Physical</span>
        </div>
        <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 col-span-2 sm:col-span-1">
          <span className="text-2xl font-bold font-mono text-purple-400">{stats.technological}</span>
          <span className="text-[11px] block text-purple-300/80 font-medium mt-0.5">Technological</span>
        </div>
      </div>
    </div>
  );
}
