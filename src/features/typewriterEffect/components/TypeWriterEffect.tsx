import useTypeEffectAnimation from "@/features/typewriterEffect/hooks/useTypeEffectAnimation";
import type { TypeWriterEffectProps } from "@/features/typewriterEffect/types";

const TypeWriterEffect = ({
  className,
  ...animationProps
}: TypeWriterEffectProps) => {
  const { textElementRef } = useTypeEffectAnimation(animationProps);

  return (
    <span className={className} ref={textElementRef}>
      {animationProps.defaultText}
    </span>
  );
};

export default TypeWriterEffect;
