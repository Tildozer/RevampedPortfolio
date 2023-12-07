import React, { ReactNode, useEffect, useState } from "react";

type Props = {
  children: ReactNode;
};

const ThemeSlider = ({ children }: Props) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  //   console.log("darkMode", darkMode)
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    // Update local storage when darkMode changes
    window.localStorage.setItem("darkMode", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const storedMode = window.localStorage.getItem("darkMode");
    if (storedMode === null) {
      window.localStorage.setItem(
        "darkMode",
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
      );
    } else {
      setDarkMode(storedMode === "dark");
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
