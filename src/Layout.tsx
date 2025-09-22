import Menu from "@/components/templates/menu";
import IntroSection from "@/components/templates/introSection";
import SkillsSection from "@/components/templates/skillsSection";
import AboutMeSection from "@/components/templates/aboutMeSection";
import ContactSection from "@/components/templates/contactSection";
import PortfolioSection from "@/components/templates/portfolioSection";
import ParticlesBackground from "@/features/particlesBackground";
import DownloadResumeButton from "@/components/DownloadResumeButton";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Layout = () => {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    const smoother = ScrollSmoother.create({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      normalizeScroll: true,
      smoothTouch: 0.4,
      effects: true,
      smooth: 1,
    });

    smoother.scrollTo(0, true);
  }, []);

  return (
    <>
      <Menu />

      <div id="smooth-wrapper" ref={wrapperRef}>
        <div id="smooth-content" ref={contentRef}>
          <IntroSection />

          <AboutMeSection />

          <SkillsSection />

          <PortfolioSection />

          <ContactSection />
        </div>
      </div>

      <DownloadResumeButton isFixed />

      <ParticlesBackground />
    </>
  );
};

export default Layout;
