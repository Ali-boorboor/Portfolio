import useAboutMeAnimation from "@/components/templates/aboutMeSection/hooks/useAboutMeAnimation";
import DownloadResumeButton from "@/components/DownloadResumeButton";
import TypeWriterEffect from "@/features/typewriterEffect";

const AboutMeSection = () => {
  const { splitTextRef } = useAboutMeAnimation();

  return (
    <div
      className="flex flex-col justify-center items-center h-svh section-style"
      id="about-section"
    >
      <div
        className="text-center space-y-2 container m-auto"
        ref={splitTextRef}
      >
        <p className="text-base md:text-2xl font-semibold text-accent-foreground">
          <span>برنامه نویس </span>
          <TypeWriterEffect
            typeTexts={["وب", "فرانت‌‌اند", "بک‌اند"]}
            defaultText="وب"
          />
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          علی بوربور
        </h2>

        <p className="text-sm md:text-base font-semibold my-8 leading-10 text-accent-foreground">
          من علی هستم، یه برنامه‌نویس وب با دو سال تجربه در توسعه JavaScript.
          تخصص من کار با فریمورک‌های قدرتمند React.js و Next.js هست و تا امروز
          وب‌سایت‌های مختلفی با چالش‌های متنوع ساخته‌ام و همیشه آماده‌ی مواجهه
          با چالش‌های جدید و ارتقای مهارت هام هستم!
        </p>

        <DownloadResumeButton />
      </div>
    </div>
  );
};

export default AboutMeSection;
