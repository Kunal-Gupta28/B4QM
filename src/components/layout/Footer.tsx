"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Award, MapPin, Mail, Phone, ExternalLink, Globe, CheckCircle2 } from "lucide-react";
import { CORPORATE_METRICS } from "@/lib/data";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full max-w-full bg-[#180C4F] text-slate-300 border-t border-white/10 pt-16 pb-12">
      <div className="w-full max-w-7xl mx-auto px-[4%] sm:px-[5%] lg:px-[6%]">
        
        {/* Performance Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 mb-12">
          {CORPORATE_METRICS.map((m, idx) => (
            <div key={idx} className="text-center">
              <div className="text-2xl font-bold font-mono text-[#008AD8]">{m.value}</div>
              <div className="text-xs font-bold text-white mt-0.5">{m.label}</div>
              <div className="text-[10px] text-slate-400 font-mono mt-0.5">{m.desc}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info with Official Logo */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-xl shadow-md">
                <img
                  src="/logo.jpg"
                  alt="B4Q Management Ltd Logo"
                  className="h-10 w-auto object-contain rounded-md"
                />
              </div>
              <div>
                <span className="font-serif font-bold text-white text-xl block">B4Q MANAGEMENT LTD.</span>
                <span className="text-xs text-[#008AD8] font-mono flex items-center gap-1 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" /> Accredited ISO Certification Body
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              International ISO assessment & certification body operating across UK, India, USA, Singapore, and Middle East under strict ISO/IEC 17021-1 impartiality guidelines.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-slate-200">
                <Globe className="w-3.5 h-3.5 text-[#008AD8]" /> UK · IN · US · SG
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-xs font-mono text-emerald-300 font-semibold">
                IAF MLA Signatory Aligned
              </span>
            </div>
          </div>

          {/* Quick Links: Certification */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">ISO Certification</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/certification/iso-9001" className="hover:text-[#008AD8] transition-colors">ISO 9001:2015 Quality</Link></li>
              <li><Link href="/certification/iso-14001" className="hover:text-[#008AD8] transition-colors">ISO 14001:2026 Environmental</Link></li>
              <li><Link href="/certification/iso-45001" className="hover:text-[#008AD8] transition-colors">ISO 45001:2018 Health & Safety</Link></li>
              <li><Link href="/certification/iso-22000" className="hover:text-[#008AD8] transition-colors">ISO 22000:2018 Food Safety</Link></li>
              <li><Link href="/certification/iso-27001" className="hover:text-[#008AD8] transition-colors">ISO 27001:2022 ISMS</Link></li>
            </ul>
          </div>

          {/* Quick Links: Key Tools & Public Registry */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">Tools & Public Registry</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/verify" className="text-[#008AD8] hover:underline font-bold flex items-center gap-1"><span>Verify Certificate</span> →</Link></li>
              <li><Link href="/resources/suspended" className="text-rose-400 hover:underline font-bold flex items-center gap-1"><span>Suspended Certificates</span> →</Link></li>
              <li><Link href="/certification" className="hover:text-[#FF4D5A] transition-colors">Standards Catalog (5 ISOs)</Link></li>
              <li><Link href="/get-a-quote" className="hover:text-[#FF4D5A] transition-colors">Get Certification Quote</Link></li>
              <li><Link href="/about/accreditation" className="hover:text-[#FF4D5A] transition-colors">Accreditation Details</Link></li>
              <li><Link href="/resources/documents" className="hover:text-[#FF4D5A] transition-colors">Public Document Library (A–P)</Link></li>
            </ul>
          </div>

          {/* Global Offices from Extraction Report */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">Global Offices</h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div>
                <strong className="text-white block">India Head Office 🇮🇳</strong>
                <span className="text-slate-400">453, 4th Floor, Aggarwal Metro Height, NSP, Pitampura, Delhi-110034</span>
              </div>
              <div>
                <strong className="text-white block">UK Marketing Office 🇬🇧</strong>
                <span className="text-slate-400">82 Adley Street, London E5 0DZ, UK</span>
              </div>
              <div>
                <strong className="text-white block">Contact Details</strong>
                <span className="text-slate-400">098997 15540 / info@b4qm.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} B4Q Management Ltd. All rights reserved. Authorised Training Provider of Exemplar Global Inc.</p>
          <div className="flex items-center gap-6">
            <Link href="/resources/documents" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="/resources/documents" className="hover:text-white transition-colors">General Conditions</Link>
            <Link href="/resources/documents" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/resources/documents" className="hover:text-white transition-colors">Return & Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
