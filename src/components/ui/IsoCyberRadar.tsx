"use client";

import { useEffect, useRef, useState } from "react";
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
  Cpu,
  Layers,
  FileText,
  Activity
} from "lucide-react";
import Link from "next/link";

export default function IsoCyberRadar() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeNode, setActiveNode] = useState(0);

  const nodes = [
    {
      id: "iso-9001",
      code: "ISO 9001:2015",
      title: "Quality Management System",
      badge: "Quality Gold Standard",
      color: "#008AD8",
      threeColor: 0x008ad8,
      icon: ShieldCheck,
      description: "The global benchmark for operational consistency, customer satisfaction, and risk-based management.",
      stats: [
        { label: "High Level Structure", value: "Clause 4-10" },
        { label: "Audit Focus", value: "Customer & Process" },
        { label: "Accreditation", value: "Exemplar Global" }
      ],
      highlights: [
        "Risk-Based Process Control Evaluation",
        "Customer Satisfaction & Feedback Metrics",
        "Continual Improvement & Corrective Actions"
      ]
    },
    {
      id: "iso-27001",
      code: "ISO 27001:2022",
      title: "Information Security (ISMS)",
      badge: "93 Cyber Controls",
      color: "#FF4D5A",
      threeColor: 0xff4d5a,
      icon: Lock,
      description: "Modernized Annex A framework protecting cloud infrastructure, enterprise data, and cyber resilience.",
      stats: [
        { label: "Control Framework", value: "93 Controls" },
        { label: "Control Themes", value: "4 Domains" },
        { label: "Cloud Controls", value: "Threat & DLP" }
      ],
      highlights: [
        "Annex A 93 Control Verification (2022 Rev)",
        "Threat Intelligence & Cloud Security (5.7, 5.23)",
        "Statement of Applicability (SoA) Audit"
      ]
    },
    {
      id: "iso-14001",
      code: "ISO 14001:2015",
      title: "Environmental Management",
      badge: "ESG & Sustainability",
      color: "#10B981",
      threeColor: 0x10b981,
      icon: Leaf,
      description: "Systematic framework for carbon footprint reduction, resource efficiency, and ESG compliance.",
      stats: [
        { label: "Environmental Scope", value: "Aspects/Impacts" },
        { label: "Perspective", value: "Life Cycle" },
        { label: "Compliance", value: "Legal Obligations" }
      ],
      highlights: [
        "Aspect & Impact Evaluation Matrix",
        "Life-Cycle Perspective in Procurement",
        "Emergency Preparedness & Response Audit"
      ]
    },
    {
      id: "iso-45001",
      code: "ISO 45001:2018",
      title: "Occupational Health & Safety",
      badge: "Workplace Safety",
      color: "#F59E0B",
      threeColor: 0xf59e0b,
      icon: HeartPulse,
      description: "Proactive hazard mitigation, workforce wellbeing, and zero-accident operational safety.",
      stats: [
        { label: "Safety Framework", value: "Hazard Hierarchy" },
        { label: "Worker Involvement", value: "Consultation 5.4" },
        { label: "Target", value: "Zero Incidents" }
      ],
      highlights: [
        "Worker Consultation & Participation (Clause 5.4)",
        "Hazard Identification & Hierarchy of Controls",
        "Incident Investigation & Emergency Drills"
      ]
    }
  ];

  const currentNode = nodes[activeNode];

  // Three.js WebGL Holographic Cyber Core Setup
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // Dynamic Color Wireframe Core
    const geo = new THREE.IcosahedronGeometry(1.4, 2);
    const mat = new THREE.MeshBasicMaterial({
      color: currentNode.threeColor,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const sphere = new THREE.Mesh(geo, mat);
    group.add(sphere);

    // Inner Core Octahedron
    const coreGeo = new THREE.OctahedronGeometry(0.8, 0);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.8,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    group.add(core);

    // Orbiting Ring
    const ringGeo = new THREE.TorusGeometry(2.0, 0.015, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: currentNode.threeColor,
      transparent: true,
      opacity: 0.7,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 3;
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

      group.rotation.y += 0.005 + mouseX * 0.01;
      group.rotation.x += 0.003 + mouseY * 0.01;
      core.rotation.y -= 0.01;
      ring.rotation.z += 0.004;

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
  }, [activeNode]);

  return (
    <section className="py-24 md:py-36 bg-[#100836] text-white relative overflow-hidden z-10">
      {/* Background Cyber Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#008AD8]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs font-mono font-semibold uppercase tracking-wider mb-4 shadow-lg">
            <Sparkles className="w-4 h-4 text-[#FF4D5A]" />
            <span>Interactive 3D ISO Scope Cyber Radar</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Explore B4Q Accredited Certification Scope
          </h2>
          <p className="text-slate-300 text-sm md:text-base mt-3">
            Click any orbiting ISO standard node to update the central 3D WebGL hologram and inspect live audit metrics.
          </p>
        </div>

        {/* Orbiting Nodes Selector Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {nodes.map((node, idx) => {
            const Icon = node.icon;
            const isActive = activeNode === idx;
            return (
              <button
                key={node.id}
                onClick={() => setActiveNode(idx)}
                className={`p-5 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden group ${
                  isActive
                    ? "bg-white/15 border-sky-400/80 shadow-[0_0_30px_rgba(56,189,248,0.4)] scale-[1.03]"
                    : "bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-md"
                    style={{ backgroundColor: node.color }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-white/10 text-slate-200">
                    {node.badge}
                  </span>
                </div>
                <div className="font-mono text-xs font-bold text-sky-300 mb-1">{node.code}</div>
                <div className="text-sm font-bold text-white truncate">{node.title}</div>
              </button>
            );
          })}
        </div>

        {/* Center Interactive WebGL & Details Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 backdrop-blur-xl shadow-2xl">

          {/* Left WebGL 3D Hologram Radar Canvas */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
            <div className="w-full h-[360px] md:h-[420px]" ref={mountRef} />
            <div className="absolute bottom-2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-mono text-sky-300 flex items-center gap-2">
              <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              <span>LIVE 3D HOLOGRAM RADAR • {currentNode.code}</span>
            </div>
          </div>

          {/* Right Active Standard Details Panel */}
          <div className="lg:col-span-6 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentNode.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 font-mono text-xs font-bold mb-2">
                    {currentNode.badge}
                  </div>
                  <h3 className="text-2xl md:text-4xl font-extrabold text-white leading-tight">
                    {currentNode.title}
                  </h3>
                  <p className="text-slate-300 text-sm md:text-base mt-2 leading-relaxed">
                    {currentNode.description}
                  </p>
                </div>

                {/* Stat Badges Grid */}
                <div className="grid grid-cols-3 gap-3">
                  {currentNode.stats.map((s, i) => (
                    <div key={i} className="p-3 bg-white/5 rounded-xl border border-white/10 text-center">
                      <div className="text-sm font-bold text-white">{s.value}</div>
                      <div className="text-[10px] text-slate-400 font-mono mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Audit Highlights */}
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400">
                    Core Audit Highlights:
                  </div>
                  {currentNode.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs md:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    href={`/certification/${currentNode.id}`}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#008AD8] to-[#251574] text-white font-bold text-xs hover:shadow-xl hover:scale-[1.02] transition-all shadow-md"
                  >
                    <span>Inspect Full Standard Specification</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
