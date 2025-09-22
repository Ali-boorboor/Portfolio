interface SkillCardProps {
  name: string;
  iconHref: string;
  textBg: `bg-[${string}]`;
  iconColor: `fill-[${string}]`;
  textColor?: "text-black" | "text-white";
  borderColor?: `border-[${string}]` | "border-border";
}

interface SkillData extends SkillCardProps {
  id: number;
}

type SkillCategorySectionProps = { title: string; skills: SkillData[] };

type SkillCategory = "frontend" | "backend" | "tools";

type SkillsData = Record<SkillCategory, SkillData[]>;

export type { SkillCardProps, SkillCategorySectionProps, SkillsData };
