'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';




const VantaBackground = ({ children }: { children: React.ReactNode }) => {
  const vantaRef = useRef(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let vantaEffect: any = null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let FOG: any = null;

    const loadVanta = async () => {
      try {
        const vantaFog = (await import('vanta/dist/vanta.fog.min')).default;
        FOG = vantaFog;

        if (vantaRef.current && FOG) {
          vantaEffect = FOG({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            highlightColor: 0x81e6d9, // A teal/cyan color
            midtoneColor: 0x319795, // A darker teal
            lowlightColor: 0x2c5282, // A dark blue
            baseColor: 0x1a202c, // A very dark gray/blue
            blurFactor: 0.5,
            speed: 1.0,
            zoom: 0.8,
          });
        }
      } catch (error) {
        console.error("Failed to load Vanta:", error);
      }
    };

    loadVanta();

    // On unmount, destroy the effect to prevent memory leaks
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <div ref={vantaRef} className="relative w-full min-h-screen">
      {children}
    </div>
  );
};

export default VantaBackground;