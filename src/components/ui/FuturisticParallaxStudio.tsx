"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Leaf,
  HeartPulse,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  FileText,
  ClipboardCheck,
  Award,
  RefreshCw,
  FileCheck2,
  Activity,
  Zap,
  Globe2,
  Eye,
  Layers
} from "lucide-react";
import Link from "next/link";

export default function FuturisticParallaxStudio() {
  const horizontalTriggerRef = useRef<HTMLDivElement>(null);
  const horizontalTrackRef = useRef<HTMLDivElement>(null);
  const verticalStackRef = useRef<HTMLDivElement>(null);
  const threeCanvasRef = useRef<HTMLDivElement>(null);

  const [activeIsoIndex, setActiveIsoIndex] = useState(0);
  const [activeStepModal, setActiveStepModal] = useState<number | null>(null);

  // 1. Three.js WebGL Hologram Sphere Setup
  useEffect(() => {
    const container = threeCanvasRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 3.8;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Glowing Holographic Sphere Matrix
    const group = new THREE.Group();
    scene.add(group);

    const geo = new THREE.IcosahedronGeometry(1.3, 3);
    const mat = new THREE.MeshBasicMaterial({
      color: 0x008ad8,
      wireframe: true,
      transparent: true,
      opacity: 0.55,
    });
    const sphere = new THREE.Mesh(geo, mat);
    group.add(sphere);

    // Inner Core Geometry
    const coreGeo = new THREE.DodecahedronGeometry(0.7, 0);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0xff4d5a,
      wireframe: true,
      transparent: true,
      opacity: 0.8,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    group.add(core);

    // Orbit Ring
    const ringGeo = new THREE.TorusGeometry(1.9, 0.012, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x10b981, transparent: true, opacity: 0.7 });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2.5;
    group.add(ring);

    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / container.clientWidth) * 2 - 1;
      mouseY = -((e.clientY - rect.top) / container.clientHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);

    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      group.rotation.y += 0.006 + mouseX * 0.008;
      group.rotation.x += 0.003 + mouseY * 0.008;
      core.rotation.y -= 0.01;
      ring.rotation.z += 0.005;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(frameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // 2. GSAP ScrollTrigger Dual-Axis Parallax Engine
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const horizontalTrack = horizontalTrackRef.current;
    const horizontalTrigger = horizontalTriggerRef.current;
    const verticalStack = verticalStackRef.current;

    const ctx = gsap.context(() => {
      // Horizontal Card Track Parallax Pin
      if (horizontalTrack && horizontalTrigger) {
        const totalHorizontalScroll = horizontalTrack.scrollWidth - window.innerWidth + 160;

        gsap.to(horizontalTrack, {
          x: () => -totalHorizontalScroll,
          ease: "none",
          scrollTrigger: {
            trigger: horizontalTrigger,
            pin: true,
            scrub: 0.5, // Slightly faster, smooth horizontal cards
            end: () => `+=${totalHorizontalScroll + 400}`,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const idx = Math.min(3, Math.floor(self.progress * 4));
              setActiveIsoIndex(idx);
            }
          }
        });
      }

      // Vertical Cards Bottom-to-Top Slow Parallax Stacking
      if (verticalStack) {
        const cards = verticalStack.querySelectorAll(".vertical-parallax-card");
        cards.forEach((card, idx) => {
          gsap.fromTo(
            card,
            { y: 120, opacity: 0.2, scale: 0.94 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                end: "top 45%",
                scrub: 1.2, // Slower, silky vertical scroll timing so buttons stay visible!
              }
            }
          );
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const isoCards = [
    {
      id: "iso-9001",
      code: "ISO 9001:2015",
      name: "Quality Management System",
      badge: "Global Benchmark",
      gradient: "from-[#251574] via-[#100836] to-[#008AD8]/40",
      accent: "#008AD8",
      icon: ShieldCheck,
      desc: "Comprehensive quality governance, risk-based process control, and customer satisfaction metrics.",
      stats: ["Clause 4–10 HLS", "Risk-Based Audit", "Exemplar Global"],
    },
    {
      id: "iso-27001",
      code: "ISO 27001:2022",
      name: "Information Security (ISMS)",
      badge: "93 Cyber Controls",
      gradient: "from-[#251574] via-[#1a0933] to-[#FF4D5A]/40",
      accent: "#FF4D5A",
      icon: Lock,
      desc: "Annex A 93 modernized controls protecting cloud infrastructure, data privacy, and threat intelligence.",
      stats: ["Threat Intelligence (5.7)", "Cloud Security (5.23)", "SoA Verification"],
    },
    {
      id: "iso-14001",
      code: "ISO 14001:2015",
      name: "Environmental Management",
      badge: "ESG & Sustainability",
      gradient: "from-[#100836] via-[#052e24] to-[#10B981]/40",
      accent: "#10B981",
      icon: Leaf,
      desc: "Aspect and impact matrix, carbon reduction framework, and life-cycle environmental compliance.",
      stats: ["Life-Cycle View", "Aspect/Impact Matrix", "ESG Alignment"],
    },
    {
      id: "iso-45001",
      code: "ISO 45001:2018",
      name: "Occupational Health & Safety",
      badge: "Zero Incident Safety",
      gradient: "from-[#251574] via-[#2d1b00] to-[#F59E0B]/40",
      accent: "#F59E0B",
      icon: HeartPulse,
      desc: "Proactive hazard identification, worker consultation (Clause 5.4), and zero-accident operational protocols.",
      stats: ["Worker Consultation 5.4", "Hazard Hierarchy", "OHS Governance"],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Application & Man-Day Proposal",
      timeline: "Days 1–3",
      icon: FileText,
      color: "border-sky-400/40 bg-white/90",
      summary: "Submit scope and site details. Receive a transparent IAF MD5 man-day audit proposal with zero hidden fees.",
      deliverable: "Fixed-Fee Multi-Year Proposal (PDF)",
      sampleData: {
        headline: "IAF MD5 Man-Day Estimation Matrix",
        detail: "Standardized audit day calculations based on headcount, site risk profile, and ISO scope complexity.",
      },
    },
    {
      step: "02",
      title: "Stage 1 Readiness Audit",
      timeline: "Week 2",
      icon: ClipboardCheck,
      color: "border-indigo-400/40 bg-white/90",
      summary: "Impartial evaluation of management system documentation, policy alignment, and scope readiness.",
      deliverable: "Stage 1 Audit Readiness Report",
      sampleData: {
        headline: "Documentation Hygiene & Clause Gap Analysis",
        detail: "Comprehensive review of Clause 4 to 10 mandatory documented information and management review records.",
      },
    },
    {
      step: "03",
      title: "Stage 2 Certification Audit",
      timeline: "Weeks 3–4",
      icon: ShieldCheck,
      color: "border-[#251574]/40 bg-white/90",
      summary: "Comprehensive on-site or hybrid audit verifying operational execution, evidence logs, and technical compliance.",
      deliverable: "Stage 2 Formal Audit Log & NCR Findings",
      sampleData: {
        headline: "On-site / Hybrid Evidence Audit Log",
        detail: "Lead auditor interviews, site sampling, process metrics, and minor/major non-conformance categorization.",
      },
    },
    {
      step: "04",
      title: "Technical Decision & QR Issuance",
      timeline: "Day 30",
      icon: Award,
      color: "border-rose-400/40 bg-white/90",
      summary: "Independent technical review committee verifies audit findings. Accredited certificate issued with QR seal.",
      deliverable: "Accredited ISO Certificate with QR Code Seal",
      sampleData: {
        headline: "Independent Technical Committee Approval",
        detail: "Unbiased technical review, certificate monogram generation, and live indexing on public registry.",
      },
    },
    {
      step: "05",
      title: "Annual Surveillance Audits",
      timeline: "Years 1 & 2",
      icon: RefreshCw,
      color: "border-emerald-400/40 bg-white/90",
      summary: "Brief yearly check-in audits in Years 1 & 2 to ensure continuous system health and standard adherence.",
      deliverable: "Surveillance Audit Confirmation Report",
      sampleData: {
        headline: "Continuous System Health Verification",
        detail: "Check-in audits verifying ongoing corrective actions, continual improvement, and active registry status.",
      },
    },
    {
      step: "06",
      title: "Triennial Recertification Cycle",
      timeline: "Year 3",
      icon: FileCheck2,
      color: "border-amber-400/40 bg-white/90",
      summary: "Full triennial review at Year 3 to renew certificate validity for another 3-year cycle.",
      deliverable: "3-Year Certificate Renewal Decision",
      sampleData: {
        headline: "3-Year Triennial Governance Renewal",
        detail: "Full system recertification audit evaluating 3-year performance trends and scope modifications.",
      },
    },
  ];

  return (
    <div className="bg-slate-900 text-white overflow-hidden relative">
      
      {/* SECTION 1: 3D WEBGL HOLOGRAM & HORIZONTAL PARALLAX SCOPE DECK */}
      <div ref={horizontalTriggerRef} className="relative z-10 bg-[#0c0628] overflow-hidden min-h-screen">
        {/* Background Cyber Grid & Glow */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="absolute top-10 left-1/3 w-[600px] h-[600px] bg-[#008AD8]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="h-screen flex flex-col justify-between py-8 px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
          
          {/* Top Header Controls Bar */}
          <div className="flex items-center justify-between shrink-0 pt-4">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-mono text-sky-300 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-[#FF4D5A] animate-pulse" />
              <span>3D WEBGL ISO SCOPE PARALLAX STUDIO</span>
            </div>

            {/* Live Iso Track Dots */}
            <div className="hidden sm:flex items-center gap-3 text-xs font-mono text-slate-300">
              <span>SCOPE TRACK</span>
              <div className="flex gap-2">
                {isoCards.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeIsoIndex === idx
                        ? "w-8 bg-gradient-to-r from-sky-400 to-rose-500 shadow-[0_0_12px_rgba(56,189,248,0.8)]"
                        : "w-2.5 bg-white/20"
                    }`}
                  />
                ))}
              </div>
              <span className="font-bold text-white">{activeIsoIndex + 1} / 4</span>
            </div>
          </div>

          {/* Center Content: Left 3D WebGL Canvas + Right Parallax Cards Track */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-4">
            
            {/* Left 3D Holographic WebGL Sphere Viewport */}
            <div className="lg:col-span-4 hidden lg:flex flex-col items-center justify-center relative bg-white/5 rounded-3xl p-6 border border-white/10 backdrop-blur-xl">
              <div className="w-full h-[320px]" ref={threeCanvasRef} />
              <div className="px-4 py-1.5 rounded-full bg-black/60 border border-white/20 text-[10px] font-mono text-sky-300 flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                <span>INTERACTIVE THREE.JS MATRIX</span>
              </div>
            </div>

            {/* Right Horizontal Parallax Track */}
            <div className="lg:col-span-8 overflow-hidden">
              <div ref={horizontalTrackRef} className="flex gap-6 items-center shrink-0 pr-24">
                
                {/* Intro Headline Card */}
                <div className="w-[320px] sm:w-[400px] shrink-0 space-y-4 pr-4">
                  <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Awwwards 3D Motion Deck</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                    Fast Parallax ISO Scope Expedition.
                  </h2>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Audited by B4Q accredited lead auditors across UK, India, USA & Singapore. Scroll horizontally to explore standard highlights.
                  </p>
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Scroll Down to Expedite Right →</span>
                  </div>
                </div>

                {/* 4 Interactive ISO Parallax Cards */}
                {isoCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={card.id}
                      className={`w-[320px] sm:w-[380px] h-[480px] shrink-0 rounded-3xl p-7 bg-gradient-to-b ${card.gradient} backdrop-blur-2xl border border-white/20 shadow-2xl flex flex-col justify-between relative group hover:scale-[1.02] transition-all duration-300`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-5">
                          <div
                            className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg"
                            style={{ backgroundColor: card.accent }}
                          >
                            <Icon className="w-6 h-6" />
                          </div>
                          <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] font-mono font-bold text-slate-200">
                            {card.badge}
                          </span>
                        </div>

                        <div className="text-xs font-mono font-bold text-sky-300 mb-1">{card.code}</div>
                        <h3 className="text-2xl font-bold text-white mb-3">{card.name}</h3>
                        <p className="text-xs text-slate-300 leading-relaxed mb-4">{card.desc}</p>

                        <div className="space-y-2 pt-2 border-t border-white/10">
                          {card.stats.map((s, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-slate-200 font-mono">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                              <span>{s}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-white/10">
                        <Link
                          href={`/certification/${card.id}`}
                          className="w-full inline-flex items-center justify-between px-5 py-3 rounded-2xl bg-white text-slate-900 font-bold text-xs hover:bg-sky-400 hover:text-white transition-all shadow-md"
                        >
                          <span>Explore Standard Specs</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  );
                })}

              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 shrink-0 pb-2">
            <span>B4Q MANAGEMENT LTD • GLOBAL ACCREDITED SCOPE</span>
            <span>EXEMPLAR GLOBAL PARTNER</span>
          </div>

        </div>
      </div>

      {/* SECTION 2: SLOW SMOOTH VERTICAL PARALLAX STACKING (6-STEP LIFECYCLE CARDS) */}
      <div className="py-28 md:py-40 bg-slate-50 text-slate-900 relative z-20 shadow-[0_-30px_60px_rgba(0,0,0,0.15)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-[#251574] text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
              <Zap className="w-4 h-4 text-[#008AD8]" />
              <span>Smooth Vertical Parallax Stacking Cards</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              6-Step Accredited ISO Certification Lifecycle
            </h2>
            <p className="text-slate-600 text-sm md:text-base mt-3">
              Cards rise smoothly from bottom to top with slow parallax timing. Click any card&apos;s &ldquo;View Sample Deliverable&rdquo; button to inspect live sample data.
            </p>
          </div>

          {/* Vertical Parallax Cards Stack */}
          <div ref={verticalStackRef} className="space-y-8 max-w-5xl mx-auto">
            {processSteps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.step}
                  className={`vertical-parallax-card ${s.color} rounded-3xl p-8 md:p-10 border shadow-xl transition-all duration-500 relative overflow-hidden group hover:shadow-2xl hover:scale-[1.01]`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    
                    {/* Left Step Header */}
                    <div className="md:col-span-8 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-[#251574] text-white flex items-center justify-center font-extrabold font-mono text-lg shadow-md shrink-0">
                          {s.step}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono font-bold text-[#008AD8] uppercase tracking-wider">
                              PHASE {s.step}
                            </span>
                            <span className="px-3 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[11px] font-mono font-semibold">
                              {s.timeline}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold text-slate-900 mt-0.5">{s.title}</h3>
                        </div>
                      </div>

                      <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                        {s.summary}
                      </p>

                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-mono font-semibold border border-slate-200">
                        <FileText className="w-4 h-4 text-[#FF4D5A]" />
                        <span>Deliverable: {s.deliverable}</span>
                      </div>
                    </div>

                    {/* Right Interactive View Sample Action Button */}
                    <div className="md:col-span-4 flex flex-col items-start md:items-end justify-center space-y-3">
                      <button
                        onClick={() => setActiveStepModal(idx)}
                        className="w-full sm:w-auto px-6 py-3.5 bg-[#251574] hover:bg-[#008AD8] text-white font-bold text-xs rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 group-hover:scale-[1.03]"
                      >
                        <Eye className="w-4 h-4 text-sky-300" />
                        <span>View Sample Deliverable</span>
                      </button>

                      <span className="text-[11px] font-mono text-slate-500">
                        IAF Aligned • ISO/IEC 17021-1
                      </span>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* SAMPLE DELIVERABLE MODAL DRAWER */}
      <AnimatePresence>
        {activeStepModal !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActiveStepModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white text-slate-900 rounded-3xl p-8 max-w-xl w-full shadow-2xl border border-slate-200 space-y-6 relative overflow-hidden"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#251574] text-white flex items-center justify-center font-bold font-mono">
                    {processSteps[activeStepModal].step}
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold text-[#008AD8]">SAMPLE AUDIT ARTIFACT</div>
                    <h4 className="text-lg font-bold text-slate-900">{processSteps[activeStepModal].title}</h4>
                  </div>
                </div>
                <button
                  onClick={() => setActiveStepModal(null)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 font-bold"
                >
                  ✕
                </button>
              </div>

              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <div className="text-sm font-bold text-[#251574]">
                  {processSteps[activeStepModal].sampleData.headline}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {processSteps[activeStepModal].sampleData.detail}
                </p>
                <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Deliverable Artifact: {processSteps[activeStepModal].deliverable}</span>
                  <span className="text-emerald-600 font-bold">✓ Verified IAF MD Table</span>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <Link
                  href="/get-a-quote"
                  className="px-6 py-3 bg-[#FF4D5A] hover:bg-rose-600 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-2"
                >
                  <span>Request Custom Audit Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
