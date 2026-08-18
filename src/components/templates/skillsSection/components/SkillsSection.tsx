import SectionHeader from "@/components/SectionHeader";
import SkillCategorySection from "@/components/templates/skillsSection/components/SkillCategorySection";
import skillsData from "@/components/templates/skillsSection/data/skillsData";

const SkillsSection = () => {
  return (
    <div className="section-style" id="skills-section">
      <div className="flex flex-col justify-center items-center">
        <SectionHeader title="مهارت ها" />

        <SkillCategorySection title="فرانت‌اند" skills={skillsData.frontend} />

        <SkillCategorySection title="ابزارها" skills={skillsData.tools} />
      </div>
    </div>
  );
};

export default SkillsSection;
