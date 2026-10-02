"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RefreshCw, ArrowLeft, Mail, Phone, Clock, AlertCircle, CheckCircle2 } from "lucide-react";

export default function RefundPolicyPage() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-slate-50 text-slate-900 w-full max-w-[100dvw]">
      <Header />

      {/* Hero Banner */}
      <section className="bg-[#251574] py-16 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#008AD8]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-sky-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="p-2.5 rounded-xl bg-white/10 border border-white/20 text-sky-300">
              <RefreshCw className="w-6 h-6" />
            </span>
            <span className="text-xs font-mono font-bold tracking-widest text-sky-300 uppercase">
              Financial & Service Guarantees
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Return & Refund Policy
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-2xl leading-relaxed">
            Transparent refund criteria and request processing terms for ISO certification, audit processing, and training enrolment services.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-12 lg:py-16">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200 shadow-sm space-y-10 text-slate-700 leading-relaxed text-sm sm:text-base">
            
            {/* Header meta */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-6">
              <div className="text-xs text-slate-500 font-mono">
                Policy Revision: <strong className="text-slate-900">B4Q-REFUND-2026</strong>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">
                Active Policy
              </span>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
              <div className="text-xs font-mono text-slate-500">Last Updated: March 2018 (Re-verified 2026)</div>
              <p className="text-slate-800 font-medium">
                Thank you for visiting <strong>b4qm.com</strong> & <strong>qccertification.com</strong>. If, for any reason, you are not completely satisfied with our certification services, we invite you to review our policy on refunds and returns. The following terms are applicable for any services or products purchased with us.
              </p>
            </div>

            {/* Conditions for Returns ISO Certificates */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#251574] flex items-center gap-2">
                <span>Conditions for Returns (ISO Certificates & Audit Fees)</span>
              </h2>
              
              <p>In order for a Certificate or service booking to be eligible for a return/refund, please make sure that:</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-2xl bg-sky-50 border border-sky-100 flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#008AD8] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#251574] text-sm">7-Day Return Window</h4>
                    <p className="text-xs text-slate-600 mt-1">
                      The Certificate or audit service was purchased within the last 7 calendar days.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-sky-50 border border-sky-100 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#251574] text-sm">Original Condition</h4>
                    <p className="text-xs text-slate-600 mt-1">
                      The Certificate or documentation remains un-issued, un-surrendered, and in original packaging/digital state.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
                  <AlertCircle className="w-5 h-5 text-amber-600" />
                  <span>Refund Execution Terms & Processing Window</span>
                </div>
                <ul className="list-disc pl-5 text-xs sm:text-sm text-amber-900 space-y-1">
                  <li>We reserve the right to refuse returns of any client that does not meet the above return conditions in our sole discretion.</li>
                  <li><strong>Only 50% of the total amount will be refunded</strong> to cover mandatory administrative setup, IAF accreditation registering fees, and preliminary assessment allocation.</li>
                  <li>The refunded credit amount will be transferred directly to the customer&rsquo;s verified bank account within <strong>5 to 7 working days</strong>.</li>
                </ul>
              </div>
            </section>

            {/* Contact Us */}
            <section className="space-y-4 pt-6 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#251574]">
                Contact Us Regarding Refunds
              </h2>
              <p>
                If you have any questions or wish to initiate a refund under our Returns & Refund Policy, please reach out to our Finance & Audit Desk:
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="mailto:info@b4qm.com"
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#008AD8] transition-all flex items-center gap-3 group text-xs sm:text-sm font-semibold"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#008AD8] text-white flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[11px] font-mono">Official Email</span>
                    <span className="text-[#251574] font-bold group-hover:text-[#008AD8]">info@b4qm.com / info@qccertification.com</span>
                  </div>
                </a>

                <a
                  href="tel:09899715540"
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#008AD8] transition-all flex items-center gap-3 group text-xs sm:text-sm font-semibold"
                >
                  <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[11px] font-mono">Finance Desk</span>
                    <span className="text-[#251574] font-bold group-hover:text-emerald-700">098997 15540</span>
                  </div>
                </a>
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
