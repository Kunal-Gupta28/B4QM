"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Search,
  Filter,
  Sparkles,
  Lock,
  Users,
  Building,
  Cpu,
  Layers,
  Copy,
  Check,
  Info,
} from "lucide-react";
import { AnnexAControls2022 } from "@/data/standardsData";
import { AnnexAHeader } from "@/components/annex-a/AnnexAHeader";

export const AnnexAExplorer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"all" | "new" | "mapping">("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedControl, setExpandedControl] = useState<string | null>(null);

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

  const filteredControls = useMemo(() => {
    return AnnexAControls2022.filter((control) => {
      if (activeTab === "new" && !control.isNew2022) return false;
      if (activeTab === "mapping" && !control.mapping2013) return false;
      if (selectedCategory !== "All" && control.category !== selectedCategory) return false;

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
      <AnnexAHeader stats={stats} />

      <div className="py-6 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="inline-flex p-1 rounded-2xl bg-white/5 border border-white/10 self-start">
            <button
              onClick={() => {
                setActiveTab("all");
                setSelectedCategory("All");
              }}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === "all"
                  ? "bg-[#FF4D5A] text-white shadow-lg"
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
                  ? "bg-[#FF4D5A] text-white shadow-lg"
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
                  ? "bg-[#FF4D5A] text-white shadow-lg"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              2013 → 2022 Mapping Table
            </button>
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search code, title, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 text-xs focus:outline-none focus:ring-2 focus:ring-[#FF4D5A]"
            />
          </div>
        </div>

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

      {activeTab === "mapping" ? (
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
                      <span className="font-mono px-2 py-0.5 rounded bg-[#FF4D5A]/20 border border-[#FF4D5A]/40 text-[#FF4D5A] font-semibold">
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
                      ? "bg-gradient-to-br from-[#FF4D5A]/10 via-white/5 to-white/5 border-[#FF4D5A]/40 hover:border-[#FF4D5A]"
                      : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10"
                  }`}
                >
                  <div>
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
                          <span className="px-2 py-0.5 rounded-full bg-[#FF4D5A] text-white text-[10px] font-bold tracking-wider uppercase shadow-md">
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

                    <h4 className="text-base font-semibold text-white tracking-tight mb-2">
                      {control.title}
                    </h4>

                    <p className={`text-xs text-slate-300 leading-relaxed ${!isExpanded ? "line-clamp-2" : ""}`}>
                      {control.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-[11px]">
                    {control.mapping2013 ? (
                      <span className="font-mono text-slate-400">
                        2013: <span className="text-amber-300 font-semibold">{control.mapping2013}</span>
                      </span>
                    ) : (
                      <span className="font-mono text-[#FF4D5A] font-medium">New Control</span>
                    )}

                    <button
                      onClick={() => setExpandedControl(isExpanded ? null : control.id)}
                      className="text-[#FF4D5A] hover:underline font-medium flex items-center gap-0.5"
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
    </div>
  );
};
