import React, { ReactNode, useEffect, useState } from "react";

type Props = {
  children: ReactNode;
};

declare global {
  interface Window {
    darkMode: boolean | undefined;
  }
}

const ThemeSlider = ({ children }: Props) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    window.darkMode = darkMode;
  };

  useEffect(() => {
    if (!window.darkMode) {
      if (window.darkMode === null && window.matchMedia("(prefers-color-scheme: dark)")) {
        setDarkMode(true);
      }
      window.darkMode = darkMode;
    } else {
      setDarkMode(window.darkMode);
    }
  }, []);

  return (
    <div>
      <div onClick={toggleTheme} className="select-none">
        {darkMode ? "darkMode" : "lightMode"}
      </div>
      {children}
    </div>
  );
};

export default ThemeSlider;
