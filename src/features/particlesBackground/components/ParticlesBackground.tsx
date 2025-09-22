import Particles from "@tsparticles/react";
import useInitializeParticles from "@/features/particlesBackground/hooks/useInitializeParticles";
import useBackgroundImageTransition from "@/features/particlesBackground/hooks/useBackgroundImageTransition";
import { loadSnowPreset } from "@tsparticles/preset-snow";

const baseParticleBackgroundOptions = {
  preset: "snow",
  fpsLimit: 60,
  fullScreen: { zIndex: -50 },
  particles: { number: { value: 60 } },
};

const ParticlesBackground = () => {
  const { isParticleInitialized } = useInitializeParticles(loadSnowPreset);
  const { overlayRef, backgroundImage } = useBackgroundImageTransition();

  if (!isParticleInitialized) return null;

  return (
    <>
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-background opacity-0 pointer-events-none z-50"
      />

      <Particles
        options={{
          ...baseParticleBackgroundOptions,
          background: {
            image: backgroundImage,
            position: "center",
            repeat: "no-repeat",
            size: "cover",
          },
        }}
      />
    </>
  );
};

export default ParticlesBackground;
