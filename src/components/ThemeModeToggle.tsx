import { Button } from "@/components/ui/button";
import useThemeStore from "@/stores/useThemeStore";
import { Moon, Sun } from "lucide-react";

const ThemeModeToggle = () => {
  const { theme, setTheme } = useThemeStore();

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <Button
      size="icon"
      variant="outline"
      onClick={toggleTheme}
      aria-label={
        theme === "dark" ? "فعال کردن پوسته روشن" : "فعال کردن پوسته تاریک"
      }
    >
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 dark:scale-0 dark:-rotate-90 transition-all duration-300 ease-linear" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 dark:scale-100 dark:rotate-0 transition-all duration-300 ease-linear" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeModeToggle;
