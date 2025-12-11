'use client';

import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function BubbleBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {init && (
        <Particles
          id="tsparticles"
          options={{
            fullScreen: { enable: false },
            background: {
              color: { value: "transparent" },
            },
            fpsLimit: 60,
            particles: {
              number: {
                value: 25, // number of bubbles
                density: {
                  enable: true, // just enable, no area key needed
                },
              },
              color: {
                value: ["#a3d5ff", "#e0f7ff", "#b3e0ff"], // gradient colors
              },
              shape: {
                type: "circle",
              },
              opacity: {
                value: 0.3,
              },
              size: {
                value: { min: 20, max: 60 }, // big bubbles
              },
              move: {
                enable: true,
                speed: 0.6,
                direction: "none",
                random: true,
                straight: false,
                outModes: { default: "out" },
              },
            },
            interactivity: {
              events: {
                onHover: { enable: false },
                onClick: { enable: false },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </div>
  );
}
