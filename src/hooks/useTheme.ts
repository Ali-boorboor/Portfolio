import useThemeStore from "@/stores/useThemeStore";
import { useEffect } from "react";

const useTheme = () => {
  const { theme } = useThemeStore();

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    root.classList.add(theme);
  }, [theme]);
};

export default useTheme;
