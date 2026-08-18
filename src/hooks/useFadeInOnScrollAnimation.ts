import { gsap, useGSAP } from "@/lib/gsap";
import { useRef } from "react";

type useFadeInOnScrollAnimationProps = {
  y?: number;
  duration?: number;
  delay?: number;
  start?: string;
};

const useFadeInOnScrollAnimation = ({
  y = 100,
  duration = 0.8,
  delay = 0,
  start = "top 80%",
}: useFadeInOnScrollAnimationProps) => {
  const animatedSectionRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.from(animatedSectionRef.current, {
      y,
      delay,
      duration,
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: animatedSectionRef.current,
        start,
      },
    });
  }, []);

  return { animatedSectionRef };
};

export default useFadeInOnScrollAnimation;
