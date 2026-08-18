import MenuListItems from "@/components/templates/menu/components/MenuListItems";
import useMenuItemsAnimation from "@/components/templates/menu/hooks/useMenuItemsAnimation";
import ThemeModeToggle from "@/components/ThemeModeToggle";
import * as navigation from "@/components/ui/navigation-menu";
import { useEffect } from "react";

const DesktopMenu = () => {
  const { menuNavRef, dataAnimate, animateListItems } = useMenuItemsAnimation();

  useEffect(() => animateListItems(), []);

  return (
    <navigation.NavigationMenu
      className="flex justify-between max-w-full opacity-0 pointer-events-none absolute md:opacity-100 md:pointer-events-auto md:relative transform-gpu will-change-transform"
      aria-label="ناوبری اصلی"
      ref={menuNavRef}
    >
      <navigation.NavigationMenuList className="gap-10 flex-row-reverse">
        <MenuListItems dataAnimate={dataAnimate} />
      </navigation.NavigationMenuList>

      <ThemeModeToggle />
    </navigation.NavigationMenu>
  );
};

export default DesktopMenu;
