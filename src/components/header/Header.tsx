import React from "react";
import { Nav, ThemeSwitch } from ".";
import { useDarkMode } from "../../DarkModeProvider";

interface Props {}

const Header = (props: Props) => {
  const { toggleDarkMode, darkMode, slider } = useDarkMode();
  return (
    <>
      <div className="flex flex-col w-52 sm:w-screen sm:flex-row sm:justify-between font-Playfair">
        <ThemeSwitch
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          slider={slider}
        />
        <Nav />
        <div className="font-Bebas pt-2 self-end sm:mr-2 order-[0] sm:order-2">
          <span className="text-3xl select-none">Anthony Thibodeaux</span>
        </div>
      </div>
    </>
  );
};

export default Header;
