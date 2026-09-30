"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeHologramCube({ title = "ISO 27001:2022" }: { title?: string }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group holding the 3D Holographic Cube & Rings
    const cubeGroup = new THREE.Group();
    scene.add(cubeGroup);

    // Outer Wireframe Box
    const boxGeo = new THREE.BoxGeometry(1.6, 1.6, 1.6);
    const boxMat = new THREE.MeshBasicMaterial({
      color: 0x008ad8,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const cube = new THREE.Mesh(boxGeo, boxMat);
    cubeGroup.add(cube);

    // Inner Glowing Core Octahedron
    const coreGeo = new THREE.OctahedronGeometry(0.9, 0);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0xff4d5a,
      wireframe: true,
      transparent: true,
      opacity: 0.7,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    cubeGroup.add(core);

    // Orbital Ring
    const ringGeo = new THREE.RingGeometry(1.4, 1.45, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.6,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;
    cubeGroup.add(ring);

    // Mouse interactive rotation
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

      cubeGroup.rotation.x += 0.005 + mouseY * 0.01;
      cubeGroup.rotation.y += 0.008 + mouseX * 0.01;
      core.rotation.y -= 0.012;

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

  return (
    <div className="relative w-full h-[300px] flex items-center justify-center">
      <div className="absolute w-56 h-56 bg-[#251574]/20 rounded-full blur-3xl pointer-events-none" />
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase font-semibold text-slate-400 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200">
        3D Interactive Model • {title}
      </div>
    </div>
  );
}
