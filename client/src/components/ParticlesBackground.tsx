import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function ParticlesBackground({ dark }: { dark: boolean }) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  const backgroundColor = dark ? '#020617' : '#ffffff';
  const particleColor = dark ? '#818cf8' : '#c7d2fe';

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    >
      <Particles
        id='tsparticles'
        className='h-full w-full'
        options={{
          background: { color: { value: backgroundColor } },
          fpsLimit: 60,
          particles: {
            number: { value: 50 },
            color: { value: particleColor },
            links: {
              enable: true,
              color: particleColor,
              distance: 160,
              opacity: dark ? 0.4 : 0.25,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.6,
            },
            size: {
              value: { min: 1, max: 2 },
            },
            opacity: {
              value: dark ? 0.6 : 0.4,
            },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: 'grab' } },
            modes: { grab: { distance: 140, links: { opacity: 1 } } },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}
