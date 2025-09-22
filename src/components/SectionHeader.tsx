import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

type SectionHeaderProps = { title: string };

const SectionHeader = ({ title }: SectionHeaderProps) => {
  const splitTextRef = useRef(null);

  useGSAP(() => {
    document.fonts.ready.then(() => {
      const splitText = SplitText.create(splitTextRef.current, {
        type: "lines",
      });

      gsap.from(splitText.lines, {
        y: -100,
        opacity: 0,
        rotate: 45,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: splitTextRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });
    });
  }, []);

  return (
    <div className="flex flex-col gap-2 mb-10 md:mb-20">
      <h3 className="text-xl md:text-3xl font-bold" ref={splitTextRef}>
        {title}
      </h3>
      <div className="relative w-full h-1 bg-primary rounded-full">
        <span className="absolute inset-0 m-auto h-2.5 w-6 bg-foreground rounded-full"></span>
      </div>
    </div>
  );
};

export default SectionHeader;
