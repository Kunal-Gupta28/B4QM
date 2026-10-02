"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AlertTriangle, RefreshCw, Home, Mail } from "lucide-react";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("App Router Error Caught:", error);
  }, [error]);

  return (
    <div className="w-full min-h-[100dvh] max-w-[100dvw] bg-white text-slate-900 flex flex-col font-sans selection:bg-[#251574] selection:text-white">
      <Header />

      <main className="flex-1 w-full max-w-full py-[8dvh] md:py-[12dvh] bg-gradient-to-b from-rose-50/50 via-white to-slate-50 relative overflow-hidden flex items-center justify-center">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

        <div className="w-full max-w-xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6"
          >
            {/* Error Icon Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 border border-rose-200 text-[#FF4D5A] text-xs font-mono font-bold uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4 text-[#FF4D5A]" />
              <span>Application Error</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#251574]">
                Something went wrong
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
                An unexpected technical error occurred while loading this page. Please try refreshing or returning to the home page.
              </p>
            </div>

            {error?.digest && (
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] font-mono text-slate-500">
                Reference Code: <span className="font-bold text-slate-700">{error.digest}</span>
              </div>
            )}

            {/* Recovery Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={() => reset()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF4D5A] hover:bg-[#E03E4B] text-white text-xs font-bold shadow-md transition-all cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Try Reloading Page</span>
              </button>

              <Link href="/">
                <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 text-xs font-bold transition-all">
                  <Home className="w-4 h-4" />
                  <span>Return to Home</span>
                </button>
              </Link>
            </div>

            <div className="pt-4 border-t border-slate-100 text-[11px] text-slate-500">
              Need immediate support? Contact our global team at{" "}
              <a href="mailto:info@b4qm.com" className="text-[#008AD8] font-semibold hover:underline">
                info@b4qm.com
              </a>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
