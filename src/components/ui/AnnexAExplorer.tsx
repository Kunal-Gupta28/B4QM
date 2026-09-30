"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Search,
  Filter,
  Sparkles,
  CheckCircle2,
  Lock,
  Users,
  Building,
  Cpu,
  Layers,
  ArrowRight,
  Copy,
  Check,
  Info,
  ExternalLink,
} from "lucide-react";
import { AnnexAControls2022, AnnexAControl } from "@/data/standardsData";

export const AnnexAExplorer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"all" | "new" | "mapping">("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedControl, setExpandedControl] = useState<string | null>(null);

  // Statistics breakdown
  const stats = useMemo(() => {
    return {
      total: AnnexAControls2022.length,
      organizational: AnnexAControls2022.filter((c) => c.category === "Organizational").length,
      people: AnnexAControls2022.filter((c) => c.category === "People").length,
      physical: AnnexAControls2022.filter((c) => c.category === "Physical").length,
      technological: AnnexAControls2022.filter((c) => c.category === "Technological").length,
      new2022: AnnexAControls2022.filter((c) => c.isNew2022).length,
    };
  }, []);

  // Filter logic
  const filteredControls = useMemo(() => {
    return AnnexAControls2022.filter((control) => {
      // Tab filter
      if (activeTab === "new" && !control.isNew2022) return false;
      if (activeTab === "mapping" && !control.mapping2013) return false;

      // Category filter
      if (selectedCategory !== "All" && control.category !== selectedCategory) return false;

      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchCode = control.code.toLowerCase().includes(query);
        const matchTitle = control.title.toLowerCase().includes(query);
        const matchDesc = control.description.toLowerCase().includes(query);
        const matchMapping = control.mapping2013?.toLowerCase().includes(query);
        return matchCode || matchTitle || matchDesc || matchMapping;
      }

      return true;
    });
  }, [activeTab, selectedCategory, searchQuery]);

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(code);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Organizational":
        return <Building className="w-4 h-4 text-blue-500" />;
      case "People":
        return <Users className="w-4 h-4 text-emerald-500" />;
      case "Physical":
        return <Lock className="w-4 h-4 text-amber-500" />;
      case "Technological":
        return <Cpu className="w-4 h-4 text-purple-500" />;
      default:
        return <Layers className="w-4 h-4 text-slate-500" />;
    }
  };

  return (
    <div className="w-full bg-slate-900/40 rounded-3xl border border-white/10 p-6 md:p-10 shadow-2xl backdrop-blur-xl text-slate-100 my-8">
      {/* Header Banner */}
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

        {/* Counter Summary Pills */}
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

      {/* Mode Tabs & Search Filter Controls */}
      <div className="py-6 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Main Mode Tabs */}
          <div className="inline-flex p-1 rounded-2xl bg-white/5 border border-white/10 self-start">
            <button
              onClick={() => {
                setActiveTab("all");
                setSelectedCategory("All");
              }}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === "all"
                  ? "bg-brand-coral text-white shadow-lg shadow-brand-coral/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              All 93 Controls
            </button>
            <button
              onClick={() => {
                setActiveTab("new");
                setSelectedCategory("All");
              }}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === "new"
                  ? "bg-brand-coral text-white shadow-lg shadow-brand-coral/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>11 New Controls (2022)</span>
            </button>
            <button
              onClick={() => {
                setActiveTab("mapping");
                setSelectedCategory("All");
              }}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === "mapping"
                  ? "bg-brand-coral text-white shadow-lg shadow-brand-coral/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              2013 → 2022 Mapping Table
            </button>
          </div>

          {/* Real-time Search input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search code, title, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 text-xs focus:outline-none focus:ring-2 focus:ring-brand-coral"
            />
          </div>
        </div>

        {/* Category Sub-Filters */}
        {activeTab !== "mapping" && (
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="text-xs text-slate-400 flex items-center gap-1 mr-2">
              <Filter className="w-3.5 h-3.5" /> Category:
            </span>
            {["All", "Organizational", "People", "Physical", "Technological"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-white/20 text-white border border-white/30"
                    : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-slate-200 border border-transparent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Grid of Controls OR Mapping Table */}
      {activeTab === "mapping" ? (
        /* 2013 -> 2022 Mapping View Table */
        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/5">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-white/10 text-slate-200 uppercase font-mono tracking-wider text-[11px] border-b border-white/10">
              <tr>
                <th className="py-3.5 px-4">2022 Control ID & Title</th>
                <th className="py-3.5 px-4">Theme Category</th>
                <th className="py-3.5 px-4">2013 Control Mapping</th>
                <th className="py-3.5 px-4">Key Change & Guidance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredControls.map((control) => (
                <tr key={control.id} className="hover:bg-white/5 transition-colors">
                  <td className="py-3.5 px-4 font-medium text-white">
                    <div className="flex items-center gap-2">
                      <span className="font-mono px-2 py-0.5 rounded bg-brand-coral/20 border border-brand-coral/40 text-brand-coral font-semibold">
                        {control.code}
                      </span>
                      <span>{control.title}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-1.5">
                      {getCategoryIcon(control.category)}
                      <span>{control.category}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 font-mono text-amber-300 font-semibold">
                    {control.mapping2013 || "—"}
                  </td>
                  <td className="py-3.5 px-4 text-slate-400 max-w-md leading-relaxed">
                    {control.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        /* Controls Grid View */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {filteredControls.map((control) => {
              const isExpanded = expandedControl === control.id;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  key={control.id}
                  className={`p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                    control.isNew2022
                      ? "bg-gradient-to-br from-brand-coral/10 via-white/5 to-white/5 border-brand-coral/40 hover:border-brand-coral"
                      : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10"
                  }`}
                >
                  <div>
                    {/* Control Card Header */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-sm font-bold text-white px-2.5 py-1 rounded-lg bg-white/10 border border-white/10">
                          {control.code}
                        </span>
                        <div className="flex items-center gap-1 text-[11px] font-medium text-slate-400 bg-white/5 px-2 py-0.5 rounded-full border border-white/5">
                          {getCategoryIcon(control.category)}
                          <span>{control.category}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1">
                        {control.isNew2022 && (
                          <span className="px-2 py-0.5 rounded-full bg-brand-coral text-white text-[10px] font-bold tracking-wider uppercase shadow-md shadow-brand-coral/30">
                            NEW 2022
                          </span>
                        )}
                        <button
                          onClick={() => copyToClipboard(control.code)}
                          title="Copy control code"
                          className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                        >
                          {copiedId === control.code ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Title */}
                    <h4 className="text-base font-semibold text-white tracking-tight mb-2">
                      {control.title}
                    </h4>

                    {/* Description */}
                    <p className={`text-xs text-slate-300 leading-relaxed ${!isExpanded ? "line-clamp-2" : ""}`}>
                      {control.description}
                    </p>
                  </div>

                  {/* Card Footer: Mapping chip & Expand toggle */}
                  <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-[11px]">
                    {control.mapping2013 ? (
                      <span className="font-mono text-slate-400">
                        2013: <span className="text-amber-300 font-semibold">{control.mapping2013}</span>
                      </span>
                    ) : (
                      <span className="font-mono text-brand-coral font-medium">New Control</span>
                    )}

                    <button
                      onClick={() => setExpandedControl(isExpanded ? null : control.id)}
                      className="text-brand-coral hover:underline font-medium flex items-center gap-0.5"
                    >
                      <span>{isExpanded ? "Show less" : "Read scope"}</span>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      )}

      {filteredControls.length === 0 && (
        <div className="text-center py-12 text-slate-400 space-y-2">
          <Info className="w-8 h-8 mx-auto text-slate-500" />
          <p className="text-base font-medium text-slate-300">No Annex A controls matched your query.</p>
          <p className="text-xs">Try clearing your search term or switching filter categories.</p>
        </div>
      )}

      {/* Transition Guidance Note */}
      <div className="mt-8 p-4 rounded-2xl bg-brand-coral/10 border border-brand-coral/30 flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-brand-coral shrink-0 mt-0.5" />
        <div className="text-xs text-slate-300 leading-relaxed">
          <strong className="text-white font-semibold block mb-0.5">Transition Note for Certified Organisations:</strong>
          The 2022 revision consolidated 114 controls down to 93, adding 11 modern controls for cybersecurity and cloud readiness. Organizations holding legacy ISO 27001:2013 certificates should update their Statement of Applicability (SoA) to mirror the 2022 structure.
        </div>
      </div>
    </div>
  );
};
