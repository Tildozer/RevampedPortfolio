// DarkModeContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  FC,
  useEffect,
} from "react";

interface DarkModeContextProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextProps | undefined>(
  undefined,
);

export const DarkModeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleLocalStorage = () => {
    localStorage.theme === "dark"
      ? (localStorage.theme = "light")
      : (localStorage.theme = "dark");
  };

  const transitionTheme = () => {
    if (localStorage.theme === "dark") {
    } else {
    }
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
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    darkModeCheck();
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
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
