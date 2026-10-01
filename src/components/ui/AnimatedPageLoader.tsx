"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function AnimatedPageLoader() {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fast, crisp loading counter (800ms)
    const duration = 800; // ms
    const startTime = performance.now();

    const updateCounter = (now: number) => {
      const elapsed = now - startTime;
      const current = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(current);

      if (current < 100) {
        requestAnimationFrame(updateCounter);
      } else {
        // Trigger smooth GSAP curtain exit
        const ctx = gsap.context(() => {
          const tl = gsap.timeline({
            onComplete: () => setIsDone(true),
          });

          tl.to(logoRef.current, {
            scale: 1.05,
            opacity: 0,
            duration: 0.3,
            ease: "power2.inOut",
          })
            .to(
              textRef.current,
              {
                y: -20,
                opacity: 0,
                duration: 0.25,
              },
              "<"
            )
            .to(overlayRef.current, {
              yPercent: -100,
              duration: 0.7,
              ease: "power4.inOut",
            });
        });

        return () => ctx.revert();
      }
    };

    requestAnimationFrame(updateCounter);
  }, []);

  if (isDone) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-between bg-white text-slate-900 px-6 py-12 select-none overflow-hidden"
    >
      {/* Soft Ambient Radial Background Glows (No heavy purple) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-50 rounded-full blur-3xl pointer-events-none opacity-80" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-rose-50 rounded-full blur-3xl pointer-events-none opacity-60" />

      {/* Top Header */}
      <div className="w-full flex justify-between items-center max-w-7xl font-mono text-xs uppercase tracking-widest text-slate-500 font-medium z-10">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          B4Q Management Ltd
        </span>
        <span className="text-[#008AD8] font-bold">Accredited ISO Body</span>
      </div>

      {/* Center Brand Identity - Matching Header Logo Exactly */}
      <div className="flex flex-col items-center gap-6 relative z-10">
        <div
          ref={logoRef}
          className="p-5 bg-white rounded-3xl border border-slate-200 shadow-xl flex items-center justify-center"
        >
          <img
            src="/logo.svg"
            alt="B4Q Management Logo"
            className="h-16 w-auto object-contain"
          />
        </div>

        <div ref={textRef} className="text-center space-y-1">
          <h2 className="text-2xl md:text-3xl font-serif font-bold tracking-tight text-[#251574]">
            B4Q <span className="text-[#008AD8] font-sans font-normal text-xl">Management</span>
          </h2>
          <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">
            Assured ISO Certification • UK | IN | US | SG
          </p>
        </div>
      </div>

      {/* Bottom Progress Bar & Counter */}
      <div className="w-full max-w-md relative z-10">
        <div className="flex justify-between items-center mb-2 font-mono text-xs text-slate-600 font-semibold">
          <span className="text-[#251574]">INITIALIZING PLATFORM</span>
          <span className="font-bold text-[#FF4D5A] text-sm">{progress}%</span>
        </div>
        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200 shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-[#251574] via-[#008AD8] to-[#FF4D5A] rounded-full transition-all duration-75 ease-out shadow-sm"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
