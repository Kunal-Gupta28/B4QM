"use client";

import { useState, useRef } from "react";
import confetti from "canvas-confetti";
import { Sparkles, ShieldCheck, Download, Check, RefreshCw, Award } from "lucide-react";
import Image from "next/image";

export default function LiveBadgeGenerator() {
  const [companyName, setCompanyName] = useState("Acme Enterprise Solutions");
  const [standard, setStandard] = useState("ISO 27001:2022");
  const [certId, setCertId] = useState("B4Q-ISMS-849201");
  const [isStamping, setIsStamping] = useState(false);
  const [isStamped, setIsStamped] = useState(true);

  const badgeRef = useRef<HTMLDivElement>(null);

  const standardsList = [
    { code: "ISO 9001:2015", label: "Quality Management System (QMS)", color: "border-sky-500 text-sky-700 bg-sky-50" },
    { code: "ISO 27001:2022", label: "Information Security (ISMS)", color: "border-indigo-500 text-indigo-700 bg-indigo-50" },
    { code: "ISO 14001:2015", label: "Environmental Management (EMS)", color: "border-emerald-500 text-emerald-700 bg-emerald-50" },
    { code: "ISO 45001:2018", label: "Occupational Health & Safety", color: "border-amber-500 text-amber-700 bg-amber-50" },
    { code: "ISO 22000:2018", label: "Food Safety Management", color: "border-rose-500 text-rose-700 bg-rose-50" },
  ];

  const handleGenerate = () => {
    setIsStamping(true);
    setIsStamped(false);

    // Randomize cert ID
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    const standardPrefix = standard.split(" ")[1]?.substring(0, 4) || "CERT";
    setCertId(`B4Q-${standardPrefix}-${randomNum}`);

    setTimeout(() => {
      setIsStamping(false);
      setIsStamped(true);

      // Trigger Confetti Burst
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#251574", "#008AD8", "#FF4D5A", "#10B981"],
        });
      } catch (err) {
        console.log("Confetti trigger", err);
      }
    }, 600);
  };

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden border-t border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4 text-[#FF4D5A]" />
            <span>Interactive Certificate Studio</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Preview Your Official B4Q ISO Certification Mark
          </h2>
          <p className="text-slate-600 text-sm md:text-base mt-3">
            Simulate your accredited ISO certificate badge live. Customise your standard and organisation details to preview how your official seal will appear.
          </p>
        </div>

        {/* Interactive Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Left Controls Form */}
          <div className="lg:col-span-6 bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
            <div>
              <label className="block text-xs font-mono font-semibold uppercase text-slate-700 mb-2">
                Organisation Name
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Enter company name..."
                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 font-semibold text-sm focus:ring-2 focus:ring-[#008AD8] focus:border-transparent outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-semibold uppercase text-slate-700 mb-2">
                Select ISO Standard
              </label>
              <div className="grid grid-cols-1 gap-2.5">
                {standardsList.map((item) => (
                  <button
                    key={item.code}
                    onClick={() => setStandard(item.code)}
                    className={`flex items-center justify-between p-3.5 rounded-xl border text-left transition-all ${
                      standard === item.code
                        ? "border-[#008AD8] bg-sky-50/80 ring-2 ring-[#008AD8]/30 shadow-sm"
                        : "border-slate-200 bg-white hover:bg-slate-100/80"
                    }`}
                  >
                    <div>
                      <div className="text-xs font-mono font-bold text-[#251574]">
                        {item.code}
                      </div>
                      <div className="text-xs text-slate-600">{item.label}</div>
                    </div>
                    {standard === item.code && (
                      <Check className="w-4 h-4 text-[#008AD8] shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={isStamping}
              className="w-full py-4 bg-gradient-to-r from-[#251574] via-[#008AD8] to-[#251574] text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
            >
              {isStamping ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  <span>Stamping Official Seal...</span>
                </>
              ) : (
                <>
                  <Award className="w-5 h-5 text-rose-300" />
                  <span>Generate & Stamp Certificate</span>
                </>
              )}
            </button>
          </div>

          {/* Right Live 3D Certificate Preview Card */}
          <div className="lg:col-span-6 flex justify-center">
            <div
              ref={badgeRef}
              className={`w-full max-w-md bg-white rounded-3xl p-8 border-2 border-slate-200 shadow-2xl relative transition-all duration-500 ${
                isStamping ? "scale-95 opacity-50 blur-xs" : "scale-100 opacity-100"
              }`}
            >
              {/* Official Seal Ring Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-6 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white p-1 border border-slate-200 shadow-md flex items-center justify-center shrink-0 overflow-hidden">
                    <img
                      src="/logo.jpg"
                      alt="B4Q Management Ltd Logo"
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base leading-tight">
                      B4Q Management Ltd.
                    </h3>
                    <p className="text-[11px] text-slate-500 font-mono">
                      UK • IN • US • SG
                    </p>
                  </div>
                </div>

                <div className="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-xs font-mono font-bold flex items-center gap-1.5 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>VERIFIED</span>
                </div>
              </div>

              {/* Certificate Scope & Body */}
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-slate-400 tracking-wider">
                    Certified Organisation
                  </span>
                  <h4 className="text-xl font-bold text-[#251574] leading-snug mt-0.5">
                    {companyName || "Your Organisation Name"}
                  </h4>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                  <span className="text-[10px] font-mono font-bold uppercase text-[#008AD8] tracking-wider">
                    ISO Standard Achieved
                  </span>
                  <div className="text-lg font-bold text-slate-900 mt-0.5">
                    {standard}
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    Accredited Management System Scope compliant with international ISO standards.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-mono block">Certificate No.</span>
                    <span className="font-mono font-bold text-slate-800">{certId}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-mono block">Accreditation</span>
                    <span className="font-semibold text-emerald-700 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      Exemplar Global
                    </span>
                  </div>
                </div>
              </div>

              {/* Stamp Seal Ribbon */}
              {isStamped && (
                <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span>Official Monogram Stamp Applied</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-rose-50 border border-rose-200 text-[#FF4D5A] flex items-center justify-center font-bold text-xs shadow-xs">
                    ★ ISO
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
