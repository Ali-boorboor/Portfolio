import { useEffect, useState } from "react";
import { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";

export type PresetLoader = (
  engine: Engine,
  refresh?: boolean
) => Promise<Container | void>;

const useInitializeParticles = (presetLoader: PresetLoader) => {
  const [isParticleInitialized, setIsParticleInitialized] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      try {
        await presetLoader(engine);

        setIsParticleInitialized(true);
      } catch (error) {
        console.error("Failed to initialize particles engine", error);
      }
    });
  }, [presetLoader]);

  return { isParticleInitialized };
};

export default useInitializeParticles;
