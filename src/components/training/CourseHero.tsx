"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";
import { CourseData } from "@/data/coursesData";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

interface CourseHeroProps {
  course: CourseData;
}

export function CourseHero({ course }: CourseHeroProps) {
  return (
    <section className="bg-[#251574] text-white py-14 lg:py-20 relative overflow-hidden border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl space-y-4">
          <Breadcrumbs
            items={[
              { label: "Auditor Training", href: "/training" },
              { label: course.title },
            ]}
          />

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-emerald-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
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
  );
}
