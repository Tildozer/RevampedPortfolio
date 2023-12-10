import React from "react";
import { PiSunBold, PiMoonBold } from "react-icons/pi";

type Props = {
  darkMode: boolean;
  toggleDarkMode: () => void;
  slider: React.MutableRefObject<HTMLDivElement>;
};

const ThemeSwitch = ({ darkMode, toggleDarkMode, slider }: Props) => {
  return (
    <div className="flex flex-row text-[.45rem] mr-4 dark:text-yellow-500 text-slate-900">
      <label
        onClick={toggleDarkMode}
        className="w-12 h-2 rounded-md m-2 mt-3 bg-slate-800 dark:bg-slate-400"
      >
        <input
          className="absolute top-3 left-3 opacity-0 w-12 h-4 hover:cursor-pointer"
          name="toggle theme"
          type="checkBox"
        />
        <div
          ref={slider}
          className="text-lg flex items-center justify-center bg-red-200 dark:bg-blue-900 w-6 h-6 rounded-full absolute top-1 left-3 dark:left-7 hover:cursor-pointer"
          onClick={toggleDarkMode}
        >
          {darkMode ? <PiMoonBold /> : <PiSunBold />}
        </div>
      </label>
      <span className="ml-2 mt-1 text-[.65rem]">
        {darkMode ? "Dark" : "Light"} mode
      </span>
    </div>
  );
};

export default ThemeSwitch;
