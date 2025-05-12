import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const GlowingCircle = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    rendererRef.current = renderer;

    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create circle geometry
    const geometry = new THREE.TorusGeometry(5, 0.3, 16, 100);
    const material = new THREE.MeshBasicMaterial({
      color: 0x7b61ff,
      transparent: true,
      opacity: 0.8,
    });
    const circle = new THREE.Mesh(geometry, material);
    scene.add(circle);

    // Add glow effect
    const glowGeometry = new THREE.TorusGeometry(5, 0.5, 16, 100);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x4789ff,
      transparent: true,
      opacity: 0.3,
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    scene.add(glow);

    camera.position.z = 15;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      circle.rotation.z += 0.002;
      glow.rotation.z -= 0.001;
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 -z-10" />;
};