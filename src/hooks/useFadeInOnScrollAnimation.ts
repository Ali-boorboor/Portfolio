import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

type useFadeInOnScrollAnimationProps = {
  y?: number;
  duration?: number;
  delay?: number;
  start?: string;
  toggleActions?: string;
};

const useFadeInOnScrollAnimation = ({
  y = 100,
  duration = 0.8,
  delay = 0,
  start = "top 80%",
  toggleActions = "play reverse play reverse",
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
        toggleActions,
      },
    });
  }, []);

  return { animatedSectionRef };
};

export default useFadeInOnScrollAnimation;
