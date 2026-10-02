"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Search,
  ChevronDown,
  Menu,
  X,
  Lock,
  Leaf,
  Utensils,
  UserCheck,
  Activity,
  Server,
  GraduationCap,
  FileCheck,
  Award,
  ArrowRight,
  ExternalLink,
  Building2,
  Globe,
  Layers,
  HeartPulse
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ISO_STANDARDS } from "@/lib/data";

interface HeaderProps {
  onOpenCommandPalette?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCommandPalette }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<"certification" | "training" | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const featuredStandards = ISO_STANDARDS.filter((s) => s.featured).slice(0, 8);

  const getStandardIcon = (iconName: string) => {
    switch (iconName) {
      case "Lock":
        return <Lock className="w-4 h-4 text-[#008AD8]" />;
      case "Leaf":
        return <Leaf className="w-4 h-4 text-emerald-600" />;
      case "Utensils":
        return <Utensils className="w-4 h-4 text-amber-600" />;
      case "UserCheck":
        return <UserCheck className="w-4 h-4 text-indigo-600" />;
      case "Activity":
        return <Activity className="w-4 h-4 text-[#FF4D5A]" />;
      case "Server":
        return <Server className="w-4 h-4 text-cyan-600" />;
      case "HeartPulse":
        return <HeartPulse className="w-4 h-4 text-rose-500" />;
      default:
        return <ShieldCheck className="w-4 h-4 text-[#251574]" />;
    }
  };

  return (
    <>
      {/* Main Light Glass Header */}
      <header
        className={`sticky top-0 z-40 w-full max-w-full transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm"
            : "py-4 bg-white border-b border-slate-200/80"
        }`}
      >
        <div className="w-full max-w-full px-4 sm:px-8 lg:px-12 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center">
              <img
                src="/logo.jpg"
                alt="B4Q Management Ltd Logo"
                className="h-12 w-auto object-contain rounded-md group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex flex-col border-l border-slate-200 pl-3">
              <span className="font-serif text-lg font-bold tracking-tight text-[#251574] leading-none">
                B4Q <span className="text-[#008AD8] font-sans font-normal text-xs">Management</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-1" onMouseLeave={() => setActiveMenu(null)}>
            
            {/* ISO Standards Mega Menu */}
            <div className="relative" onMouseEnter={() => setActiveMenu("certification")}>
              <button
                className={`flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
                  activeMenu === "certification" ? "bg-slate-100 text-[#251574]" : "text-slate-700 hover:text-[#251574] hover:bg-slate-100"
                }`}
              >
                ISO Standards
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMenu === "certification" ? "rotate-180 text-[#FF4D5A]" : ""}`} />
              </button>

              {/* Clean, Compact Mega Menu Dropdown with relative dvh units */}
              <AnimatePresence>
                {activeMenu === "certification" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 w-[780px] max-h-[72dvh] overflow-y-auto bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 mt-2 text-slate-900 grid grid-cols-12 gap-6 z-50"
                  >
                    {/* Left Column: Featured Core ISO Standards (2-column compact grid) */}
                    <div className="col-span-8 space-y-4">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                        <span className="text-xs font-mono font-bold text-[#251574] uppercase tracking-wider">
                          Core ISO Standards Scope
                        </span>
                        <Link href="/certification" className="text-[11px] font-bold text-[#008AD8] hover:underline">
                          View All 5 Standards →
                        </Link>
                      </div>

                      <div className="grid grid-cols-2 gap-2.5">
                        {featuredStandards.map((std) => (
                          <Link
                            key={std.id}
                            href={`/certification/${std.id}`}
                            className="p-2.5 rounded-xl hover:bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all group flex items-start gap-2.5"
                          >
                            <div className="p-2 rounded-lg bg-slate-100 border border-slate-200 group-hover:scale-105 transition-transform shrink-0">
                              {getStandardIcon(std.iconName)}
                            </div>
                            <div className="min-w-0">
                              <div className="flex items-center gap-1.5">
                                <span className="font-mono text-[11px] font-bold text-[#008AD8] truncate">{std.code}</span>
                                {std.badge && (
                                  <span className="text-[9px] px-1 py-0.5 rounded bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200 shrink-0 whitespace-nowrap">
                                    {std.badge}
                                  </span>
                                )}
                              </div>
                              <h4 className="text-xs font-bold text-slate-900 group-hover:text-[#FF4D5A] transition-colors truncate">
                                {std.name}
                              </h4>
                            </div>
                          </Link>
                        ))}
                      </div>

                      <div className="pt-2 border-t border-slate-100">
                        <Link
                          href="/certification"
                          className="w-full py-2 bg-slate-100 hover:bg-[#251574] hover:text-white text-slate-800 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2"
                        >
                          <span>Explore ISO Standards Catalog</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>

                    {/* Right Column: Guidance Callout */}
                    <div className="col-span-4 bg-gradient-to-br from-sky-50 to-slate-50 p-5 rounded-2xl border border-sky-200 flex flex-col justify-between">
                      <div>
                        <div className="w-9 h-9 rounded-xl bg-[#008AD8] text-white flex items-center justify-center mb-3 shadow-sm">
                          <Building2 className="w-5 h-5" />
                        </div>
                        <h4 className="text-sm font-bold text-[#251574] mb-1">Unsure which standard fits?</h4>
                        <p className="text-xs text-slate-600 leading-relaxed mb-4">
                          Speak with B4Q accredited lead auditors to analyze your sector, risk profile, and audit scope.
                        </p>
                      </div>
                      <Link href="/get-a-quote">
                        <button className="w-full px-4 py-2.5 rounded-xl bg-[#008AD8] hover:bg-[#0077BC] text-white text-xs font-bold shadow-sm transition-colors flex items-center justify-between">
                          <span>Request Advice</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </Link>
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Direct Link: Auditor Training */}
            <Link
              href="/training"
              className="inline-flex items-center justify-center text-center px-4 py-2 text-sm font-semibold text-slate-700 hover:text-[#251574] rounded-full hover:bg-slate-100 transition-colors"
            >
              Auditor Training
            </Link>

            {/* RENAMED LINK: Industries We Serve */}
            <Link
              href="/sectors"
              className="inline-flex items-center justify-center text-center px-4 py-2 text-sm font-semibold text-slate-700 hover:text-[#251574] rounded-full hover:bg-slate-100 transition-colors"
            >
              Industries We Serve
            </Link>

            <Link href="/about" className="inline-flex items-center justify-center text-center px-4 py-2 text-sm font-semibold text-slate-700 hover:text-[#251574] rounded-full hover:bg-slate-100 transition-colors">
              About
            </Link>
            <Link href="/resources/documents" className="inline-flex items-center justify-center text-center px-4 py-2 text-sm font-semibold text-slate-700 hover:text-[#251574] rounded-full hover:bg-slate-100 transition-colors">
              General
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center text-center px-4 py-2 text-sm font-semibold text-slate-700 hover:text-[#251574] rounded-full hover:bg-slate-100 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            <button
              onClick={onOpenCommandPalette}
              className="inline-flex items-center justify-center gap-2 bg-slate-100/90 hover:bg-slate-200/90 border border-slate-200/90 px-3.5 py-2 rounded-full text-xs text-slate-700 font-semibold transition-all shrink-0 whitespace-nowrap"
              title="Search standards, courses and verify"
            >
              <Search className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              <span className="whitespace-nowrap">Search</span>
              <kbd className="bg-white px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-500 border border-slate-300 shadow-2xs shrink-0">
                ⌘K
              </kbd>
            </button>

            <Link href="/verify" className="shrink-0">
              <button className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-sky-50/90 hover:bg-sky-100 text-[#008AD8] border border-sky-200/90 font-bold text-xs rounded-full transition-all duration-200 shrink-0 whitespace-nowrap shadow-2xs hover:shadow-sm">
                <ShieldCheck className="w-4 h-4 text-[#008AD8] shrink-0" />
                <span className="whitespace-nowrap">Verify Cert</span>
              </button>
            </Link>

            <Link href="/get-a-quote" className="shrink-0">
              <button className="inline-flex items-center justify-center gap-2 px-5 py-2 bg-[#FF4D5A] hover:bg-[#E03E4B] text-white font-bold text-xs rounded-full transition-all duration-200 shrink-0 whitespace-nowrap shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]">
                <span className="whitespace-nowrap">Get a Quote</span>
                <ArrowRight className="w-3.5 h-3.5 text-white shrink-0" />
              </button>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenCommandPalette}
              className="p-2 text-slate-600 hover:text-[#251574] rounded-lg"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#251574] rounded-lg"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-200 z-30 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              <div className="space-y-2">
                <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">Navigation</div>
                <Link href="/certification" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-semibold text-slate-900 border-b border-slate-100">
                  ISO Standards (5 Core Standards)
                </Link>
                <Link href="/training" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-semibold text-slate-900 border-b border-slate-100">
                  Auditor Training
                </Link>
                <Link href="/sectors" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-semibold text-slate-900 border-b border-slate-100">
                  Industries We Serve (32 IAF Sectors)
                </Link>
                <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-semibold text-slate-900 border-b border-slate-100">
                  About B4Q
                </Link>
                <Link href="/resources/documents" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-semibold text-slate-900 border-b border-slate-100">
                  Document Library
                </Link>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-semibold text-slate-900 border-b border-slate-100">
                  Contact Global Offices
                </Link>
              </div>

              <div className="pt-4 flex flex-col gap-3">
                <Link href="/get-a-quote" onClick={() => setMobileMenuOpen(false)} className="w-full py-3.5 bg-[#FF4D5A] text-white font-bold text-center rounded-2xl">
                  Get Instant Audit Quote
                </Link>
                <Link href="/verify" onClick={() => setMobileMenuOpen(false)} className="w-full py-3.5 bg-slate-100 text-slate-900 font-bold text-center rounded-2xl border border-slate-200">
                  Verify Certificate Registry
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
