// DarkModeContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  ReactNode,
  FC,
} from "react";

import { themeTransition } from "./theme";

interface DarkModeContextProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  slider: React.LegacyRef<HTMLDivElement>;
  // themeTransition: () => void;
}

const DarkModeContext = createContext<DarkModeContextProps | undefined>(
  undefined,
);

export const DarkModeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const slider = useRef<HTMLDivElement>(null!);

  console.log(slider)
  const toggleLocalStorage = () => {
    localStorage.theme === "dark"
      ? (localStorage.theme = "light")
      : (localStorage.theme = "dark");
  };

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    toggleLocalStorage();
  };

  const darkModeCheck = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    themeTransition();
    darkModeCheck();
    // setTimeout(darkModeCheck, 500);
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode, slider }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = (): DarkModeContextProps => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};
