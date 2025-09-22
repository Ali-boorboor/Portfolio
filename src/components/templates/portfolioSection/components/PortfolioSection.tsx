import Slider from "@/components/templates/portfolioSection/components/slider";
import SectionHeader from "@/components/SectionHeader";

const PortfolioSection = () => {
  return (
    <div className="section-style" id="portfolio-section">
      <div className="flex flex-col justify-center items-center">
        <SectionHeader title="نمونه کارها" />

        <Slider />
      </div>
    </div>
  );
};

export default PortfolioSection;
