"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ShieldCheck, Lock, Mail, ArrowLeft, FileText, CheckCircle2 } from "lucide-react";

export default function PrivacyPolicyPage() {
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
              <ShieldCheck className="w-6 h-6" />
            </span>
            <span className="text-xs font-mono font-bold tracking-widest text-sky-300 uppercase">
              Data Protection & Compliance
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-3 max-w-2xl leading-relaxed">
            How B4Q Management Ltd. & Quality Control Certification (QCC) gather, process, protect, and handle your personal information in accordance with international data privacy standards.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-12 lg:py-16">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200 shadow-sm space-y-10 text-slate-700 leading-relaxed text-sm sm:text-base">
            
            {/* Last Updated Pill */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-6">
              <div className="text-xs text-slate-500 font-mono">
                Official Document ID: <strong className="text-slate-900">B4Q-POL-PRIVACY-2026</strong>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">
                Active Policy
              </span>
            </div>

            {/* 1. INTRODUCTION */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#251574] flex items-center gap-2">
                <span>1. Introduction</span>
              </h2>
              <div className="space-y-3">
                <p>
                  <strong>1.1</strong> We take privacy and the protection of personal information seriously. This Privacy Notice sets out details about how we gather, use and share personal information and about individual privacy rights. How we use personal information depends upon the context in which it is made available to us.
                </p>
                <p>
                  <strong>1.2</strong> IT Admin of B4Q Management Ltd. / QCC provides help and guidance to make sure we apply good practice standards to protecting personal information. Our IT admin can be reached by email at{" "}
                  <a href="mailto:info@b4qm.com" className="text-[#008AD8] font-semibold hover:underline">
                    info@b4qm.com
                  </a>{" "}
                  or{" "}
                  <a href="mailto:info@qccertification.com" className="text-[#008AD8] font-semibold hover:underline">
                    info@qccertification.com
                  </a>.
                </p>
                <p>
                  <strong>1.3</strong> This Privacy Notice provides up to date information about how we use personal information and will update any previous information we have published about using personal information. We may make minor updates to this Privacy Notice from time to time; however, if we make any material changes to the manner in which we process and use your personal information, we will announce this clearly on our website.
                </p>
              </div>
            </section>

            {/* 2. ABOUT US */}
            <section className="space-y-4 pt-6 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#251574]">
                2. About Us
              </h2>
              <p>
                <strong>2.1</strong> We, <strong>B4Q Management Ltd.</strong> / <strong>Quality Control Certification (QCC)</strong>, provide ISO Certification & Assessment Services across various schemes including ISO 9001, ISO 14001, ISO 45001, ISO 22000, ISO 27001, etc. We are registered with Govt. Of India and UK authorities, operating globally under accredited ISO/IEC 17021-1 standards.
              </p>
            </section>

            {/* 3. WHAT KINDS OF PERSONAL INFORMATION WE USE */}
            <section className="space-y-4 pt-6 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#251574]">
                3. What Kinds of Personal Information We Use
              </h2>
              <p>
                <strong>3.1</strong> We use a variety of personal information depending on the circumstances under which personal information is made available to us.
              </p>
              <p>
                <strong>3.2</strong> We may use personal information in the following circumstances:
              </p>
              
              <div className="space-y-3 pl-4 border-l-2 border-slate-200">
                <div>
                  <strong className="text-slate-900 block">(a) Business Contacts:</strong>
                  We hold the names, job titles, employer details, and professional contact details for various business contacts, including client contacts, supplier contacts, and interested parties who have signed up for our newsletter via our website.
                </div>

                <div>
                  <strong className="text-slate-900 block">(b) Clients:</strong>
                  <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
                    <li>
                      <strong>Certification and Audit Services:</strong> Most of our clients are incorporated entities; however, in the course of conducting audits and processing certifications, we may collect and use personal information of individuals who work for our clients. This can include names, contact details, and information about an individual's work or role.
                    </li>
                    <li>
                      <strong>Training Services:</strong> If you sign up for one of our training courses, we process your name, job title, employer details, professional contact details, and performance/assessment records. We may also collect special category data (e.g. dietary or disability access needs) where necessary.
                    </li>
                  </ul>
                </div>

                <div>
                  <strong className="text-slate-900 block">(c) Contract Auditors / Tutors:</strong>
                  If you are a consultant or auditor, we process your name, professional and personal contact details, CV, qualifications, background, payment details, and audit execution logs.
                </div>

                <div>
                  <strong className="text-slate-900 block">(d) Referring Consultants:</strong>
                  If you refer sales opportunities to us, we process your name, contact details, professional background, and details of referred projects.
                </div>

                <div>
                  <strong className="text-slate-900 block">(e) Job Applicants:</strong>
                  Where you apply for a role with us, we process application details including CV, employment history, qualifications, references, and required equal opportunity/health information.
                </div>
              </div>
            </section>

            {/* 4. HOW WE GATHER YOUR PERSONAL INFORMATION */}
            <section className="space-y-4 pt-6 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#251574]">
                4. How We Gather Your Personal Information
              </h2>
              <p>
                <strong>4.1</strong> We only use personal information which we have obtained directly for the purposes described in this Privacy Notice.
              </p>
              <p>
                <strong>4.2</strong> Personal Information is gathered in the following ways:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Business Contacts:</strong> Collected via online forms on our website or standard business correspondence.</li>
                <li><strong>Audit & Certification Services:</strong> Provided directly by clients during audit preparation or document evaluation.</li>
                <li><strong>Training Services:</strong> Gathered directly from individuals signing up for courses.</li>
                <li><strong>Auditors, Consultants & Applicants:</strong> Gathered directly from you or verified third-party references.</li>
              </ul>
            </section>

            {/* 5. WHY WE USE PERSONAL INFORMATION */}
            <section className="space-y-4 pt-6 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#251574]">
                5. Why We Use Personal Information
              </h2>
              <p>
                <strong>5.1</strong> We process personal information for legitimate business interests, contractual performance, legal compliance, and regulatory obligations governing accredited management system certification bodies (ISO/IEC 17021-1).
              </p>
              <p>
                <strong>5.2</strong> If required personal information is not provided, we may be unable to offer certification or training services or complete consultant contracts.
              </p>
            </section>

            {/* 6. HOW LONG WE KEEP PERSONAL INFORMATION */}
            <section className="space-y-4 pt-6 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#251574]">
                6. How Long We Keep Personal Information
              </h2>
              <p>
                <strong>6.1</strong> We never retain personal information for any longer than is necessary.
              </p>
              <p>
                <strong>6.2</strong> Contractual data is retained for the contract duration plus up to six years post-expiry to address potential legal claims or audit verification requirements.
              </p>
              <p>
                <strong>6.3</strong> Data may also be retained as required by legal obligations or accreditation body rules (e.g. UASL / IAF).
              </p>
              <p>
                <strong>6.4</strong> Unsuccessful job applicant records are retained for 12 months. Newsletter subscriptions are kept until opt-out.
              </p>
            </section>

            {/* 7. SHARING PERSONAL INFORMATION WITH THIRD PARTIES */}
            <section className="space-y-4 pt-6 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#251574]">
                7. Sharing Personal Information with Third Parties
              </h2>
              <p>
                <strong>7.1</strong> We only share personal information with third parties where necessary for service delivery, legal compliance, or fair business practices.
              </p>
              <p>
                <strong>7.2</strong> Authorized third parties include:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Corporate Group & Franchisees:</strong> For international audit coordination and independent reviews.</li>
                <li><strong>IT & System Suppliers:</strong> Payment processors, cloud hosts, and software vendors operating under strict data agreements.</li>
                <li><strong>Accreditation Bodies:</strong> Regulators such as UASL UK / IAF monitoring audit quality.</li>
                <li><strong>Government Bodies:</strong> Legal statutory entities or tax departments as required by law.</li>
              </ul>
            </section>

            {/* 8. SENDING PERSONAL INFORMATION OVERSEAS */}
            <section className="space-y-4 pt-6 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#251574]">
                8. Overseas Data Transfers
              </h2>
              <p>
                <strong>8.1</strong> We may transfer personal data to international branches or accreditation oversight bodies (such as UASL in the UK), ensuring standard contractual privacy protections are enforced.
              </p>
            </section>

            {/* 9. PRIVACY RIGHTS */}
            <section className="space-y-4 pt-6 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#251574]">
                9. Individual Privacy Rights
              </h2>
              <p>
                <strong>9.1</strong> You have the right to request access, correction, erasure, or restriction of your personal data held by us.
              </p>
              <div className="p-4 rounded-2xl bg-sky-50 border border-sky-100 flex items-start gap-3 mt-4">
                <Mail className="w-5 h-5 text-[#008AD8] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-700">
                  To exercise your privacy rights or contact our IT Data Protection Officer, please email{" "}
                  <a href="mailto:info@b4qm.com" className="font-bold text-[#008AD8] hover:underline">
                    info@b4qm.com
                  </a>{" "}
                  or{" "}
                  <a href="mailto:info@qccertification.com" className="font-bold text-[#008AD8] hover:underline">
                    info@qccertification.com
                  </a>.
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
