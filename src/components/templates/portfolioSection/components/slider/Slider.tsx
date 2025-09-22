import * as carousel from "@/components/ui/carousel";
import slidesData from "@/components/templates/portfolioSection/data/slidesData";
import Autoplay, { type AutoplayType } from "embla-carousel-autoplay";
import Slide from "@/components/templates/portfolioSection/components/slider/Slide";
import useFadeInOnScrollAnimation from "@/hooks/useFadeInOnScrollAnimation";
import { useMemo } from "react";

const Slider = () => {
  const { animatedSectionRef } = useFadeInOnScrollAnimation({});

  const plugin: AutoplayType | null = useMemo(() => {
    try {
      const autoplayOptions = { delay: 2000, stopOnInteraction: true };

      return Autoplay(autoplayOptions);
    } catch (error) {
      console.error("Failed to init Slider Autoplay", error);

      return null;
    }
  }, []);

  return (
    <carousel.Carousel
      onMouseEnter={() => plugin?.stop?.()}
      onMouseLeave={() => plugin?.reset?.()}
      plugins={plugin ? [plugin] : []}
      ref={animatedSectionRef}
      className="container"
      dir="ltr"
    >
      <carousel.CarouselContent>
        {slidesData.map((datas) => (
          <Slide key={datas.id} {...datas} />
        ))}
      </carousel.CarouselContent>
      <carousel.CarouselPrevious className="hidden xl:flex translate-0" />
      <carousel.CarouselNext className="hidden xl:flex translate-0" />
    </carousel.Carousel>
  );
};

export default Slider;
