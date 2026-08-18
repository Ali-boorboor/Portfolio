import useIntroAnimation from "@/components/templates/introSection/hooks/useIntroAnimation";
import TypeWriterEffect from "@/features/typewriterEffect";

const IntroSection = () => {
  const { containerRef } = useIntroAnimation();

  return (
    <div
      className="flex justify-center items-center h-svh container m-auto transform-gpu will-change-transform"
      id="intro-section"
    >
      <div
        className="text-xl md:text-4xl font-semibold space-y-2"
        ref={containerRef}
      >
        <h1 className="tracking-widest font-bold">
          سلام، من{" "}
          <span className="text-primary-foreground relative after:absolute after:inset-0 after:-z-10 after:w-full after:h-full after:bg-primary after:-skew-1 md:after:-skew-2 after:scale-105 after:rounded-md after:border">
            علی بوربور
          </span>{" "}
          هستم.
        </h1>
        <span> برنامه نویس </span>
        <TypeWriterEffect
          typeTexts={["فرانت‌‌اند", "وب"]}
          defaultText="فرانت‌‌اند"
        />
      </div>
    </div>
  );
};

export default IntroSection;
