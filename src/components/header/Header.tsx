import React from "react";
import { Nav, ThemeSwitch } from ".";
import { useDarkMode } from "../../DarkModeProvider";

interface Props {}

const Header = (props: Props) => {
  const { toggleDarkMode, darkMode, slider } = useDarkMode();
  return (
    <>
      <div className="flex flex-col w-52 sm:w-full sm:flex-row sm:justify-between font-Playfair dark:text-yellow-500">
        <ThemeSwitch
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          slider={slider}
        />
        <Nav />
        <div className="font-Bebas pt-2 xs:self-end sm:mr-2 order-[0] sm:order-2 text-3xl select-none flex flex-col 2xs:flex-row">
          <span className="pr-2">Anthony</span>
          <span>Thibodeaux</span>
        </div>
      </div>
    </>
  );
};

export default Header;
