"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Clock,
  Award,
  CheckCircle2,
  Calendar,
  Layers,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Globe2,
  UserCheck,
  Monitor,
  FileText,
  Send,
  X,
  Sparkles,
  PhoneCall,
  Check
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { COURSES_DATA, CourseData } from "@/data/coursesData";

export default function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const course = COURSES_DATA.find((c) => c.slug === resolvedParams.slug);

  if (!course) {
    notFound();
  }

  // Accordion state for Day-by-Day curriculum
  const [openDayIndex, setOpenDayIndex] = useState<number | null>(0);

  // Mobile Bottom Sheet modal state
  const [isMobileSheetOpen, setIsMobileSheetOpen] = useState(false);

  // Registration Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    preferredFormat: course.format,
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-brand-navyDark text-slate-900 dark:text-slate-100 flex flex-col font-sans">
      <Header />

      <main className="flex-grow pt-24 pb-24">
        {/* HERO SECTION */}
        <section className="bg-brand-navy text-white py-14 lg:py-20 relative overflow-hidden border-b border-slate-800">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <Link
                  href="/training"
                  className="text-xs font-mono text-slate-400 hover:text-white transition-colors"
                >
                  Training Hub
                </Link>
                <span className="text-slate-600">/</span>
                <span className="text-xs font-mono text-brand-coral">{course.category}</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-emerald-300">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-emerald" />
                {course.accreditation}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white leading-tight">
                {course.title}
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed pt-2">
                {course.summary}
              </p>
            </div>
          </div>
        </section>

        {/* KEY FACTS BAR */}
        <section className="bg-white dark:bg-brand-cardDark border-b border-slate-200 dark:border-white/10 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 divide-x divide-slate-100 dark:divide-slate-800/80">
              <div className="pr-4 space-y-1">
                <div className="text-[11px] font-mono text-slate-400 uppercase">Duration</div>
                <div className="text-sm font-bold text-brand-navy dark:text-white flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-brand-coral" />
                  <span>{course.durationDays} Days ({course.durationHours} Hrs)</span>
                </div>
              </div>

              <div className="px-4 space-y-1">
                <div className="text-[11px] font-mono text-slate-400 uppercase">Pass Mark</div>
                <div className="text-sm font-bold text-brand-navy dark:text-white flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-emerald-500" />
                  <span>{course.passMark}% Proctored</span>
                </div>
              </div>

              <div className="px-4 space-y-1">
                <div className="text-[11px] font-mono text-slate-400 uppercase">Format</div>
                <div className="text-sm font-bold text-brand-navy dark:text-white flex items-center gap-1.5">
                  <Globe2 className="w-4 h-4 text-indigo-500" />
                  <span>{course.format}</span>
                </div>
              </div>

              <div className="px-4 space-y-1">
                <div className="text-[11px] font-mono text-slate-400 uppercase">Certificate</div>
                <div className="text-sm font-bold text-brand-navy dark:text-white flex items-center gap-1.5 truncate">
                  <FileText className="w-4 h-4 text-amber-500" />
                  <span className="truncate">Exemplar Global</span>
                </div>
              </div>

              <div className="pl-4 hidden lg:block space-y-1">
                <div className="text-[11px] font-mono text-slate-400 uppercase">Fee</div>
                <div className="text-sm font-bold text-brand-coral">On Request</div>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN BODY: LEFT CONTENT & STICKY RIGHT FORM */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* LEFT CONTENT COLUMN (8 Cols) */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* OVERVIEW & OBJECTIVES */}
              <div className="bg-white dark:bg-brand-cardDark rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-white/10 shadow-sm space-y-6">
                <h2 className="text-2xl font-serif font-bold text-brand-navy dark:text-white">
                  Course Overview & Objectives
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {course.overview}
                </p>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                  <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400">Key Learning Outcomes</h3>
                  <div className="space-y-2.5">
                    {course.objectives.map((obj, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-brand-emerald mt-0.5 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">{obj}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CURRICULUM DAY-BY-DAY ACCORDION */}
              <div className="bg-white dark:bg-brand-cardDark rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-white/10 shadow-sm space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-serif font-bold text-brand-navy dark:text-white">
                    Day-by-Day Curriculum
                  </h2>
                  <span className="text-xs font-mono text-slate-400">
                    {course.curriculum.length} Modules / {course.durationHours} Hours
                  </span>
                </div>

                <div className="space-y-3">
                  {course.curriculum.map((dayItem, idx) => {
                    const isOpen = openDayIndex === idx;
                    return (
                      <div
                        key={idx}
                        className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden transition-colors"
                      >
                        <button
                          onClick={() => setOpenDayIndex(isOpen ? null : idx)}
                          className="w-full text-left p-4 bg-slate-50 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800/80 flex items-center justify-between transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <span className="px-2.5 py-1 rounded-md bg-brand-navy text-white text-xs font-mono font-bold">
                              {dayItem.day}
                            </span>
                            <span className="text-sm font-bold text-brand-navy dark:text-white">
                              {dayItem.title}
                            </span>
                          </div>
                          {isOpen ? (
                            <ChevronUp className="w-4 h-4 text-slate-400" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-slate-400" />
                          )}
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="p-4 bg-white dark:bg-brand-cardDark border-t border-slate-100 dark:border-slate-800 space-y-2"
                            >
                              <div className="text-xs font-mono text-slate-400 uppercase">Covered Topics:</div>
                              <ul className="space-y-2">
                                {dayItem.topics.map((t, tidx) => (
                                  <li key={tidx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                                    <span className="text-brand-coral font-bold">•</span>
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

              {/* PREREQUISITES & ELIGIBILITY */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-brand-cardDark rounded-2xl p-6 border border-slate-200 dark:border-white/10 shadow-sm space-y-4">
                  <h3 className="text-lg font-serif font-bold text-brand-navy dark:text-white flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-brand-coral" /> Prerequisites
                  </h3>
                  <ul className="space-y-2">
                    {course.prerequisites.map((p, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <Check className="w-3.5 h-3.5 text-brand-coral mt-0.5 flex-shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white dark:bg-brand-cardDark rounded-2xl p-6 border border-slate-200 dark:border-white/10 shadow-sm space-y-4">
                  <h3 className="text-lg font-serif font-bold text-brand-navy dark:text-white flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-brand-emerald" /> Candidate Eligibility
                  </h3>
                  <ul className="space-y-2">
                    {course.eligibility.map((e, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <Check className="w-3.5 h-3.5 text-brand-emerald mt-0.5 flex-shrink-0" />
                        <span>{e}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* ONLINE SESSION REQUIREMENTS */}
              <div className="bg-white dark:bg-brand-cardDark rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-white/10 shadow-sm space-y-4">
                <h3 className="text-xl font-serif font-bold text-brand-navy dark:text-white flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-indigo-500" /> Virtual Classroom Requirements
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {course.onlineRequirements.map((req, idx) => (
                    <div key={idx} className="p-3 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-100 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* INTEGRATED OPTIONS TABLE (IF AVAILABLE) */}
              {course.integratedOptions && (
                <div className="bg-white dark:bg-brand-cardDark rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-white/10 shadow-sm space-y-6">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-brand-navy dark:text-white">
                      Integrated Management System (IMS) Options
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Combine this course with complementary ISO Lead Auditor standards to qualify as a multi-standard auditor.
                    </p>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="border-b border-slate-200 dark:border-slate-800 font-mono text-slate-400">
                          <th className="py-2.5 px-3">Option</th>
                          <th className="py-2.5 px-3">Included Standards</th>
                          <th className="py-2.5 px-3">Duration</th>
                          <th className="py-2.5 px-3">Description</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        {course.integratedOptions.map((opt, idx) => (
                          <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-900/40">
                            <td className="py-3 px-3 font-bold font-mono text-brand-coral">{opt.option}</td>
                            <td className="py-3 px-3 font-medium text-slate-800 dark:text-slate-200">
                              {opt.standards.join(" + ")}
                            </td>
                            <td className="py-3 px-3 font-mono">{opt.durationDays} Days ({opt.durationHours} Hrs)</td>
                            <td className="py-3 px-3 text-slate-500 dark:text-slate-400">{opt.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

            </div>

            {/* RIGHT COLUMN: STICKY DESKTOP ENQUIRY FORM (4 Cols) */}
            <div className="hidden lg:block lg:col-span-4">
              <div className="sticky top-28 bg-white dark:bg-brand-cardDark rounded-2xl p-6 border border-slate-200 dark:border-white/10 shadow-xl space-y-6">
                <div className="space-y-1 text-center">
                  <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest">Instant Registration</span>
                  <h3 className="text-xl font-serif font-bold text-brand-navy dark:text-white">
                    Register for {course.code}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Submit your details to receive full syllabus PDF, fee schedule, and batch dates.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="py-8 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold text-brand-navy dark:text-white">Registration Received!</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Our training coordinator will contact you via email ({formData.email}) within 4 business hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs font-semibold text-brand-coral hover:underline"
                    >
                      Submit Another Registration
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-brand-coral"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-brand-coral"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+44 7700 900000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-brand-coral"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Organisation / Company
                      </label>
                      <input
                        type="text"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-brand-coral"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Preferred Delivery Format
                      </label>
                      <select
                        value={formData.preferredFormat}
                        onChange={(e) => setFormData({ ...formData, preferredFormat: e.target.value as any })}
                        className="w-full px-3.5 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-brand-coral"
                      >
                        <option value="Online & Classroom">Virtual Online (Google Meet)</option>
                        <option value="Classroom">Classroom (London / Delhi / SG)</option>
                        <option value="Corporate In-House">Corporate In-House Team</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Message / Questions
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Any specific batch date or questions..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-brand-coral"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 px-4 rounded-xl bg-brand-coral hover:bg-brand-coralHover text-white text-xs font-semibold transition-colors shadow-lg flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Processing Registration...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Submit Registration Enquiry</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </section>
      </main>

      {/* MOBILE STICKY BOTTOM BAR & SLIDE-UP SHEET */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-brand-cardDark border-t border-slate-200 dark:border-white/10 p-4 shadow-2xl flex items-center justify-between">
        <div>
          <div className="text-xs font-bold text-brand-navy dark:text-white">{course.code}</div>
          <div className="text-[10px] text-slate-500 font-mono">{course.durationDays} Days · {course.format}</div>
        </div>
        <button
          onClick={() => setIsMobileSheetOpen(true)}
          className="px-5 py-2.5 rounded-xl bg-brand-coral text-white text-xs font-semibold shadow-lg hover:bg-brand-coralHover transition-colors flex items-center gap-1.5"
        >
          <span>Register / Enquire</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* MOBILE BOTTOM SHEET MODAL */}
      <AnimatePresence>
        {isMobileSheetOpen && (
          <div className="lg:hidden fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="w-full max-h-[90vh] overflow-y-auto bg-white dark:bg-brand-navyDark rounded-t-3xl p-6 space-y-6 shadow-2xl border-t border-white/20"
            >
              <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                <h3 className="text-lg font-serif font-bold text-brand-navy dark:text-white">
                  Register for {course.code}
                </h3>
                <button
                  onClick={() => setIsMobileSheetOpen(false)}
                  className="p-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {isSubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                  <h4 className="text-base font-bold">Enquiry Submitted!</h4>
                  <p className="text-xs text-slate-500">We will respond within 4 business hours.</p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setIsMobileSheetOpen(false);
                    }}
                    className="w-full py-2.5 bg-brand-coral text-white rounded-xl text-xs font-semibold"
                  >
                    Close Sheet
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border rounded-xl text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="email@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border rounded-xl text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1">Phone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+44..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border rounded-xl text-xs"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-brand-coral text-white rounded-xl text-xs font-semibold shadow-lg"
                  >
                    {isSubmitting ? "Submitting..." : "Confirm & Send Registration"}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
