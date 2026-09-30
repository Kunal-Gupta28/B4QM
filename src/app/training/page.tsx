"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Search,
  Clock,
  Award,
  CheckCircle2,
  Calendar,
  Layers,
  ArrowRight,
  BookOpen,
  ShieldCheck,
  Check,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";
import { COURSES_DATA, CourseData } from "@/data/coursesData";

export default function TrainingHubPage() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedFormat, setSelectedFormat] = useState<string>("All");
  const [selectedDuration, setSelectedDuration] = useState<string>("All");

  const filteredCourses = useMemo(() => {
    return COURSES_DATA.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.standard.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.summary.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || course.category === selectedCategory;

      const matchesFormat =
        selectedFormat === "All" || course.format === selectedFormat;

      const matchesDuration =
        selectedDuration === "All" ||
        (selectedDuration === "2 Days" && course.durationDays === 2) ||
        (selectedDuration === "4 Days" && course.durationDays === 4) ||
        (selectedDuration === "5 Days" && course.durationDays === 5);

      return matchesSearch && matchesCategory && matchesFormat && matchesDuration;
    });
  }, [searchQuery, selectedCategory, selectedFormat, selectedDuration]);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#251574] selection:text-white">
      <Header onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Hero */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-b from-sky-50/60 via-white to-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-[#008AD8] text-xs font-bold font-mono"
          >
            <Award className="w-4 h-4 text-[#008AD8]" />
            <span>Exemplar Global Authorised Training Provider</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#251574] tracking-tight"
          >
            Auditor Training & Qualifications
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Advance your auditing career with globally recognized Lead Auditor, Internal Auditor, GDPR DPO, and Six Sigma certifications.
          </motion.p>
        </div>
      </section>

      {/* Filters & Search Bar */}
      <section className="bg-slate-100 py-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search course title or code..."
                className="w-full bg-slate-50 text-slate-900 placeholder-slate-400 text-xs pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#008AD8] font-medium"
              />
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-slate-50 text-slate-700 text-xs px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#008AD8] font-semibold"
              >
                <option value="All">All Categories</option>
                <option value="Lead Auditor">Lead Auditor</option>
                <option value="Internal Auditor">Internal Auditor</option>
                <option value="Professional & DPO">Professional & DPO</option>
              </select>

              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="bg-slate-50 text-slate-700 text-xs px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#008AD8] font-semibold"
              >
                <option value="All">All Durations</option>
                <option value="2 Days">2 Days (16 Hrs)</option>
                <option value="4 Days">4 Days (32 Hrs)</option>
                <option value="5 Days">5 Days (40 Hrs)</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <main className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 p-6 flex flex-col justify-between transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-sky-50 text-[#008AD8] border border-sky-200">
                    {course.code}
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-semibold">
                    {course.durationDays} Days ({course.durationHours} Hrs)
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#251574] leading-snug">{course.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">{course.summary}</p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-mono">Pass Mark: <strong className="text-emerald-700">{course.passMark}%</strong></span>
                <Link href={`/training/${course.slug}`}>
                  <button className="px-4 py-2 rounded-full bg-[#FF4D5A] hover:bg-[#E63946] text-white font-bold text-xs shadow-sm transition-colors flex items-center gap-1">
                    <span>Syllabus</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
      <WhatsAppWidget />
      <CommandPalette isOpen={commandPaletteOpen} onClose={() => setCommandPaletteOpen(false)} />
    </div>
  );
}
