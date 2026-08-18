import DownloadResumeButton from "@/components/DownloadResumeButton";
import AboutMeSection from "@/components/templates/aboutMeSection";
import ContactSection from "@/components/templates/contactSection";
import IntroSection from "@/components/templates/introSection";
import Menu from "@/components/templates/menu";
import PortfolioSection from "@/components/templates/portfolioSection";
import SkillsSection from "@/components/templates/skillsSection";
import ParticlesBackground from "@/features/particlesBackground";
import { ScrollSmoother, useGSAP } from "@/lib/gsap";
import { useRef } from "react";

const Layout = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const smoother = ScrollSmoother.create({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      normalizeScroll: true,
      smoothTouch: 0.4,
      effects: true,
      smooth: 1,
    });

    smoother.scrollTo(0, true);

    return () => {
      smoother.kill();
    };
  }, []);

  return (
    <>
      <Menu />

      <main id="smooth-wrapper" ref={wrapperRef}>
        <div id="smooth-content" ref={contentRef}>
          <IntroSection />
          <AboutMeSection />
          <SkillsSection />
          <PortfolioSection />
          <ContactSection />
        </div>
      </main>

      <DownloadResumeButton isFixed />

      <ParticlesBackground />
    </>
  );
};

export default Layout;
