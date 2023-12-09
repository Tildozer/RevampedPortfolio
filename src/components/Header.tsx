import React from "react";
import { ThemeSwitch } from ".";
import { useDarkMode } from "../DarkModeProvider";

interface Props {}

const Header = (props: Props) => {
  const { toggleDarkMode, darkMode, slider } = useDarkMode();
  return (
    <div>
      <ThemeSwitch
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        slider={slider}
      />
      Header
    </div>
  );
};

export default Header;
