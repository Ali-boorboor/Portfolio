import gsap from "gsap";
import useThemeStore from "@/stores/useThemeStore";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import type { Theme } from "@/types";

const getThemeBasedImage = (theme: Theme) => {
  if (theme === "dark") {
    return "linear-gradient(rgba(255,255,255,0.04), rgba(255,255,255,0.1)), url('/particles-images/dark-mountain.png')";
  }

  return "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.1)), url('/particles-images/light-mountain.png')";
};

const useBackgroundImageTransition = () => {
  const [backgroundImage, setBackgroundImage] = useState<string>("");
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const { theme } = useThemeStore();

  useEffect(() => {
    const firstRenderImage = getThemeBasedImage(theme);
    setBackgroundImage(firstRenderImage);
  }, []);

  useGSAP(
    () => {
      if (!overlayRef.current) return;

      const newImage = getThemeBasedImage(theme);

      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.inOut",
        onComplete: () => {
          setBackgroundImage(newImage);
          gsap.to(overlayRef.current, {
            opacity: 0,
            duration: 0.3,
            delay: 0.05,
            ease: "power2.inOut",
          });
        },
      });
    },
    { dependencies: [theme] }
  );

  return { overlayRef, backgroundImage };
};

export default useBackgroundImageTransition;
