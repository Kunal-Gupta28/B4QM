"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { GraduationCap, Clock, Award, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import { TrainingCourse } from "@/types";
import { Button } from "./Button";

interface CourseCardProps {
  course: TrainingCourse;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="bg-white dark:bg-brand-cardDark rounded-2xl p-6 border border-brand-border dark:border-white/10 shadow-soft hover:shadow-lg transition-all flex flex-col justify-between"
    >
      <div>
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold border border-emerald-500/20">
            <Award className="w-3.5 h-3.5" />
            {course.accreditation}
          </span>
          <span className="text-xs font-mono font-bold text-brand-coral bg-brand-coral/10 px-2.5 py-0.5 rounded-full border border-brand-coral/20">
            {course.standardCode}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="font-serif text-xl font-bold text-brand-navy dark:text-white mb-2 leading-snug">
          {course.title}
        </h3>
        <p className="text-xs text-brand-textBody dark:text-slate-300 leading-relaxed mb-4">
          {course.description}
        </p>

        {/* Course Fact Chips Grid */}
        <div className="grid grid-cols-2 gap-2 mb-6 text-xs">
          <div className="p-2.5 rounded-xl bg-brand-surfaceLight dark:bg-white/5 border border-brand-border/60 dark:border-white/5 flex items-center gap-2">
            <Clock className="w-4 h-4 text-brand-coral shrink-0" />
            <div>
              <span className="text-[10px] text-slate-400 font-mono block">Duration</span>
              <strong className="text-brand-navy dark:text-slate-200">{course.duration} ({course.hours})</strong>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-brand-surfaceLight dark:bg-white/5 border border-brand-border/60 dark:border-white/5 flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-indigo-500 shrink-0" />
            <div>
              <span className="text-[10px] text-slate-400 font-mono block">Pass Criteria</span>
              <strong className="text-brand-navy dark:text-slate-200">{course.passMark} Exam</strong>
            </div>
          </div>

          <div className="col-span-2 p-2.5 rounded-xl bg-brand-surfaceLight dark:bg-white/5 border border-brand-border/60 dark:border-white/5 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
            <div className="truncate">
              <span className="text-[10px] text-slate-400 font-mono block">Delivery Format</span>
              <strong className="text-brand-navy dark:text-slate-200 truncate">{course.format}</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 pt-4 border-t border-brand-border/60 dark:border-white/10">
        <Link href={`/training/${course.id}`} className="w-1/2">
          <Button variant="outline" size="sm" className="w-full justify-center">
            Syllabus
          </Button>
        </Link>
        <Link href="/contact" className="w-1/2">
          <Button variant="primary" size="sm" className="w-full justify-center" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
            Enquire
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};
