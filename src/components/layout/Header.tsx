"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ShieldCheck, ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { HeaderMegaMenu } from "@/components/layout/HeaderMegaMenu";

interface HeaderProps {
  onOpenCommandPalette?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCommandPalette }) => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<"certification" | "training" | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
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
            <div className="relative" onMouseEnter={() => setActiveMenu("certification")}>
              <Link
                href="/standards"
                className={`inline-flex items-center justify-center text-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                  activeMenu === "certification"
                    ? "bg-slate-100 text-[#251574]"
                    : isActive("/standards")
                    ? "bg-[#251574] text-white font-bold shadow-sm"
                    : "text-slate-700 hover:text-[#251574] hover:bg-slate-100"
                }`}
              >
                <span>ISO Standards</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeMenu === "certification"
                      ? "rotate-180 text-[#FF4D5A]"
                      : isActive("/standards")
                      ? "text-white/80"
                      : ""
                  }`}
                />
              </Link>

              <AnimatePresence>
                {activeMenu === "certification" && <HeaderMegaMenu onClose={() => setActiveMenu(null)} />}
              </AnimatePresence>
            </div>

            <Link
              href="/training"
              onMouseEnter={() => setActiveMenu(null)}
              className={`inline-flex items-center justify-center text-center px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                isActive("/training")
                  ? "bg-[#251574] text-white font-bold shadow-sm"
                  : "text-slate-700 hover:text-[#251574] hover:bg-slate-100"
              }`}
            >
              Auditor Training
            </Link>

            <Link
              href="/sectors"
              onMouseEnter={() => setActiveMenu(null)}
              className={`inline-flex items-center justify-center text-center px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                isActive("/sectors")
                  ? "bg-[#251574] text-white font-bold shadow-sm"
                  : "text-slate-700 hover:text-[#251574] hover:bg-slate-100"
              }`}
            >
              Industries We Serve
            </Link>

            <Link
              href="/about"
              onMouseEnter={() => setActiveMenu(null)}
              className={`inline-flex items-center justify-center text-center px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                isActive("/about")
                  ? "bg-[#251574] text-white font-bold shadow-sm"
                  : "text-slate-700 hover:text-[#251574] hover:bg-slate-100"
              }`}
            >
              About
            </Link>
            <Link
              href="/resources/documents"
              onMouseEnter={() => setActiveMenu(null)}
              className={`inline-flex items-center justify-center text-center px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                isActive("/resources")
                  ? "bg-[#251574] text-white font-bold shadow-sm"
                  : "text-slate-700 hover:text-[#251574] hover:bg-slate-100"
              }`}
            >
              General
            </Link>
            <Link
              href="/contact"
              onMouseEnter={() => setActiveMenu(null)}
              className={`inline-flex items-center justify-center text-center px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                isActive("/contact")
                  ? "bg-[#251574] text-white font-bold shadow-sm"
                  : "text-slate-700 hover:text-[#251574] hover:bg-slate-100"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
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
                <Link href="/standards" onClick={() => setMobileMenuOpen(false)} className={`block py-2.5 px-3 rounded-xl text-base font-semibold border-b border-slate-100 transition-colors ${isActive("/standards") ? "bg-[#251574] text-white font-bold" : "text-slate-900 hover:bg-slate-50"}`}>
                  ISO Standards (5 Core Standards)
                </Link>
                <Link href="/training" onClick={() => setMobileMenuOpen(false)} className={`block py-2.5 px-3 rounded-xl text-base font-semibold border-b border-slate-100 transition-colors ${isActive("/training") ? "bg-[#251574] text-white font-bold" : "text-slate-900 hover:bg-slate-50"}`}>
                  Auditor Training
                </Link>
                <Link href="/sectors" onClick={() => setMobileMenuOpen(false)} className={`block py-2.5 px-3 rounded-xl text-base font-semibold border-b border-slate-100 transition-colors ${isActive("/sectors") ? "bg-[#251574] text-white font-bold" : "text-slate-900 hover:bg-slate-50"}`}>
                  Industries We Serve (32 IAF Sectors)
                </Link>
                <Link href="/about" onClick={() => setMobileMenuOpen(false)} className={`block py-2.5 px-3 rounded-xl text-base font-semibold border-b border-slate-100 transition-colors ${isActive("/about") ? "bg-[#251574] text-white font-bold" : "text-slate-900 hover:bg-slate-50"}`}>
                  About B4Q
                </Link>
                <Link href="/resources/documents" onClick={() => setMobileMenuOpen(false)} className={`block py-2.5 px-3 rounded-xl text-base font-semibold border-b border-slate-100 transition-colors ${isActive("/resources") ? "bg-[#251574] text-white font-bold" : "text-slate-900 hover:bg-slate-50"}`}>
                  Document Library
                </Link>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className={`block py-2.5 px-3 rounded-xl text-base font-semibold border-b border-slate-100 transition-colors ${isActive("/contact") ? "bg-[#251574] text-white font-bold" : "text-slate-900 hover:bg-slate-50"}`}>
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
