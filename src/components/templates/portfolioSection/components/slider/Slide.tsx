import { cn } from "@/lib/utils";
import { Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CarouselItem } from "@/components/ui/carousel";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import type { SlideProps } from "@/components/templates/portfolioSection/types/sliderTypes";

const Slide = ({
  title,
  description,
  image = "bg-[url('/particles-images/dark-mountain.png')]",
  href,
  techs,
}: SlideProps) => {
  return (
    <CarouselItem className="basis-full md:basis-1/2 xl:basis-1/3 group">
      <a href={href} className="p-1">
        <Card
          className="pt-0 overflow-hidden gap-5 border-2 hover:border-primary transition-all duration-300 ease-linear"
          dir="rtl"
        >
          <CardHeader
            className={cn(
              "aspect-video bg-cover bg-center bg-no-repeat border-b",
              "!p-0 !pb-0 flex justify-center items-center",
              image
            )}
            aria-label={`${title}-image`}
          >
            <div className="bg-transparent backdrop-blur-sm h-full w-full flex justify-center items-center opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100">
              <Eye className="opacity-100 size-8 fill-black/10 text-white" />
            </div>
          </CardHeader>

          <CardContent className="flex flex-col gap-2 justify-start">
            <div className="flex flex-wrap gap-2 items-center justify-center md:justify-start">
              {techs.map((tech) => (
                <Badge
                  className={`font-semibold capitalize ${tech.backgroundColor} text-white`}
                  key={tech.id}
                >
                  {tech.name}
                </Badge>
              ))}
            </div>

            <h4 className="font-bold text-lg">{title}</h4>

            <p className="text-accent-foreground font-normal text-sm leading-6 line-clamp-4">
              {description}
            </p>
          </CardContent>
        </Card>
      </a>
    </CarouselItem>
  );
};

export default Slide;
