import { gsap, useGSAP } from "@/lib/gsap";
import { useRef } from "react";

const useMenuScrollAnimation = () => {
  const navMenuRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.to(navMenuRef.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top-=50",
        onEnter: () => {
          navMenuRef.current?.classList.add(
            "!py-2.5",
            "bg-background",
            "shadow-lg",
            "border-b-2",
            "border-primary",
          );
        },
        onLeaveBack: () => {
          navMenuRef.current?.classList.remove(
            "!py-2.5",
            "bg-background",
            "shadow-lg",
            "border-b-2",
            "border-primary",
          );
        },
      },
    });
  }, []);

  return { navMenuRef };
};

export default useMenuScrollAnimation;
