import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

const DATA_ANIMATE_ATTRIBUTE = "nav-menu__list-item";

const useMenuItemsAnimation = () => {
  const menuNavRef = useRef<HTMLDivElement | null>(null);

  const { contextSafe } = useGSAP({ scope: menuNavRef, dependencies: [] });

  const animateListItems = contextSafe(() => {
    gsap.from(`[data-animate=${DATA_ANIMATE_ATTRIBUTE}]`, {
      y: "-100%",
      opacity: 0,
      delay: 0.2,
      stagger: 0.2,
      ease: "power2.out",
    });
  });

  return { menuNavRef, dataAnimate: DATA_ANIMATE_ATTRIBUTE, animateListItems };
};

export default useMenuItemsAnimation;
