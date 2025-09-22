import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import type { UseTypeEffectAnimation } from "@/features/typewriterEffect/types";

const useTypeEffectAnimation = ({
  typeTexts,
  defaultText,
  typeSpeed = 1,
  delay = 0.5,
  ease = "power2.out",
}: UseTypeEffectAnimation) => {
  const textElementRef = useRef(null);

  useGSAP(() => {
    if (!textElementRef.current) return;

    const animationTimeline = gsap.timeline({ repeat: -1 });

    typeTexts.forEach((text) => {
      animationTimeline.to(textElementRef.current, {
        text: text,
        duration: typeSpeed,
        delay,
        ease,
      });
    });

    animationTimeline.to(textElementRef.current, {
      text: defaultText,
      duration: typeSpeed,
      delay,
      ease,
    });
  }, []);

  return { textElementRef };
};

export default useTypeEffectAnimation;
