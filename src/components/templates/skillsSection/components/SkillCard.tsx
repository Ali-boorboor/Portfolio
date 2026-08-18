import type { SkillCardProps } from "@/components/templates/skillsSection/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const SkillCard = ({
  name,
  iconHref,
  textBg,
  iconColor,
  textColor = "text-white",
  borderColor = "border-border",
}: SkillCardProps) => {
  return (
    <Card
      className={cn(
        "border-2 shadow-lg min-w-60 drop-shadow-xs drop-shadow-muted-foreground",
        borderColor,
      )}
    >
      <CardContent className="flex flex-col justify-center items-center gap-4">
        <svg
          aria-hidden="true"
          focusable="false"
          className={cn(
            "w-10 md:w-20 h-10 md:h-20 drop-shadow-xs drop-shadow-muted-foreground",
            iconColor,
          )}
        >
          <use href={iconHref}></use>
        </svg>
        <Badge
          className={cn(
            "font-semibold text-sm md:text-lg capitalize drop-shadow-xs drop-shadow-muted-foreground",
            textColor,
            textBg,
          )}
        >
          {name}
        </Badge>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
