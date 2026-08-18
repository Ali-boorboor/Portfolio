import { gsap, SplitText, useGSAP } from "@/lib/gsap";
import { useRef } from "react";

const useAboutMeAnimation = () => {
  const splitTextRef = useRef(null);

  useGSAP(() => {
    document.fonts.ready.then(() => {
      const splitText = SplitText.create(splitTextRef.current, {
        type: "lines",
      });

      gsap.from(splitText.lines, {
        opacity: 0,
        x: 200,
        scale: 0.6,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: splitTextRef.current,
          start: "top 80%",
        },
      });
    });
  }, []);

  return { splitTextRef };
};

export default useAboutMeAnimation;
