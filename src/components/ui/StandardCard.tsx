"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Leaf,
  Utensils,
  UserCheck,
  Activity,
  Server,
  ArrowRight,
} from "lucide-react";
import { ISOStandard } from "@/types";

interface StandardCardProps {
  standard: ISOStandard;
}

export const StandardCard: React.FC<StandardCardProps> = ({ standard }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Lock":
        return <Lock className="w-5 h-5 text-brand-navy" />;
      case "Leaf":
        return <Leaf className="w-5 h-5 text-emerald-600" />;
      case "Utensils":
        return <Utensils className="w-5 h-5 text-amber-600" />;
      case "UserCheck":
        return <UserCheck className="w-5 h-5 text-indigo-600" />;
      case "Activity":
        return <Activity className="w-5 h-5 text-rose-600" />;
      case "Server":
        return <Server className="w-5 h-5 text-cyan-600" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-brand-navy" />;
    }
  };

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group relative bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 flex flex-col justify-between"
    >
      <div>
        {/* Card Header: Icon, Code & Badge */}
        <div className="flex items-center justify-between mb-4 gap-2">
          <div className="p-2.5 rounded-lg bg-slate-100 border border-slate-200 shrink-0">
            {getIcon(standard.iconName)}
          </div>
          <div className="flex items-center gap-1.5 flex-wrap justify-end">
            {standard.badge && (
              <span className="inline-block text-[10px] px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200 font-mono whitespace-nowrap shrink-0">
                {standard.badge}
              </span>
            )}
            <span className="inline-block text-[11px] px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 font-mono font-medium whitespace-nowrap shrink-0">
              {standard.clauseChip}
            </span>
          </div>
        </div>

        {/* Standard Code & Title */}
        <span className="font-mono text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
          {standard.code}
        </span>
        <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-brand-coral transition-colors mb-2 leading-snug">
          {standard.name}
        </h3>

        {/* Description & Outcome */}
        <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
          {standard.description}
        </p>

        <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 mb-6">
          <strong className="text-slate-900 font-semibold">Outcome:</strong> {standard.outcome}
        </div>
      </div>

      {/* Card Footer Link */}
      <Link
        href={`/standards/${standard.id}`}
        className="inline-flex items-center justify-between text-xs font-semibold text-brand-navy group-hover:text-brand-coral transition-colors pt-3 border-t border-slate-100"
      >
        <span>Explore Standard Specification</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
};
