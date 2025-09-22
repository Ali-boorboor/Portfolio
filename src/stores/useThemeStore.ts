import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Theme } from "@/types";

type UseThemeStore = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const THEME_LOCAL_STORAGE_KEY = "ui-theme";

const useThemeStore = create<UseThemeStore>()(
  persist(
    (set, get) => ({
      theme: "dark",

      setTheme: (theme) => {
        const hasThemeChanged = get().theme !== theme;

        hasThemeChanged && set({ theme });
      },
    }),
    {
      name: THEME_LOCAL_STORAGE_KEY,
    }
  )
);

export default useThemeStore;
