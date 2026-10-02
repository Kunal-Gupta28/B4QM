"use client";

import React, { useState, use } from "react";
import { notFound } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  Award,
  CheckCircle2,
  Globe2,
  UserCheck,
  Monitor,
  FileText,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  Check,
  X,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { COURSES_DATA } from "@/data/coursesData";
import { CourseHero } from "@/components/training/CourseHero";
import { CourseRegistrationForm, CourseFormData } from "@/components/training/CourseRegistrationForm";

export default function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const course = COURSES_DATA.find((c) => c.slug === resolvedParams.slug);

  if (!course) {
    notFound();
  }

  const [openDayIndex, setOpenDayIndex] = useState<number | null>(0);
  const [isMobileSheetOpen, setIsMobileSheetOpen] = useState(false);

  const [formData, setFormData] = useState<CourseFormData>({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    preferredFormat: course.format,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <Header />

      <main className="flex-grow pt-20 pb-24">
        <CourseHero course={course} />

        {/* KEY FACTS BAR */}
        <section className="bg-white border-b border-slate-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 divide-x divide-slate-100">
              <div className="pr-4 space-y-1">
                <div className="text-[11px] font-mono text-slate-400 uppercase">Duration</div>
                <div className="text-sm font-bold text-[#251574] flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#FF4D5A]" />
                  <span>{course.durationDays} Days ({course.durationHours} Hrs)</span>
                </div>
              </div>

              <div className="px-4 space-y-1">
                <div className="text-[11px] font-mono text-slate-400 uppercase">Pass Mark</div>
                <div className="text-sm font-bold text-[#251574] flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-emerald-500" />
                  <span>{course.passMark}% Proctored</span>
                </div>
              </div>

              <div className="px-4 space-y-1">
                <div className="text-[11px] font-mono text-slate-400 uppercase">Format</div>
                <div className="text-sm font-bold text-[#251574] flex items-center gap-1.5">
                  <Globe2 className="w-4 h-4 text-indigo-500" />
                  <span>{course.format}</span>
                </div>
              </div>

              <div className="px-4 space-y-1">
                <div className="text-[11px] font-mono text-slate-400 uppercase">Certificate</div>
                <div className="text-sm font-bold text-[#251574] flex items-center gap-1.5 truncate">
                  <FileText className="w-4 h-4 text-amber-500" />
                  <span className="truncate">Exemplar Global</span>
                </div>
              </div>

              <div className="pl-4 hidden lg:block space-y-1">
                <div className="text-[11px] font-mono text-slate-400 uppercase">Fee</div>
                <div className="text-sm font-bold text-[#FF4D5A]">On Request</div>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN BODY */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* LEFT CONTENT COLUMN */}
            <div className="lg:col-span-8 space-y-12">
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
                <h2 className="text-2xl font-serif font-bold text-[#251574]">Course Overview & Objectives</h2>
                <p className="text-sm text-slate-600 leading-relaxed">{course.overview}</p>

                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400">Key Learning Outcomes</h3>
                  <div className="space-y-2.5">
                    {course.objectives.map((obj, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                        <span className="text-xs sm:text-sm text-slate-700 leading-relaxed">{obj}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CURRICULUM ACCORDION */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-serif font-bold text-[#251574]">Day-by-Day Curriculum</h2>
                  <span className="text-xs font-mono text-slate-400">
                    {course.curriculum.length} Modules / {course.durationHours} Hours
                  </span>
                </div>

                <div className="space-y-3">
                  {course.curriculum.map((dayItem, idx) => {
                    const isOpen = openDayIndex === idx;
                    return (
                      <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
                        <button
                          type="button"
                          onClick={() => setOpenDayIndex(isOpen ? null : idx)}
                          className="w-full text-left p-4 bg-slate-50 hover:bg-slate-100 flex items-center justify-between transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <span className="px-2.5 py-1 rounded-md bg-[#251574] text-white text-xs font-mono font-bold">
                              {dayItem.day}
                            </span>
                            <span className="text-sm font-bold text-[#251574]">{dayItem.title}</span>
                          </div>
                          {isOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="p-4 bg-white border-t border-slate-100 space-y-2"
                            >
                              <div className="text-xs font-mono text-slate-400 uppercase">Covered Topics:</div>
                              <ul className="space-y-2">
                                {dayItem.topics.map((t, tidx) => (
                                  <li key={tidx} className="flex items-start gap-2 text-xs text-slate-600">
                                    <span className="text-[#FF4D5A] font-bold">•</span>
                                    <span>{t}</span>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* PREREQUISITES */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
                  <h3 className="text-lg font-serif font-bold text-[#251574] flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-[#FF4D5A]" /> Prerequisites
                  </h3>
                  <ul className="space-y-2">
                    {course.prerequisites.map((p, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-[#FF4D5A] mt-0.5 shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
                  <h3 className="text-lg font-serif font-bold text-[#251574] flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-emerald-600" /> Eligibility
                  </h3>
                  <ul className="space-y-2">
                    {course.eligibility.map((e, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                        <span>{e}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="hidden lg:block lg:col-span-4">
              <div className="sticky top-28">
                <CourseRegistrationForm
                  course={course}
                  formData={formData}
                  setFormData={setFormData}
                  isSubmitting={isSubmitting}
                  isSubmitted={isSubmitted}
                  setIsSubmitted={setIsSubmitted}
                  onSubmit={handleSubmit}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* MOBILE STICKY BAR */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 p-4 shadow-2xl flex items-center justify-between">
        <div>
          <div className="text-xs font-bold text-[#251574]">{course.code}</div>
          <div className="text-[10px] text-slate-500 font-mono">{course.durationDays} Days · {course.format}</div>
        </div>
        <button
          onClick={() => setIsMobileSheetOpen(true)}
          className="px-5 py-2.5 rounded-xl bg-[#FF4D5A] text-white text-xs font-semibold shadow-lg hover:bg-[#E63946] transition-colors flex items-center gap-1.5"
        >
          <span>Register / Enquire</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <Footer />
    </div>
  );
}
