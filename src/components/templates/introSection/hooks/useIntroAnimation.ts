import { gsap } from "@/lib/gsap";
import useThemeStore from "@/stores/useThemeStore";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const useIntroAnimation = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { theme } = useThemeStore();

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(containerRef.current, {
        y: -40,
        opacity: 0,
        delay: 0.5,
        stagger: 0.5,
        ease: "power2.out",
      });

      tl.to(containerRef.current, {
        scale: 1.2,
        ease: "power2.out",
      });
    },
    { dependencies: [theme], revertOnUpdate: true },
  );

  return { containerRef };
};

export default useIntroAnimation;
