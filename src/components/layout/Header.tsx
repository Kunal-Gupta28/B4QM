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

  const getStandardIcon = (iconName: string) => {
    switch (iconName) {
      case "Lock":
        return <Lock className="w-5 h-5 text-[#008AD8]" />;
      case "Leaf":
        return <Leaf className="w-5 h-5 text-emerald-600" />;
      case "Utensils":
        return <Utensils className="w-5 h-5 text-amber-600" />;
      case "UserCheck":
        return <UserCheck className="w-5 h-5 text-indigo-600" />;
      case "Activity":
        return <Activity className="w-5 h-5 text-[#FF4D5A]" />;
      case "Server":
        return <Server className="w-5 h-5 text-cyan-600" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-[#251574]" />;
    }
  };

  return (
    <>
      {/* Top Banner / Trust Bar */}
      <div className="bg-slate-100 text-slate-700 text-xs py-2 px-4 border-b border-slate-200 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 font-medium text-slate-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Impartial ISO Certification Body
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-600">
              Global Offices: <strong className="text-[#251574] font-semibold">UK 🇬🇧 · India 🇮🇳 · USA 🇺🇸 · Singapore 🇸🇬</strong>
            </span>
          </div>
          <div className="flex items-center gap-5 text-slate-700 font-medium">
            <span className="inline-flex items-center gap-1.5 bg-sky-50 text-[#008AD8] border border-sky-200 px-2.5 py-0.5 rounded-full text-[11px] font-bold">
              <Award className="w-3.5 h-3.5 text-[#008AD8]" /> Exemplar Global Authorised
            </span>
            <Link href="/verify" className="hover:text-[#251574] transition-colors">
              Public Registry
            </Link>
            <Link href="/portal" className="hover:text-[#251574] transition-colors flex items-center gap-1">
              Client Portal <ExternalLink className="w-3 h-3 text-slate-400" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Light Glass Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm"
            : "py-4 bg-white border-b border-slate-200/80"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo - Using Actual Logo Image Asset */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-10 w-auto flex items-center">
              <img
                src="/logo.svg"
                alt="B4Q Management Logo"
                className="h-10 w-auto object-contain group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex flex-col border-l border-slate-200 pl-3">
              <span className="font-serif text-lg font-bold tracking-tight text-[#251574] leading-none">
                B4Q <span className="text-[#008AD8] font-sans font-normal text-xs">Management</span>
              </span>
              <span className="text-[9px] text-slate-500 font-mono tracking-wider uppercase mt-1">
                Assured Certification
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-1" onMouseLeave={() => setActiveMenu(null)}>
            {/* Certification Mega Menu Trigger */}
            <div className="relative" onMouseEnter={() => setActiveMenu("certification")}>
              <button
                className={`flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
                  activeMenu === "certification" ? "bg-slate-100 text-[#251574]" : "text-slate-700 hover:text-[#251574] hover:bg-slate-100"
                }`}
              >
                ISO Standards
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMenu === "certification" ? "rotate-180 text-[#FF4D5A]" : ""}`} />
              </button>

              {/* Light Mega Menu Dropdown */}
              <AnimatePresence>
                {activeMenu === "certification" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-[840px] bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 mt-2 text-slate-900 grid grid-cols-3 gap-6 z-50"
                  >
                    <div className="col-span-2 grid grid-cols-2 gap-4">
                      {ISO_STANDARDS.map((std) => (
                        <Link
                          key={std.id}
                          href={`/certification/${std.id}`}
                          className="p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all group flex items-start gap-3"
                        >
                          <div className="p-2.5 rounded-lg bg-slate-100 border border-slate-200 group-hover:scale-105 transition-transform shrink-0">
                            {getStandardIcon(std.iconName)}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-xs font-bold text-[#008AD8]">{std.code}</span>
                              {std.badge && (
                                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200">
                                  {std.badge}
                                </span>
                              )}
                            </div>
                            <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#FF4D5A] transition-colors line-clamp-1">
                              {std.name}
                            </h4>
                            <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">{std.outcome}</p>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Mega Menu Side Banner with Cyan accent */}
                    <div className="bg-gradient-to-br from-sky-50 to-slate-50 p-5 rounded-xl border border-sky-200 flex flex-col justify-between">
                      <div>
                        <div className="w-9 h-9 rounded-lg bg-[#008AD8] text-white flex items-center justify-center mb-3 shadow-sm">
                          <Building2 className="w-5 h-5" />
                        </div>
                        <h4 className="text-sm font-bold text-[#251574] mb-1">Unsure which standard fits?</h4>
                        <p className="text-xs text-slate-600 leading-relaxed mb-4">
                          Our ISO auditors analyze your industry, regulatory exposure, and operational goals.
                        </p>
                      </div>
                      <Link href="/get-a-quote">
                        <button className="w-full px-4 py-2 rounded-full bg-[#008AD8] hover:bg-[#0077BC] text-white text-xs font-bold shadow-sm transition-colors flex items-center justify-between">
                          <span>Request Advice</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Training Mega Menu Trigger */}
            <div className="relative" onMouseEnter={() => setActiveMenu("training")}>
              <button
                className={`flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
                  activeMenu === "training" ? "bg-slate-100 text-[#251574]" : "text-slate-700 hover:text-[#251574] hover:bg-slate-100"
                }`}
              >
                Auditor Training
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMenu === "training" ? "rotate-180 text-[#FF4D5A]" : ""}`} />
              </button>

              <AnimatePresence>
                {activeMenu === "training" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-[640px] bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 mt-2 text-slate-900 grid grid-cols-2 gap-4 z-50"
                  >
                    <Link
                      href="/training"
                      className="p-4 rounded-xl hover:bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all group"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-red-50 text-[#FF4D5A]">
                          <GraduationCap className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#FF4D5A] transition-colors">
                            Lead Auditor Courses
                          </h4>
                          <span className="text-[11px] text-[#008AD8] font-mono font-bold">5 Days · 40 Hrs · Exam</span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-600">
                        Exemplar Global authorised certification courses for ISO 27001, 9001, 14001 & 45001.
                      </p>
                    </Link>

                    <Link
                      href="/training"
                      className="p-4 rounded-xl hover:bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all group"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-indigo-50 text-[#251574]">
                          <FileCheck className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#FF4D5A] transition-colors">
                            Internal Auditor Courses
                          </h4>
                          <span className="text-[11px] text-indigo-700 font-mono font-semibold">2 Days · 16 Hrs</span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-600">
                        Practical internal auditing techniques, non-conformity identification & reporting.
                      </p>
                    </Link>

                    <Link
                      href="/training"
                      className="p-4 rounded-xl hover:bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all group"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
                          <Award className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#FF4D5A] transition-colors">
                            Professional & DPO
                          </h4>
                          <span className="text-[11px] text-slate-600 font-mono">GDPR DPO · Six Sigma</span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-600">
                        Executive credentials for GDPR Data Protection Officers and Six Sigma belts.
                      </p>
                    </Link>

                    <Link
                      href="/training"
                      className="p-4 rounded-xl hover:bg-slate-50 border border-slate-200 transition-all group flex flex-col justify-between bg-slate-50"
                    >
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#FF4D5A] transition-colors mb-1">
                          Full Course Catalog
                        </h4>
                        <p className="text-xs text-slate-600">Browse schedules, formats, pass marks and integrated IMS tracks.</p>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-bold text-[#FF4D5A] mt-3">
                        View All Courses <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/about" className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-[#251574] rounded-full hover:bg-slate-100 transition-colors">
              About
            </Link>
            <Link href="/resources/documents" className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-[#251574] rounded-full hover:bg-slate-100 transition-colors">
              Resources
            </Link>
            <Link href="/contact" className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-[#251574] rounded-full hover:bg-slate-100 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Command Palette Trigger */}
            <button
              onClick={onOpenCommandPalette}
              className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 border border-slate-200 px-3 py-1.5 rounded-full text-xs text-slate-700 font-medium transition-colors"
              title="Search standards, courses and verify"
            >
              <Search className="w-3.5 h-3.5 text-slate-500" />
              <span>Search</span>
              <kbd className="bg-white px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-500 border border-slate-300 shadow-2xs">
                ⌘K
              </kbd>
            </button>

            {/* Verify CTA with Cyan Blue */}
            <Link href="/verify">
              <button className="px-4 py-2 rounded-full bg-sky-50 hover:bg-sky-100 text-[#008AD8] border border-sky-200 text-xs font-bold transition-colors flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#008AD8]" />
                Verify Cert
              </button>
            </Link>

            {/* Get Quote Crimson Coral CTA */}
            <Link href="/get-a-quote">
              <button className="px-5 py-2 rounded-full bg-[#FF4D5A] hover:bg-[#E63946] text-white text-xs font-bold shadow-md transition-all flex items-center gap-1.5">
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenCommandPalette}
              className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:text-slate-900"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 text-slate-900"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[65px] z-30 bg-white border-t border-slate-200 overflow-y-auto lg:hidden text-slate-900 p-6 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-mono text-slate-500 font-bold uppercase tracking-wider mb-3">ISO Standards</h3>
                <div className="grid grid-cols-1 gap-2">
                  {ISO_STANDARDS.map((std) => (
                    <Link
                      key={std.id}
                      href={`/certification/${std.id}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-white border border-slate-200">{getStandardIcon(std.iconName)}</div>
                        <div>
                          <span className="font-mono text-xs text-[#008AD8] block font-bold">{std.code}</span>
                          <span className="text-sm font-semibold text-slate-900">{std.name}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400" />
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-mono text-slate-500 font-bold uppercase tracking-wider mb-3">Auditor Training</h3>
                <div className="grid grid-cols-1 gap-2">
                  <Link
                    href="/training"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between"
                  >
                    <span className="text-sm font-medium text-slate-900">Lead Auditor (5 Days)</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </Link>
                  <Link
                    href="/training"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between"
                  >
                    <span className="text-sm font-medium text-slate-900">Internal Auditor (2 Days)</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </Link>
                  <Link
                    href="/training"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between"
                  >
                    <span className="text-sm font-medium text-slate-900">GDPR DPO & Six Sigma</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-3 rounded-xl bg-slate-100 text-center text-sm font-semibold text-slate-800"
                >
                  About B4Q
                </Link>
                <Link
                  href="/resources/documents"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-3 rounded-xl bg-slate-100 text-center text-sm font-semibold text-slate-800"
                >
                  Documents
                </Link>
              </div>
            </div>

            <div className="mt-8 space-y-3 pt-6 border-t border-slate-200">
              <Link href="/verify" onClick={() => setMobileMenuOpen(false)} className="block">
                <button className="w-full py-3 rounded-full bg-sky-50 text-[#008AD8] border border-sky-200 font-bold text-sm flex items-center justify-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#008AD8]" />
                  Verify Certificate
                </button>
              </Link>
              <Link href="/get-a-quote" onClick={() => setMobileMenuOpen(false)} className="block">
                <button className="w-full py-3 rounded-full bg-[#FF4D5A] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md">
                  <span>Get a Certification Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
