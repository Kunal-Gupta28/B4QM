"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShieldCheck, GraduationCap, FileText, ArrowRight, X, Sparkles } from "lucide-react";
import { ISO_STANDARDS, COURSES, PUBLIC_DOCUMENTS } from "@/lib/data";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  // Keyboard shortcut Cmd+K / Ctrl+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Filtered Results
  const filteredStandards = useMemo(() => {
    if (!query) return ISO_STANDARDS.slice(0, 10);
    const q = query.toLowerCase();
    return ISO_STANDARDS.filter(
      (s) => s.code.toLowerCase().includes(q) || s.name.toLowerCase().includes(q) || s.description.toLowerCase().includes(q)
    );
  }, [query]);

  const filteredCourses = useMemo(() => {
    if (!query) return COURSES;
    const q = query.toLowerCase();
    return COURSES.filter(
      (c) => c.title.toLowerCase().includes(q) || c.standardCode.toLowerCase().includes(q) || c.type.toLowerCase().includes(q)
    );
  }, [query]);

  const filteredDocs = useMemo(() => {
    if (!query) return PUBLIC_DOCUMENTS;
    const q = query.toLowerCase();
    return PUBLIC_DOCUMENTS.filter(
      (d) => d.title.toLowerCase().includes(q) || d.code.toLowerCase().includes(q) || d.category.toLowerCase().includes(q)
    );
  }, [query]);

  const handleSelect = (url: string) => {
    onClose();
    setQuery("");
    router.push(url);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[8dvh] px-4">
          {/* Light backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 w-[100dvw] h-[100dvh] bg-slate-900/40 backdrop-blur-md"
          />

          {/* Modal Container - Light Theme */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -15 }}
            transition={{ duration: 0.2 }}
            className="relative w-[92%] max-w-2xl max-h-[85dvh] bg-white text-slate-900 rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 font-sans"
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-5 py-4 border-b border-slate-100 bg-slate-50/90">
              <Search className="w-5 h-5 text-[#F3525A] shrink-0 mr-3" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search ISO standards, auditor courses, documents, or verify certificate..."
                className="w-full bg-transparent text-sm text-slate-900 placeholder-slate-400 focus:outline-none font-medium"
              />
              {query ? (
                <button
                  onClick={() => setQuery("")}
                  className="p-1 text-slate-400 hover:text-slate-700 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              ) : (
                <kbd className="hidden sm:inline-block px-2.5 py-1 text-[10px] font-mono text-slate-500 bg-slate-200/70 rounded-lg border border-slate-300/60 font-semibold">
                  ESC to exit
                </kbd>
              )}
            </div>

            {/* Scrollable Content Results Container */}
            <div className="max-h-[65dvh] overflow-y-auto p-5 space-y-6 divide-y divide-slate-100">
              {/* Quick Action Bar */}
              <div className="space-y-2.5">
                <span className="text-[11px] font-mono text-[#F3525A] uppercase tracking-wider font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#F3525A]" /> Quick Actions
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => handleSelect("/verify")}
                    className="p-3.5 rounded-2xl bg-emerald-50 hover:bg-emerald-100/70 border border-emerald-200/80 text-left flex items-center justify-between group transition-all"
                  >
                    <div className="flex items-center gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span className="text-xs font-bold text-emerald-950">Verify Certificate Registry</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-600 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => handleSelect("/get-a-quote")}
                    className="p-3.5 rounded-2xl bg-rose-50 hover:bg-rose-100/70 border border-rose-200/80 text-left flex items-center justify-between group transition-all"
                  >
                    <div className="flex items-center gap-2.5">
                      <Sparkles className="w-4 h-4 text-[#F3525A]" />
                      <span className="text-xs font-bold text-rose-950">Get Certification Quote</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[#F3525A] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* ISO Management Standards */}
              {filteredStandards.length > 0 && (
                <div className="pt-5 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-sky-700 uppercase tracking-wider font-bold">
                      ISO Management Standards ({filteredStandards.length})
                    </span>
                    <button onClick={() => handleSelect("/standards")} className="text-[10px] font-mono text-slate-500 hover:text-sky-700 font-semibold">
                      View All Standards →
                    </button>
                  </div>
                  <div className="space-y-1.5">
                    {filteredStandards.map((std) => (
                      <button
                        key={std.id}
                        onClick={() => handleSelect(`/standards/${std.id}`)}
                        className="w-full p-3 rounded-xl bg-slate-50 hover:bg-sky-50/70 border border-slate-200/70 hover:border-sky-300 flex items-center justify-between text-left group transition-all"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs text-sky-700 font-bold">{std.code}</span>
                            <span className="text-xs font-bold text-slate-900 group-hover:text-sky-950 transition-colors">
                              {std.name}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">{std.outcome}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-sky-700 shrink-0 ml-2" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Auditor Courses */}
              {filteredCourses.length > 0 && (
                <div className="pt-5 space-y-2.5">
                  <span className="text-[11px] font-mono text-indigo-700 uppercase tracking-wider font-bold">
                    Exemplar Global Courses ({filteredCourses.length})
                  </span>
                  <div className="space-y-1.5">
                    {filteredCourses.map((crs) => (
                      <button
                        key={crs.id}
                        onClick={() => handleSelect("/training")}
                        className="w-full p-3 rounded-xl bg-slate-50 hover:bg-indigo-50/70 border border-slate-200/70 hover:border-indigo-300 flex items-center justify-between text-left group transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-indigo-100 text-indigo-700">
                            <GraduationCap className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-xs font-bold text-slate-900 group-hover:text-indigo-950 transition-colors">
                              {crs.title}
                            </span>
                            <div className="flex items-center gap-2 text-[10px] text-slate-500 font-mono mt-0.5">
                              <span>{crs.duration}</span>
                              <span>•</span>
                              <span>Pass {crs.passMark}</span>
                            </div>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-700 shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Public Documents */}
              {filteredDocs.length > 0 && (
                <div className="pt-5 space-y-2.5">
                  <span className="text-[11px] font-mono text-emerald-700 uppercase tracking-wider font-bold">
                    Public Document Library ({filteredDocs.length})
                  </span>
                  <div className="space-y-1.5">
                    {filteredDocs.map((doc) => (
                      <button
                        key={doc.id}
                        onClick={() => handleSelect("/resources/documents")}
                        className="w-full p-3 rounded-xl bg-slate-50 hover:bg-emerald-50/70 border border-slate-200/70 hover:border-emerald-300 flex items-center justify-between text-left group transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700">
                            <FileText className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="font-mono text-xs text-emerald-700 font-bold mr-2">{doc.code}</span>
                            <span className="text-xs font-medium text-slate-800 group-hover:text-emerald-950">
                              {doc.title}
                            </span>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono text-slate-500 font-semibold">{doc.size}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer hint */}
            <div className="p-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono font-medium">
              <span>B4Q Public Search Index</span>
              <span>Select items to navigate</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
