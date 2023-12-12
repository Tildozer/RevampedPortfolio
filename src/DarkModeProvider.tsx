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

import { themeTransition, Slider, Background, Links } from "./theme";

interface DarkModeContextProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  slider: Slider;
  background: Background;
  githubContainer: Links;
  linkedinContainer: Links;
}

const DarkModeContext = createContext<DarkModeContextProps | undefined>(
  undefined,
);

export const DarkModeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const slider: Slider = useRef(null!);
  const background: Background = useRef(null!);
  const githubContainer: Links = useRef(null!);
  const linkedinContainer: Links = useRef(null!);

  const toggleLocalStorage = () => {
    darkMode ? (localStorage.theme = "light") : (localStorage.theme = "dark");
  };

  const toggleDarkMode = () => {
    setIsPressed(true);
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
    if (isPressed) {
      themeTransition({
        slider,
        background,
        githubContainer,
        linkedinContainer,
      });
      setTimeout(darkModeCheck, 100);
      setIsPressed(false);
    } else {
      darkModeCheck();
    }
  }, [darkMode]);

  return (
    <DarkModeContext.Provider
      value={{
        darkMode,
        toggleDarkMode,
        slider,
        background,
        githubContainer,
        linkedinContainer,
      }}
    >
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
