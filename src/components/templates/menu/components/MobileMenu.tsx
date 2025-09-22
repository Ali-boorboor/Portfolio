import * as sheet from "@/components/ui/sheet";
import * as navigation from "@/components/ui/navigation-menu";
import useMenuItemsAnimation from "@/components/templates/menu/hooks/useMenuItemsAnimation";
import MenuListItems from "@/components/templates/menu/components/MenuListItems";
import ThemeModeToggle from "@/components/ThemeModeToggle";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useCallback } from "react";

const MobileMenu = () => {
  const { menuNavRef, dataAnimate, animateListItems } = useMenuItemsAnimation();

  const handleMenuOpenChange = useCallback(
    (isMenuOpen: boolean) => {
      isMenuOpen && requestAnimationFrame(animateListItems);
    },
    [animateListItems]
  );

  return (
    <sheet.Sheet onOpenChange={handleMenuOpenChange}>
      <sheet.SheetTitle className="sr-only">Menu</sheet.SheetTitle>
      <sheet.SheetDescription className="sr-only">
        Mobile navigation menu
      </sheet.SheetDescription>

      <sheet.SheetTrigger
        className="opacity-100 pointer-events-auto relative md:opacity-0 md:pointer-events-none md:absolute"
        asChild
      >
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </sheet.SheetTrigger>

      <sheet.SheetContent side="left">
        <navigation.NavigationMenu
          className="max-w-full w-full py-20 items-start gap-4 transition-all duration-300 ease-linear"
          ref={menuNavRef}
        >
          <sheet.SheetClose asChild>
            <navigation.NavigationMenuList className="gap-10 flex-col">
              <MenuListItems dataAnimate={dataAnimate} />
            </navigation.NavigationMenuList>
          </sheet.SheetClose>

          <sheet.SheetClose asChild>
            <div className="absolute top-2 left-2">
              <ThemeModeToggle />
            </div>
          </sheet.SheetClose>
        </navigation.NavigationMenu>
      </sheet.SheetContent>
    </sheet.Sheet>
  );
};

export default MobileMenu;
