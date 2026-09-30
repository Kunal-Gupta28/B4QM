"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle2,
  AlertCircle,
  Globe,
  ArrowRight
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";

const OFFICES = [
  {
    country: "United Kingdom 🇬🇧",
    city: "London",
    company: "B4Q Management Ltd.",
    address: "128 City Road, London EC1V 2NX",
    phone: "+44 7721156196",
    email: "info@b4qm.com",
    timezone: "Europe/London",
    timeFormat: "GMT/BST"
  },
  {
    country: "India 🇮🇳",
    city: "Delhi",
    company: "B4Q Management Ltd.",
    address: "Kh.No. 37/15, 1st Floor, Gali No-1, Saboli Road, Sanjay Colony, Narela, Delhi-110040",
    phone: "+91 8851447640",
    email: "info@b4qm.com",
    timezone: "Asia/Kolkata",
    timeFormat: "IST (+5:30)"
  },
  {
    country: "Singapore 🇸🇬",
    city: "Singapore",
    company: "B4Q Management Pte. Ltd.",
    address: "100 Peck Seah Street, #08-14 PS100, Singapore 079333",
    phone: "+65 6700 8900",
    email: "info@b4qm.com",
    timezone: "Asia/Singapore",
    timeFormat: "SGT (+8:00)"
  },
  {
    country: "United States 🇺🇸",
    city: "Delaware",
    company: "B4Q Management LLC",
    address: "16192 Coastal Highway, Lewes, DE 19958",
    phone: "+1 (302) 404 3800",
    email: "info@b4qm.com",
    timezone: "America/New_York",
    timeFormat: "EST (-5:00)"
  }
];

export default function ContactPage() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiryType: "Certification",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#251574] selection:text-white">
      <Header onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Hero */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-20 bg-gradient-to-b from-sky-50/60 via-white to-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-[#008AD8] text-xs font-bold font-mono"
          >
            <Mail className="w-4 h-4 text-[#008AD8]" />
            <span>Global Contact & Office Registry</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-serif font-bold text-[#251574] tracking-tight"
          >
            Contact B4Q Management
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
          >
            Connect with our certification auditors, Exemplar Global training tutors, or global compliance offices in London, Delhi, Singapore, and Delaware.
          </motion.p>
        </div>
      </section>

      {/* Main Form & Offices Split Layout */}
      <main className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Enquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl space-y-6">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-xl font-bold text-[#251574]">Send an Enquiry</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block font-bold text-slate-900 mb-1">Full Name *</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. David Miller"
                      className="w-full bg-slate-50 text-slate-900 text-sm px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#008AD8]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-900 mb-1">Email Address *</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="david@company.com"
                      className="w-full bg-slate-50 text-slate-900 text-sm px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#008AD8]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block font-bold text-slate-900 mb-1">Phone Number</label>
                    <input
                      type="text"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+44 7000 000000"
                      className="w-full bg-slate-50 text-slate-900 text-sm px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#008AD8]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-900 mb-1">Enquiry Category</label>
                    <select
                      value={formData.enquiryType}
                      onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                      className="w-full bg-slate-50 text-slate-800 text-xs px-3 py-3 rounded-xl border border-slate-200 focus:outline-none"
                    >
                      <option value="Certification">ISO Certification Quote</option>
                      <option value="Training">Exemplar Global Training Course</option>
                      <option value="Verification">Certificate Verification Query</option>
                      <option value="Complaints">Complaint or Decision Appeal</option>
                      <option value="Other">General Enquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-900 text-xs mb-1">Message Detail *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about your audit scope, standard requirements, or course dates..."
                    className="w-full bg-slate-50 text-slate-900 text-xs px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#008AD8]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#FF4D5A] hover:bg-[#E63946] text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Message</span>
                </button>
              </form>
            ) : (
              <div className="py-8 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-xl font-bold text-[#251574]">Enquiry Received</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Thank you, {formData.name}. Our regional office team will review your message and respond within 1 business day.
                </p>
              </div>
            )}

            {/* Complaints & Appeals Callout */}
            <div className="pt-4 border-t border-slate-100 p-4 rounded-xl bg-slate-50 text-xs text-slate-600 space-y-1">
              <strong className="text-slate-900 block font-bold">Formal Appeals & Impartiality Complaints Path:</strong>
              <p>For independent appeals regarding certification decisions, please refer to Document D (<Link href="/resources/documents" className="text-[#008AD8] underline">Complaints & Appeals Procedure</Link>).</p>
            </div>
          </div>

          {/* 4 Global Offices */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-xl font-bold text-[#251574]">Our Four Global Hubs</h2>
            <div className="space-y-4">
              {OFFICES.map((off) => (
                <div key={off.country} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <strong className="text-sm font-bold text-slate-900">{off.country}</strong>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-sky-50 text-[#008AD8] border border-sky-200">
                      {off.timeFormat}
                    </span>
                  </div>
                  <p className="text-slate-600">{off.address}</p>
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-slate-700 font-mono text-[11px]">
                    <span>📞 {off.phone}</span>
                    <span>✉️ {off.email}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
      <WhatsAppWidget />
      <CommandPalette isOpen={commandPaletteOpen} onClose={() => setCommandPaletteOpen(false)} />
    </div>
  );
}
