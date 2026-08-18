import SectionHeader from "@/components/SectionHeader";
import Slider from "@/components/templates/portfolioSection/components/slider";

const PortfolioSection = () => {
  return (
    <section className="section-style" id="portfolio-section">
      <div className="flex flex-col justify-center items-center">
        <SectionHeader title="نمونه کارها" />

        <Slider />
      </div>
    </section>
  );
};

export default PortfolioSection;
