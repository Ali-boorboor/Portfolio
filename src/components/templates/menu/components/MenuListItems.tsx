import * as navigation from "@/components/ui/navigation-menu";
import listItems from "@/components/templates/menu/data/listItems";
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
          <navigation.NavigationMenuLink
            className="flex-row items-center gap-1 font-semibold cursor-pointer transition-all duration-300 ease-linear"
            onClick={() => scrollToSection(item.scrollTo)}
            role="button"
          >
            {item.title}
          </navigation.NavigationMenuLink>
        </navigation.NavigationMenuItem>
      ))}
    </>
  );
};

export default memo(MenuListItems);
