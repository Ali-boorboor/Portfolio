import listItems from "@/components/templates/menu/data/listItems";
import * as navigation from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { memo, useCallback } from "react";

type MenuListItemsProps = { dataAnimate?: string };

const MenuListItems = ({ dataAnimate }: MenuListItemsProps) => {
  const scrollToSection = useCallback((id: string) => {
    const smoother = ScrollSmoother.get();
    if (smoother) {
      smoother.scrollTo(id, true, "center center");
    }
  }, []);

  return (
    <>
      {listItems.map((item) => (
        <navigation.NavigationMenuItem key={item.id} data-animate={dataAnimate}>
          <button
            className={cn(
              "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
              "flex-row items-center gap-1 font-semibold cursor-pointer transition-all duration-300 ease-linear",
            )}
            onClick={() => scrollToSection(item.scrollTo)}
            type="button"
          >
            {item.title}
          </button>
        </navigation.NavigationMenuItem>
      ))}
    </>
  );
};

export default memo(MenuListItems);
