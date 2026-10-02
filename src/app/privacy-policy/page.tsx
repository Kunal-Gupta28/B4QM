"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ShieldCheck, Mail, ArrowLeft } from "lucide-react";

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
            How B4Q Management Limited gathers, uses, protects, and shares personal information and individual privacy rights.
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
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#251574]">
                1. INTRODUCTION
              </h2>
              <div className="space-y-3">
                <p>
                  <strong>1.1</strong> We take privacy and the protection of personal information seriously. This Privacy Notice sets out details about how we gather, use and share personal information and about individual privacy rights. How we use personal information depends upon the context in which it is made available to us. For further information on how B4Q is impacted.
                </p>
                <p>
                  <strong>1.2</strong> IT Admin of B4Q provides help and guidance to make sure we apply good practice standards to protecting personal information. Our IT admin can be reached by email{" "}
                  <a href="mailto:info@b4qm.com" className="text-[#008AD8] font-bold hover:underline">
                    info@b4qm.com
                  </a>.
                </p>
                <p>
                  <strong>1.3</strong> This Privacy Notice provides up to date information about how we use personal information and will update any previous information we have published about using personal information. We may make minor updates to this Privacy Notice from time to time, however if we make any material changes to the manner in which we process and use your personal information, we will announce this clearly on our website.
                </p>
              </div>
            </section>

            {/* 2. ABOUT US */}
            <section className="space-y-4 pt-6 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#251574]">
                2. ABOUT US
              </h2>
              <p>
                <strong>2.1</strong> We B4Q Management Limited, provides ISO Certification Services in various scheme like ISO 9001, ISO 14001, ISO 45001, ISO 22000, ISO 27001 etc. We are registered under Company Act 2013.
              </p>
            </section>

            {/* 3. WHAT KINDS OF PERSONAL INFORMATION WE USE */}
            <section className="space-y-4 pt-6 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#251574]">
                3. WHAT KINDS OF PERSONAL INFORMATION WE USE
              </h2>
              <p>
                <strong>3.1</strong> We use a variety of personal information depending on the circumstances under which personal information is made available to us.
              </p>
              <p>
                <strong>3.2</strong> We may use personal information in the following circumstances:
              </p>
              
              <div className="space-y-4 pl-4 border-l-2 border-slate-200">
                <div>
                  <strong className="text-slate-900 block">(a) Business Contacts:</strong>
                  We hold the names, job titles, employer details and professional contact details for various business contacts, including client contacts, supplier contacts and interested parties who have signed up for our newsletter via our website;
                </div>

                <div>
                  <strong className="text-slate-900 block">(b) Clients:</strong>
                  <ul className="list-disc pl-5 mt-1 space-y-2 text-sm">
                    <li>
                      <strong>Certification and Audit Services:</strong> Most of our clients are incorporated entities, however in the course of conducting audits and processing certifications, we may collect and use personal information of individuals that work for our clients. This can include names, contact details and information about an individual&rsquo;s work or role at our client; and
                    </li>
                    <li>
                      <strong>Training Services:</strong> If you have signed up to one of our training courses, we will process your name, job title, employer details, professional contact details and information about your performance on the training course. We may also collect and use some special categories of personal data such as dietary information or disabilities in relation to access;
                    </li>
                  </ul>
                </div>

                <div>
                  <strong className="text-slate-900 block">(c) Contract Auditors/Tutors:</strong>
                  If you are a consultant, we will process your name, professional and personal contact details, CV and professional background, payment details and information about the work you complete for us. We may also collect and use some special categories of personal data such as dietary information or disabilities in relation to access; and
                </div>

                <div>
                  <strong className="text-slate-900 block">(d) Referring Consultants:</strong>
                  If you are a consultant that refers sales opportunities to B4Q, we will process your name, professional and personal contact details, CV and professional background and information about the work you refer to us.
                </div>

                <div>
                  <strong className="text-slate-900 block">(e) Job Applicants:</strong>
                  Where you apply for a role with us, we will process the personal information you provide to us as part of your application and any interview selection process. This will ordinarily include your name, personal contact details, professional history, education and qualifications and references. We may also collect and use some special categories of personal data about job applicants, such as information about an applicant&rsquo;s racial or ethnic origin and some health information regarding any medical conditions or disabilities.
                </div>
              </div>
            </section>

            {/* 4. HOW WE GATHER YOUR PERSONAL INFORMATION */}
            <section className="space-y-4 pt-6 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#251574]">
                4. HOW WE GATHER YOUR PERSONAL INFORMATION
              </h2>
              <p>
                <strong>4.1</strong> We only use personal information which we have obtained directly for the purposes described in this Privacy Notice.
              </p>
              <p>
                <strong>4.2</strong> Personal Information is gathered in the following ways:
              </p>
              <div className="space-y-3 pl-4 border-l-2 border-slate-200">
                <p>
                  <strong>(a) Business Contacts:</strong> These may be collected via forms on our website, or in the course of business-as-usual correspondence with business contacts;
                </p>
                <div>
                  <strong>(b) Clients:</strong>
                  <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
                    <li>
                      <strong>Certification and Audit Services:</strong> We may collect personal information held by our clients in the course of conducting an audit. Personal information may be included in documentation we are required to assess as part of any audit, and will ordinarily be provided or made available to us by our client; and
                    </li>
                    <li>
                      <strong>Training Services:</strong> Personal information will be gathered directly from the individual that has signed up to attend one of our training courses;
                    </li>
                  </ul>
                </div>
                <p>
                  <strong>(c) Contract Auditors/Tutors, Consultants and Job Applicants:</strong> Personal information will be gathered directly from you or from your third party references.
                </p>
              </div>
            </section>

            {/* 5. WHY WE USE PERSONAL INFORMATION */}
            <section className="space-y-4 pt-6 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#251574]">
                5. WHY WE USE PERSONAL INFORMATION
              </h2>
              <p>
                <strong>5.1</strong> We will use personal information for the following purposes:
              </p>

              <div className="space-y-3 pl-4 border-l-2 border-slate-200">
                <p>
                  <strong>(a) Business Contacts:</strong> We process the personal information of our business contacts as necessary for the legitimate interests of managing the day-to-day operation of our business, including correspondence, engaging suppliers, and promoting our services to business contacts;
                </p>

                <div>
                  <strong>(b) Clients:</strong>
                  <ul className="list-disc pl-5 mt-1 space-y-2 text-sm">
                    <li>
                      <strong>Certification and Audit Services:</strong> We process the personal information of individuals that work for our incorporated clients in the course of conducting an audit in accordance with legal and regulatory obligations which govern how accredited management system certification services are to be conducted. Such processing is also required for the legitimate interests of our clients to apply for certifications that we are involved in auditing, granting and maintaining;
                    </li>
                    <li>
                      <strong>Training Services:</strong> We require to process personal information in order to perform the contract which we have entered into with the individual who has signed up to one of our training services. Where our contract for training services is entered into with a corporate entity for the provision of training to their employees, our processing of personal information is in the legitimate interests of such corporate entity to improve and/or add to the qualifications and skills of their employees; and
                    </li>
                  </ul>
                </div>

                <p>
                  <strong>(c) Contract Auditors/Tutors:</strong> We process the personal information of Contract Auditors/Tutors for the legitimate interests of determining whether or not to employ a particular individual for a role in our organisation. Where we engage a Contract Auditors/Tutors, we process their personal information for the purposes of entering into and performing our contract with the Contract Auditors/Tutors. We process racial and ethnic origin information about consultants for the substantial public interest of monitoring equal opportunities within our organisation, and we process certain health information about consultants for the substantial public interest of supporting Contract Auditors/Tutors with particular medical conditions or disabilities; and
                </p>

                <p>
                  <strong>(d) Referring Consultants:</strong> we process the information for the purpose of dealing with sales referrals; and
                </p>

                <p>
                  <strong>(e) Job Applicants:</strong> We process the personal information of job applicants for the legitimate interests of determining whether or not to employ a particular individual for a role in our organisation. Where we decide to employ a job applicant, we process their personal information for the purposes of entering into and performing our employment contract with the applicant. We process racial and ethnic origin and health information of job applicants for the purposes of meeting our legal obligations under employment and similar laws.
                </p>
              </div>

              <p className="pt-2">
                <strong>5.2</strong> If we are not provided with access to personal information for the purposes outlined in this paragraph 5, we may not be able to offer or provider certain services, or we may not be able to complete consultant or job applications.
              </p>
            </section>

            {/* 6. HOW LONG WE KEEP PERSONAL INFORMATION */}
            <section className="space-y-4 pt-6 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#251574]">
                6. HOW LONG WE KEEP PERSONAL INFORMATION
              </h2>
              <div className="space-y-3">
                <p>
                  <strong>6.1</strong> We will never retain personal information for any longer than is necessary for the purposes we need to use it for.
                </p>
                <p>
                  <strong>6.2</strong> Generally, in respect of personal information gather in the context of a contract, we will retain personal information for the duration of the contract and a period of up to six years after the contract has expired or terminated, in case such personal information is required for the exercise or defence of a legal claim during this period.
                </p>
                <p>
                  <strong>6.3</strong> We may also retain personal information for as long as required by law or regulation or instruction of a relevant accreditation body.
                </p>
                <p>
                  <strong>6.4</strong> Unsuccessful job applicant information is retained for a period of 12 months after the position has been filled.
                </p>
                <p>
                  <strong>6.5</strong> We will retain the personal information of business contacts that receive our newsletter until they opt-out or unsubscribe from our newsletter.
                </p>
              </div>
            </section>

            {/* 7. SHARING PERSONAL INFORMATION WITH THIRD PARTIES */}
            <section className="space-y-4 pt-6 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#251574]">
                7. SHARING PERSONAL INFORMATION WITH THIRD PARTIES
              </h2>
              <p>
                <strong>7.1</strong> We only share personal information with third parties:
              </p>
              <div className="space-y-2 pl-4">
                <p><strong>(a)</strong> to the extent necessary for fulfilling the purposes outlined in paragraph 5, including where necessary for the provision of services;</p>
                <p><strong>(b)</strong> where we are under a legal or contractual obligation to do so; or</p>
                <p><strong>(c)</strong> where it is fair and reasonable for us to do so in the circumstances.</p>
              </div>

              <p className="pt-2">
                <strong>7.2</strong> We may share personal information with the following third parties:
              </p>
              <div className="space-y-3 pl-4 border-l-2 border-slate-200">
                <p>
                  <strong>(a) Corporate Group / Agents / Franchisees:</strong> Our business operates as part of a wider, international group of companies which includes entities that act as our agents and franchisees in locations around the world. We may sometimes need to share personal information with our wider corporate group where required for the legitimate interests of operating our day-to-day operations, and also where required for independent reviews of audits and assessments;
                </p>
                <p>
                  <strong>(b) Suppliers:</strong> We use a number of different suppliers, including IT suppliers, payment processors and consultants, with whom we share personal information so that these suppliers can process personal information on our behalf. In these circumstances, we take steps required by data protection laws to ensure that these suppliers protect the personal information we share with them;
                </p>
                <p>
                  <strong>(c) Accreditation Bodies:</strong> We may be required to share personal information with accreditation and regulatory bodies (such as UASL, UK), who monitor our certification and audit services to ensure that we are compliant with their rules and requirements when awarding certifications; and
                </p>
                <p>
                  <strong>(d) Government bodies:</strong> We may be required by law to share personal information with government bodies and regulators (Govt of India or GST Department).
                </p>
              </div>
            </section>

            {/* 8. SENDING PERSONAL INFORMATION OVERSEAS */}
            <section className="space-y-4 pt-6 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#251574]">
                8. SENDING PERSONAL INFORMATION OVERSEAS
              </h2>
              <p>
                <strong>8.1</strong> We may need to transfer personal information to the UASL, UK where data protection laws may not provide the same level of protection as those in India.
              </p>
            </section>

            {/* 9. PRIVACY RIGHTS */}
            <section className="space-y-4 pt-6 border-t border-slate-100">
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#251574]">
                9. PRIVACY RIGHTS
              </h2>
              <p>
                <strong>9.1</strong> Individuals are entitled to exercise any of the following privacy rights in respect of our processing of personal information:
              </p>
              <p className="pl-4 border-l-2 border-slate-200 font-medium">
                <strong>(a) Access:</strong> Individuals can request access to a copy of their personal information held by us, along with details of what personal information we use, why we use it, who we share it with, how long we keep it for and whether it has been used for any automated decision-making.
              </p>

              <div className="p-4 rounded-2xl bg-sky-50 border border-sky-100 flex items-start gap-3 mt-4">
                <Mail className="w-5 h-5 text-[#008AD8] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-700">
                  To exercise your privacy rights or contact our IT Data Protection Officer, please email{" "}
                  <a href="mailto:info@b4qm.com" className="font-bold text-[#008AD8] hover:underline">
                    info@b4qm.com
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
