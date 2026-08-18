import DownloadResumeButton from "@/components/DownloadResumeButton";
import useAboutMeAnimation from "@/components/templates/aboutMeSection/hooks/useAboutMeAnimation";
import TypeWriterEffect from "@/features/typewriterEffect";

const AboutMeSection = () => {
  const { splitTextRef } = useAboutMeAnimation();

  return (
    <section
      className="flex flex-col justify-center items-center h-svh section-style"
      id="about-section"
    >
      <div className="text-center space-y-2 container m-auto">
        <div ref={splitTextRef} aria-hidden>
          <p className="text-base md:text-2xl font-semibold text-accent-foreground">
            <span>برنامه نویس </span>
            <TypeWriterEffect
              typeTexts={["فرانت‌‌اند", "وب"]}
              defaultText="فرانت‌‌اند"
            />
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            علی بوربور
          </h1>

          <p className="text-sm md:text-base font-semibold my-8 leading-10 text-accent-foreground">
            من یک توسعه‌دهنده وب با تمرکز جدی بر یادگیری عمیق و ساخت تجربه‌های
            مدرن و کاربردی در وب هستم.
            <br />
            مسیرم را از HTML و CSS شروع کردم و با React و Next.js به سمت توسعه
            حرفه‌ای فرانت‌اند پیش رفته‌ام.
            <br />
            در کنار یادگیری، روی پروژه‌های واقعی کار می‌کنم و به معماری، تجربه
            کاربری، سئو، دسترس‌پذیری و کیفیت کد اهمیت زیادی می‌دهم.
            <br />
            ذهنیت من بیشتر از «فقط کار کردن»، بر درک چرایی هر تصمیم فنی و دنبال
            کردن بهترین روش‌های توسعه استوار است.
            <br />
            هدفم ساخت محصولاتی تمیز، سریع و مقیاس‌پذیر است؛ محصولاتی که هم از
            نظر فنی قدرتمند باشند و هم تجربه‌ای حرفه‌ای برای کاربر ایجاد کنند.
          </p>
        </div>

        <DownloadResumeButton />
      </div>
    </section>
  );
};

export default AboutMeSection;
