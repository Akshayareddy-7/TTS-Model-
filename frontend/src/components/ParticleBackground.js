import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: {
            push: { quantity: 3 },
            repulse: { distance: 120, duration: 0.4 },
          },
        },
        particles: {
          color: { value: ["#667eea", "#764ba2", "#f093fb"] },
          links: {
            color: "#667eea",
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            speed: 1.5,
          },
          number: {
            density: { enable: true, area: 800 },
            value: 60,
          },
          opacity: { value: 0.6 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 4 } },
        },
      }}
    />
  );
};

export default ParticleBackground;
