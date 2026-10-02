"use client";

import React from "react";
import { CheckCircle2, Send } from "lucide-react";
import { CourseData } from "@/data/coursesData";

export interface CourseFormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  preferredFormat: string;
  message: string;
}

interface CourseRegistrationFormProps {
  course: CourseData;
  formData: CourseFormData;
  setFormData: React.Dispatch<React.SetStateAction<CourseFormData>>;
  isSubmitting: boolean;
  isSubmitted: boolean;
  setIsSubmitted: (val: boolean) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function CourseRegistrationForm({
  course,
  formData,
  setFormData,
  isSubmitting,
  isSubmitted,
  setIsSubmitted,
  onSubmit,
}: CourseRegistrationFormProps) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xl space-y-6">
      <div className="space-y-1 text-center">
        <span className="text-[10px] font-mono text-emerald-600 uppercase tracking-widest font-bold">Instant Registration</span>
        <h3 className="text-xl font-serif font-bold text-[#251574]">
          Register for {course.code}
        </h3>
        <p className="text-xs text-slate-500">
          Submit your details to receive full syllabus PDF, fee schedule, and batch dates.
        </p>
      </div>

      {isSubmitted ? (
        <div className="py-8 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h4 className="text-base font-bold text-[#251574]">Registration Received!</h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            Our training coordinator will contact you via email ({formData.email}) within 4 business hours.
          </p>
          <button
            type="button"
            onClick={() => setIsSubmitted(false)}
            className="text-xs font-semibold text-[#FF4D5A] hover:underline"
          >
            Submit Another Registration
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-[#251574] mb-1">
              Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Sarah Jenkins"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="form-input-clean"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#251574] mb-1">
              Work Email *
            </label>
            <input
              type="email"
              required
              placeholder="sarah@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="form-input-clean"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#251574] mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              required
              placeholder="+44 7700 900000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="form-input-clean"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#251574] mb-1">
              Organisation / Company
            </label>
            <input
              type="text"
              placeholder="Company Name"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="form-input-clean"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#251574] mb-1">
              Preferred Delivery Format
            </label>
            <select
              value={formData.preferredFormat}
              onChange={(e) => setFormData({ ...formData, preferredFormat: e.target.value })}
              className="form-select-clean"
            >
              <option value="Online & Classroom">Virtual Online (Google Meet)</option>
              <option value="Classroom">Classroom (London / Delhi / SG)</option>
              <option value="Corporate In-House">Corporate In-House Team</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#251574] mb-1">
              Message / Questions
            </label>
            <textarea
              rows={3}
              placeholder="Any specific batch date or questions..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="form-input-clean"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 px-4 rounded-xl bg-[#FF4D5A] hover:bg-[#E63946] text-white text-xs font-semibold transition-colors shadow-lg flex items-center justify-center gap-2 cursor-pointer"
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
  );
}
