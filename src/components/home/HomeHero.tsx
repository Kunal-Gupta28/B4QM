"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import { CertificateCard } from "@/components/ui/CertificateCard";

export function HomeHero() {
  return (
    <section className="relative w-full max-w-full pt-[8dvh] pb-[6dvh] md:pt-[12dvh] md:pb-[8dvh] bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
        <div className="absolute top-12 left-10 w-[40%] h-[40%] bg-[#251574]/10 rounded-full blur-3xl" />
        <div className="absolute top-32 right-10 w-[40%] h-[40%] bg-[#008AD8]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-1/3 w-[35%] h-[35%] bg-[#FF4D5A]/10 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-[4%] sm:px-[5%] lg:px-[6%] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-semibold text-slate-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[#251574] font-bold">Exemplar Global</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-600">Authorised ISO Certification Body</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              ISO Certification That Stands Up To{" "}
              <span className="bg-gradient-to-r from-[#251574] via-[#008AD8] to-[#FF4D5A] bg-clip-text text-transparent">
                Global Scrutiny.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl">
              Accredited third-party ISO audit & certification services across UK, India, USA & Singapore. Impartial, transparent, and trusted by global enterprises.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/get-a-quote"
                className="px-8 py-4 bg-[#FF4D5A] hover:bg-rose-600 text-white font-bold rounded-2xl shadow-lg shadow-rose-500/20 hover:shadow-xl hover:scale-[1.02] transition-all flex items-center gap-2"
              >
                <span>Get Instant Audit Quote</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="/verify"
                className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 font-semibold rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center gap-2"
              >
                <Search className="w-4 h-4 text-[#008AD8]" />
                <span>Verify Certificate</span>
              </Link>
            </div>

            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-[#251574]">4 Global</div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">Offices (UK, IN, US, SG)</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-[#008AD8]">5 ISO</div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">Accredited Standards</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-emerald-600">100%</div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">Impartiality Audits</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            <div className="relative z-10 w-full max-w-sm sm:max-w-md">
              <CertificateCard
                certificate={{
                  certNumber: "B4Q-ISMS-849201",
                  clientName: "Global CyberSec Enterprises Ltd",
                  standard: "ISO 27001:2022",
                  scope: "Provision of Cloud Managed Security Services, SOC Monitoring, and Information Security Governance.",
                  issueDate: "2024-01-15",
                  expiryDate: "2027-01-14",
                  status: "Valid",
                  country: "United Kingdom",
                  sites: ["London HQ", "Manchester DC"],
                  type: "Organisation",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
