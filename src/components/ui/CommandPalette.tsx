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
        } else {
          // Open triggered from parent state
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
    if (!query) return ISO_STANDARDS;
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
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-navyDark/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-2xl bg-brand-navyDark text-slate-100 rounded-2xl shadow-2xl border border-white/20 overflow-hidden z-10 font-sans"
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-4 py-3.5 border-b border-white/10 bg-slate-900/90">
              <Search className="w-5 h-5 text-brand-coral shrink-0 mr-3" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search ISO standards, auditor courses, documents, or verify certificate..."
                className="w-full bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none"
              />
              {query ? (
                <button
                  onClick={() => setQuery("")}
                  className="p-1 text-slate-400 hover:text-white rounded-lg transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              ) : (
                <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono text-slate-400 bg-white/10 rounded border border-white/10">
                  ESC to exit
                </kbd>
              )}
            </div>

            {/* Content Results */}
            <div className="max-h-[60vh] overflow-y-auto p-4 space-y-6 divide-y divide-white/10">
              {/* Quick Action Bar */}
              <div className="space-y-2">
                <span className="text-[11px] font-mono text-brand-coral uppercase tracking-wider font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Quick Actions
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    onClick={() => handleSelect("/verify")}
                    className="p-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-left flex items-center justify-between group transition-all"
                  >
                    <div className="flex items-center gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-semibold text-emerald-300">Verify Certificate Registry</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => handleSelect("/get-a-quote")}
                    className="p-2.5 rounded-xl bg-brand-coral/10 hover:bg-brand-coral/20 border border-brand-coral/30 text-left flex items-center justify-between group transition-all"
                  >
                    <div className="flex items-center gap-2.5">
                      <Sparkles className="w-4 h-4 text-brand-coral" />
                      <span className="text-xs font-semibold text-brand-coral">Get Certification Quote</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-coral group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* ISO Standards */}
              {filteredStandards.length > 0 && (
                <div className="pt-4 space-y-2">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                    ISO Management Standards ({filteredStandards.length})
                  </span>
                  <div className="space-y-1.5">
                    {filteredStandards.map((std) => (
                      <button
                        key={std.id}
                        onClick={() => handleSelect(`/certification/${std.id}`)}
                        className="w-full p-2.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 flex items-center justify-between text-left group transition-all"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs text-brand-coral font-bold">{std.code}</span>
                            <span className="text-xs font-semibold text-white group-hover:text-brand-coral transition-colors">
                              {std.name}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">{std.outcome}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white shrink-0 ml-2" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Auditor Courses */}
              {filteredCourses.length > 0 && (
                <div className="pt-4 space-y-2">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                    Exemplar Global Courses ({filteredCourses.length})
                  </span>
                  <div className="space-y-1.5">
                    {filteredCourses.map((crs) => (
                      <button
                        key={crs.id}
                        onClick={() => handleSelect("/training")}
                        className="w-full p-2.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 flex items-center justify-between text-left group transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400">
                            <GraduationCap className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-xs font-semibold text-white group-hover:text-brand-coral transition-colors">
                              {crs.title}
                            </span>
                            <div className="flex items-center gap-2 text-[10px] text-slate-400 font-mono mt-0.5">
                              <span>{crs.duration}</span>
                              <span>•</span>
                              <span>Pass {crs.passMark}</span>
                            </div>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Public Documents */}
              {filteredDocs.length > 0 && (
                <div className="pt-4 space-y-2">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                    Public Document Library ({filteredDocs.length})
                  </span>
                  <div className="space-y-1.5">
                    {filteredDocs.map((doc) => (
                      <button
                        key={doc.id}
                        onClick={() => handleSelect("/resources/documents")}
                        className="w-full p-2.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 flex items-center justify-between text-left group transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                            <FileText className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="font-mono text-xs text-emerald-400 font-bold mr-2">{doc.code}</span>
                            <span className="text-xs font-medium text-slate-200 group-hover:text-white">
                              {doc.title}
                            </span>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono text-slate-400">{doc.size}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer hint */}
            <div className="p-3 bg-slate-950 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span>B4Q Public Search Index</span>
              <span>Select items to navigate</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
