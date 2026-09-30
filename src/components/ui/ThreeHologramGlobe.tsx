"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeHologramGlobe() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 4.5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group to hold globe assets
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // 1. Core Sphere (Wireframe Hologram Globe)
    const sphereGeo = new THREE.IcosahedronGeometry(1.6, 3);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: 0x008ad8,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const globeSphere = new THREE.Mesh(sphereGeo, sphereMat);
    globeGroup.add(globeSphere);

    // 2. Inner Glowing Core
    const innerGeo = new THREE.SphereGeometry(1.2, 32, 32);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x251574,
      transparent: true,
      opacity: 0.6,
    });
    const innerSphere = new THREE.Mesh(innerGeo, innerMat);
    globeGroup.add(innerSphere);

    // 3. Orbital Rings (ISO Audit Standards Orbits)
    const ringGeo1 = new THREE.TorusGeometry(2.1, 0.015, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xff4d5a,
      transparent: true,
      opacity: 0.7,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    globeGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(2.3, 0.01, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.6,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    globeGroup.add(ring2);

    // 4. Floating Node Particles (Global B4Q Hubs: UK, India, USA, Singapore)
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 1.6 + Math.random() * 0.4;

      particlePositions[i] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i + 2] = r * Math.cos(phi);
    }

    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );

    const particleMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.035,
      transparent: true,
      opacity: 0.8,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    globeGroup.add(particles);

    // Mouse Interaction Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / container.clientWidth) * 2 - 1;
      mouseY = -((event.clientY - rect.top) / container.clientHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth Rotation
      globeGroup.rotation.y += 0.003;
      globeGroup.rotation.x += 0.001;
      ring1.rotation.z += 0.005;
      ring2.rotation.z -= 0.004;

      // Mouse Lerp Interaction
      targetX += (mouseX * 0.5 - targetX) * 0.05;
      targetY += (mouseY * 0.5 - targetY) * 0.05;
      globeGroup.rotation.y += targetX * 0.02;
      globeGroup.rotation.x += targetY * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
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
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[380px] md:h-[480px] flex items-center justify-center">
      {/* Background Radial Glow */}
      <div className="absolute w-72 h-72 bg-[#008AD8]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute w-60 h-60 bg-[#FF4D5A]/10 rounded-full blur-3xl pointer-events-none" />

      {/* WebGL Canvas Container */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Futuristic Monogram Label Overlay */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-[11px] font-mono font-semibold text-sky-300 flex items-center gap-2 pointer-events-none shadow-xl">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span>3D GLOBAL AUDIT NETWORK • UK | IN | US | SG</span>
      </div>
    </div>
  );
}
