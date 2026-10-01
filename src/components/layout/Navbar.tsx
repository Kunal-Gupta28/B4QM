"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  ChevronDown,
  ShieldCheck,
  Search,
  Menu,
  X,
  FileText,
  Building2,
  Lock,
  Leaf,
  HeartPulse,
  Server,
  Utensils,
  BookOpen,
  HelpCircle,
  PhoneCall,
  ExternalLink,
} from "lucide-react";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const standardsNav = [
    { name: "ISO 9001", code: "Quality Management", href: "/certification/iso-9001", icon: Award },
    { name: "ISO 14001", code: "Environmental Management", href: "/certification/iso-14001", icon: Leaf },
    { name: "ISO 45001", code: "Health & Safety", href: "/certification/iso-45001", icon: HeartPulse },
    { name: "ISO 22000", code: "Food Safety Management", href: "/certification/iso-22000", icon: Utensils },
    { name: "ISO 27001", code: "Information Security (2022)", href: "/certification/iso-27001", icon: Lock },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-navy/95 backdrop-blur-xl border-b border-white/10 shadow-lg py-3"
          : "bg-brand-navy/80 backdrop-blur-md border-b border-white/5 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Exemplar Badge */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-coral to-rose-500 flex items-center justify-center shadow-lg shadow-brand-coral/25 group-hover:scale-105 transition-transform">
              <span className="font-serif font-black text-xl text-white tracking-tighter">B4Q</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-white tracking-wide text-lg leading-none">
                B4Q MANAGEMENT
              </span>
              <span className="text-[10px] text-slate-300 font-mono tracking-wider flex items-center gap-1 mt-1">
                <ShieldCheck className="w-3 h-3 text-brand-emerald" /> Exemplar Global Authorised
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {/* Standards Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("standards")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1.5 text-sm font-medium text-slate-200 hover:text-white transition-colors py-2">
                <span>Certification</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-white" />
              </button>

              <AnimatePresence>
                {activeDropdown === "standards" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute top-full left-0 w-80 p-3 rounded-2xl bg-brand-navyDark border border-white/15 shadow-2xl backdrop-blur-2xl grid grid-cols-1 gap-1"
                  >
                    <div className="px-3 py-1.5 border-b border-white/10 mb-1 flex items-center justify-between">
                      <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold">
                        ISO Standards Hub
                      </span>
                      <Link
                        href="/certification"
                        className="text-[11px] text-brand-coral hover:underline font-medium"
                      >
                        View All 7 →
                      </Link>
                    </div>
                    {standardsNav.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/10 transition-colors group"
                        >
                          <div className="p-2 rounded-lg bg-white/5 text-brand-coral group-hover:bg-brand-coral group-hover:text-white transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white group-hover:text-brand-coral transition-colors">
                              {item.name}
                            </div>
                            <div className="text-[11px] text-slate-400">{item.code}</div>
                          </div>
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/certification"
              className={`text-sm font-medium transition-colors ${
                pathname === "/certification" ? "text-brand-coral font-semibold" : "text-slate-200 hover:text-white"
              }`}
            >
              Standards Hub
            </Link>

            <Link
              href="/verify"
              className={`text-sm font-medium flex items-center gap-1.5 transition-colors ${
                pathname === "/verify" ? "text-brand-coral font-semibold" : "text-slate-200 hover:text-white"
              }`}
            >
              <Search className="w-3.5 h-3.5 text-brand-emerald" />
              <span>Verify Certificate</span>
            </Link>
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/verify"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 text-slate-100 text-xs font-semibold transition-all"
            >
              <Search className="w-3.5 h-3.5 text-brand-emerald" />
              <span>Verify</span>
            </Link>

            <Link
              href="/verify"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-coral hover:bg-brand-coralHover text-white text-xs font-semibold shadow-lg shadow-brand-coral/25 hover:shadow-brand-coral/40 transition-all hover:scale-105"
            >
              <span>Get a Certification Quote</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/10 text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-brand-navyDark border-b border-white/10 px-4 py-6 space-y-4"
          >
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase text-slate-400 block px-2">ISO Standards</span>
              <div className="grid grid-cols-2 gap-2">
                {standardsNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 rounded-xl bg-white/5 text-xs text-white font-medium hover:bg-white/10"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-2 space-y-2 border-t border-white/10">
              <Link
                href="/certification"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm font-semibold text-white"
              >
                All Standards Hub
              </Link>
              <Link
                href="/verify"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm font-semibold text-brand-emerald"
              >
                Verify Certificate Tool
              </Link>
            </div>

            <div className="pt-4 flex flex-col gap-2">
              <Link
                href="/verify"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-full bg-brand-coral text-white text-sm font-bold shadow-lg"
              >
                Get a Certification Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
