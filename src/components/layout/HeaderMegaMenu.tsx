"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Lock, Leaf, Utensils, UserCheck, Activity, Server, HeartPulse, ShieldCheck } from "lucide-react";
import { ISO_STANDARDS } from "@/lib/data";

interface HeaderMegaMenuProps {
  onClose: () => void;
}

export function HeaderMegaMenu({ onClose }: HeaderMegaMenuProps) {
  const featuredStandards = ISO_STANDARDS.filter((s) => s.featured).slice(0, 8);

  const getStandardIcon = (iconName: string) => {
    switch (iconName) {
      case "Lock":
        return <Lock className="w-4 h-4 text-[#008AD8]" />;
      case "Leaf":
        return <Leaf className="w-4 h-4 text-emerald-600" />;
      case "Utensils":
        return <Utensils className="w-4 h-4 text-amber-600" />;
      case "UserCheck":
        return <UserCheck className="w-4 h-4 text-indigo-600" />;
      case "Activity":
        return <Activity className="w-4 h-4 text-[#FF4D5A]" />;
      case "Server":
        return <Server className="w-4 h-4 text-cyan-600" />;
      case "HeartPulse":
        return <HeartPulse className="w-4 h-4 text-rose-500" />;
      default:
        return <ShieldCheck className="w-4 h-4 text-[#251574]" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 6 }}
      transition={{ duration: 0.18 }}
      className="absolute top-full left-0 w-[780px] max-h-[72dvh] overflow-y-auto bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 mt-2 text-slate-900 grid grid-cols-12 gap-6 z-50"
    >
      <div className="col-span-8 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
          <span className="text-xs font-mono font-bold text-[#251574] uppercase tracking-wider">
            Core ISO Standards Scope
          </span>
          <Link href="/standards" onClick={onClose} className="text-[11px] font-bold text-[#008AD8] hover:underline">
            View All 5 Standards →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          {featuredStandards.map((std) => (
            <Link
              key={std.id}
              href={`/standards/${std.id}`}
              onClick={onClose}
              className="p-2.5 rounded-xl hover:bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all group flex items-start gap-2.5"
            >
              <div className="p-2 rounded-lg bg-slate-100 border border-slate-200 group-hover:scale-105 transition-transform shrink-0">
                {getStandardIcon(std.iconName)}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-mono text-[11px] font-bold text-[#008AD8] truncate">{std.code}</span>
                  {std.badge && (
                    <span className="text-[9px] px-1 py-0.5 rounded bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200 shrink-0 whitespace-nowrap">
                      {std.badge}
                    </span>
                  )}
                </div>
                <h4 className="text-xs font-bold text-slate-900 group-hover:text-[#FF4D5A] transition-colors truncate">
                  {std.name}
                </h4>
              </div>
            </Link>
          ))}
        </div>

        <div className="pt-2 border-t border-slate-100">
          <Link
            href="/standards"
            onClick={onClose}
            className="w-full py-2 bg-slate-100 hover:bg-[#251574] hover:text-white text-slate-800 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2"
          >
            <span>Explore ISO Standards Catalog</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      <div className="col-span-4 bg-gradient-to-br from-sky-50 to-slate-50 p-5 rounded-2xl border border-sky-200 flex flex-col justify-between">
        <div>
          <div className="w-9 h-9 rounded-xl bg-[#008AD8] text-white flex items-center justify-center mb-3 shadow-sm">
            <Building2 className="w-5 h-5" />
          </div>
          <h4 className="text-sm font-bold text-[#251574] mb-1">Unsure which standard fits?</h4>
          <p className="text-xs text-slate-600 leading-relaxed mb-4">
            Speak with B4Q accredited lead auditors to analyze your sector, risk profile, and audit scope.
          </p>
        </div>
        <Link href="/get-a-quote" onClick={onClose}>
          <button className="w-full px-4 py-2.5 rounded-xl bg-[#008AD8] hover:bg-[#0077BC] text-white text-xs font-bold shadow-sm transition-colors flex items-center justify-between">
            <span>Request Advice</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </Link>
      </div>
    </motion.div>
  );
}
