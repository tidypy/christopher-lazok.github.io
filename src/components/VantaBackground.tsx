'use client';

import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import FOG from 'vanta/dist/vanta.fog.min';

interface VantaEffect {
  destroy: () => void;
}

const VantaBackground = ({ children }: { children: React.ReactNode }) => {
  const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        FOG({
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
        })
      );
    }
    // On unmount, destroy the effect to prevent memory leaks
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="relative w-full min-h-screen">
      {children}
    </div>
  );
};

export default VantaBackground;