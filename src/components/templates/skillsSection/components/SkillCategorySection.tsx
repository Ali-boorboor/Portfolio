import SkillCard from "@/components/templates/skillsSection/components/SkillCard";
import useFadeInOnScrollAnimation from "@/hooks/useFadeInOnScrollAnimation";
import { Separator } from "@/components/ui/separator";
import type { SkillCategorySectionProps } from "@/components/templates/skillsSection/types";

const SkillCategorySection = ({ title, skills }: SkillCategorySectionProps) => {
  const { animatedSectionRef } = useFadeInOnScrollAnimation({});

  return (
    <div className="flex flex-col w-full" ref={animatedSectionRef}>
      <Separator orientation="horizontal" className="!h-0.5 my-4" />

      <p className="text-sm md:text-lg font-semibold capitalize bg-secondary text-secondary-foreground border-2 border-foreground p-1 rounded-md mb-4 m-auto">
        {title}
      </p>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-4 container m-auto">
        {skills.map((data) => (
          <SkillCard key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
};

export default SkillCategorySection;
