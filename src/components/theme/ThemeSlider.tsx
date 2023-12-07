import React, { ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
};

const ThemeSlider = ({ children }: Props) => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

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
