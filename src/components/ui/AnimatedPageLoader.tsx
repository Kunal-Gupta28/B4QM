"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function AnimatedPageLoader() {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate progress counter from 0 to 100
    const duration = 1200; // ms
    const startTime = performance.now();

    const updateCounter = (now: number) => {
      const elapsed = now - startTime;
      const current = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(current);

      if (current < 100) {
        requestAnimationFrame(updateCounter);
      } else {
        // Trigger GSAP exit curtain animation
        const ctx = gsap.context(() => {
          const tl = gsap.timeline({
            onComplete: () => setIsDone(true),
          });

          tl.to(logoRef.current, {
            scale: 1.1,
            opacity: 0,
            duration: 0.4,
            ease: "power2.inOut",
          })
            .to(textRef.current, {
              y: -30,
              opacity: 0,
              duration: 0.3,
            }, "<")
            .to(overlayRef.current, {
              yPercent: -100,
              duration: 0.8,
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
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-between bg-[#251574] text-white px-6 py-12 select-none overflow-hidden"
    >
      {/* Subtle Background Glow Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header */}
      <div className="w-full flex justify-between items-center max-w-7xl opacity-80 text-xs font-mono uppercase tracking-widest text-sky-200">
        <span>B4Q Management Ltd</span>
        <span>Accredited Certification Body</span>
      </div>

      {/* Center Brand Identity */}
      <div className="flex flex-col items-center gap-6 relative z-10">
        <div
          ref={logoRef}
          className="relative w-28 h-28 p-4 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl flex items-center justify-center"
        >
          <Image
            src="/logo.svg"
            alt="B4Q Logo"
            width={80}
            height={80}
            priority
            className="object-contain"
          />
        </div>

        <div ref={textRef} className="text-center">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white font-sans">
            B4Q Management Ltd.
          </h2>
          <p className="text-sm text-sky-200 font-medium mt-1">
            Assured Precision • Global Standards
          </p>
        </div>
      </div>

      {/* Bottom Progress Bar & Counter */}
      <div className="w-full max-w-md relative z-10">
        <div className="flex justify-between items-center mb-2 font-mono text-sm text-sky-200">
          <span>INITIALIZING PLATFORM</span>
          <span className="font-bold text-white text-base">{progress}%</span>
        </div>
        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/10">
          <div
            className="h-full bg-gradient-to-r from-sky-400 via-emerald-400 to-rose-500 rounded-full transition-all duration-75 ease-out shadow-[0_0_12px_rgba(56,189,248,0.8)]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
