interface UseTypeEffectAnimation {
  ease?: gsap.EaseString | gsap.EaseFunction;
  typeTexts: string[];
  defaultText: string;
  typeSpeed?: number;
  delay?: number;
}

interface TypeWriterEffectProps extends UseTypeEffectAnimation {
  className?: string;
}

export type { UseTypeEffectAnimation, TypeWriterEffectProps };
