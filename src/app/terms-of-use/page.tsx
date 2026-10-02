"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Scale, ArrowLeft, ShieldAlert, Globe, ExternalLink, Cookie } from "lucide-react";

export default function TermsOfUsePage() {
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
              <Scale className="w-6 h-6" />
            </span>
            <span className="text-xs font-mono font-bold tracking-widest text-sky-300 uppercase">
              Legal & Usage Terms
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Terms of Use
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-2xl leading-relaxed">
            Welcome to B4Q Management Ltd. & Quality Control Certification (QCC). Please review the terms governing your use of our website, services, and online certification resources.
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
                Document Code: <strong className="text-slate-900">B4Q-TERMS-2026</strong>
              </div>
              <span className="px-3 py-1 rounded-full bg-sky-50 text-[#008AD8] text-xs font-semibold border border-sky-200">
                Official Terms
              </span>
            </div>

            <p className="text-base text-slate-800 font-medium leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200">
              Welcome to <strong>b4qm.com</strong> & <strong>qccertification.com</strong> — we hope you enjoy your visit and find the content useful. Here are a few key points you should read and understand in relation to your visit.
            </p>

            {/* 1. Copyright */}
            <section className="space-y-3">
              <h2 className="text-xl font-extrabold text-[#251574] flex items-center gap-2">
                <span>1. Copyright & Ownership</span>
              </h2>
              <p>
                This website and its contents are owned by <strong>B4Q Management Ltd.</strong> / <strong>Quality Control Certification (QCC)</strong>. All rights reserved. Registered with official corporate addresses at:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
                  <strong className="text-slate-900 block mb-1">India Corporate Office:</strong>
                  453, 4th Floor, Aggarwal Metro Height, Netaji Subhash Place (NSP), Pitampura, Delhi-110034, India.<br />
                  <em>Registered Office:</em> 2nd Floor, Aman Market, RKBM House, Narela Mandi, Delhi-110040.
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
                  <strong className="text-slate-900 block mb-1">UK & European Operations:</strong>
                  82 Adley Street, London E5 0DZ, United Kingdom.<br />
                  Official Email: <a href="mailto:info@b4qm.com" className="text-[#008AD8] hover:underline">info@b4qm.com</a>
                </div>
              </div>
            </section>

            {/* 2. Using this website */}
            <section className="space-y-3 pt-6 border-t border-slate-100">
              <h2 className="text-xl font-extrabold text-[#251574]">
                2. Using This Website
              </h2>
              <p>
                The content of this website is for information and guidance only. You are welcome to print, download, share, or link to pages on the website as long as you do not do so for commercial financial gain.
              </p>
              <p>
                Whilst we make every effort to keep the information on this website accurate and up to date, we cannot accept responsibility or liability for the content, nor can we accept responsibility for any loss, disruption, or damage to your computer system whilst using this website.
              </p>
              <p>
                Content provided on our website is for informational purposes only. Visitor opinions expressed do not necessarily represent those of B4Q / QCC or its policies. B4Q / QCC will not be liable for any errors or omissions in this information nor for the availability of this information. B4Q / QCC will not be liable for any losses, injuries, or damages from the display or use of this information.
              </p>
            </section>

            {/* 3. Links */}
            <section className="space-y-3 pt-6 border-t border-slate-100">
              <h2 className="text-xl font-extrabold text-[#251574] flex items-center gap-2">
                <span>3. External Links</span>
              </h2>
              <p>
                The content of external websites linked to or from our website is beyond our control, and we do not accept any responsibility for their content or upkeep. Once you leave our website and visit another website, you are subject to the terms of use and privacy policy of that third-party website.
              </p>
            </section>

            {/* 4. Cookies & Your Consent */}
            <section className="space-y-3 pt-6 border-t border-slate-100">
              <h2 className="text-xl font-extrabold text-[#251574] flex items-center gap-2">
                <Cookie className="w-5 h-5 text-[#008AD8]" />
                <span>4. Cookies & User Consent</span>
              </h2>
              <p>
                A &lsquo;Cookie&rsquo; is a small file which is downloaded onto a device when a user accesses certain websites. Cookies are then sent back to the originating website on each subsequent visit. We use Cookies to remember visitor preferences such as language and country selection. These Cookies cannot read or use other information saved on your device.
              </p>
              <p>
                Most web browsers are set up to accept cookies automatically; however, you can edit browser settings to disable cookies at any time or alert you when a cookie is being sent so you can choose whether to accept it.
              </p>
              <p className="text-xs text-slate-500">
                If you wish to restrict or block web browser cookies which are set on your device, you can do this through your browser settings or visit{" "}
                <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-[#008AD8] underline">
                  www.aboutcookies.org
                </a>.
              </p>
            </section>

            {/* 5. Services Consent */}
            <section className="space-y-3 pt-6 border-t border-slate-100">
              <h2 className="text-xl font-extrabold text-[#251574] flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-amber-500" />
                <span>5. Services & Management System Scope Disclaimer</span>
              </h2>
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm font-medium">
                B4Q Management Ltd. / QCC is not liable for the quality of products and services offered by a client company. While B4Q / QCC certifies a company&rsquo;s management system under ISO standards, such certification covers management system compliance and does not constitute product or service quality guarantee.
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
