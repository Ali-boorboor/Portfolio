import DesktopMenu from "@/components/templates/menu/components/DesktopMenu";
import MobileMenu from "@/components/templates/menu/components/MobileMenu";
import useMenuScrollAnimation from "@/components/templates/menu/hooks/useMenuScrollAnimation";

const Menu = () => {
  const { navMenuRef } = useMenuScrollAnimation();

  return (
    <header
      className="py-4 px-4 md:px-6 z-50 w-full fixed top-0 transition-all duration-300 ease-linear flex justify-end"
      ref={navMenuRef}
    >
      <DesktopMenu />

      <MobileMenu />
    </header>
  );
};

export default Menu;
