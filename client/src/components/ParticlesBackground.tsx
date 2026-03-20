import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function ParticlesBackground({ dark }: any) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  const backgroundColor = dark ? '#020617' : '#ffffff';
  const particleColor = dark ? '#ffffff' : '#000000';

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
            number: { value: 60 },
            color: { value: particleColor },
            links: {
              enable: true,
              color: particleColor,
              distance: 180,
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.7,
            },
            size: {
              value: 2,
            },
            opacity: {
              value: 0.7,
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
