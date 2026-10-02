"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldAlert,
  Home,
  Award,
  Search,
  ArrowRight,
  ShieldCheck,
  FileText,
  HelpCircle,
  Lock,
  Leaf,
  HeartPulse,
  Utensils,
} from "lucide-react";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ISO_STANDARDS } from "@/lib/data";

export default function NotFound() {
  const coreStandards = ISO_STANDARDS.slice(0, 5);

  const getStandardIcon = (iconName: string) => {
    switch (iconName) {
      case "Lock":
        return <Lock className="w-4 h-4 text-[#008AD8]" />;
      case "Leaf":
        return <Leaf className="w-4 h-4 text-emerald-600" />;
      case "Utensils":
        return <Utensils className="w-4 h-4 text-amber-600" />;
      case "HeartPulse":
        return <HeartPulse className="w-4 h-4 text-rose-500" />;
      default:
        return <ShieldCheck className="w-4 h-4 text-[#251574]" />;
    }
  };

  return (
    <div className="w-full min-h-[100dvh] max-w-[100dvw] bg-white text-slate-900 flex flex-col font-sans selection:bg-[#251574] selection:text-white">
      <Header />

      <main className="flex-1 w-full max-w-full py-[8dvh] md:py-[12dvh] bg-gradient-to-b from-sky-50/50 via-white to-slate-50 relative overflow-hidden flex items-center justify-center">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* 404 Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-[#FF4D5A] text-xs font-mono font-bold uppercase tracking-wider shadow-2xs">
              <ShieldAlert className="w-4 h-4 text-[#FF4D5A]" />
              <span>Error 404 — Page Not Found</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl font-extrabold text-[#251574] tracking-tight">
                Standard or Page Not Found
              </h1>
              <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
                The ISO standard specification, public document, or page URL you requested is unavailable or has been relocated to our updated standards hub.
              </p>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <Link href="/">
                <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#251574] hover:bg-[#1a0e54] text-white text-xs font-bold shadow-md transition-all">
                  <Home className="w-4 h-4" />
                  <span>Return to Home</span>
                </button>
              </Link>

              <Link href="/standards">
                <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#008AD8] hover:bg-[#0077BC] text-white text-xs font-bold shadow-md transition-all">
                  <Award className="w-4 h-4" />
                  <span>View 5 Core ISO Standards</span>
                </button>
              </Link>

              <Link href="/verify">
                <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sky-50 hover:bg-sky-100 border border-sky-200 text-[#008AD8] text-xs font-bold transition-all">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verify Certificate</span>
                </button>
              </Link>

              <Link href="/get-a-quote">
                <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF4D5A] hover:bg-[#E03E4B] text-white text-xs font-bold shadow-md transition-all">
                  <span>Get Certification Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>

            {/* Quick Links to 5 Core Standards */}
            <div className="pt-10 border-t border-slate-200/80 text-left max-w-3xl mx-auto">
              <h2 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider text-center mb-4">
                Explore Available ISO Standards Scope
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {coreStandards.map((std) => (
                  <Link
                    key={std.id}
                    href={`/standards/${std.id}`}
                    className="p-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-slate-300 transition-all group flex items-start gap-3 shadow-2xs"
                  >
                    <div className="p-2 rounded-lg bg-slate-100 border border-slate-200 group-hover:scale-105 transition-transform shrink-0">
                      {getStandardIcon(std.iconName)}
                    </div>
                    <div className="min-w-0">
                      <span className="font-mono text-xs font-bold text-[#008AD8] block">
                        {std.code}
                      </span>
                      <h3 className="text-xs font-bold text-slate-900 group-hover:text-[#FF4D5A] transition-colors truncate">
                        {std.name}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
