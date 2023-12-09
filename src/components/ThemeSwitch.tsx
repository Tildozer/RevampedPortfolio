import React from "react";
import { PiSunBold, PiMoonBold } from "react-icons/pi";

type Props = {
  darkMode: boolean;
  toggleDarkMode: () => void;
  slider: React.MutableRefObject<HTMLDivElement>;
};

const ThemeSwitch = ({ darkMode, toggleDarkMode, slider }: Props) => {
  return (
    <button className="flex flex-col text-[.45rem] dark:text-yellow-500 text-slate-900">
      <span className="ml-2">{darkMode ? "Dark" : "Light"} mode</span>
      <label
        onClick={toggleDarkMode}
        className="w-12 h-2 rounded-md m-2 bg-slate-800 dark:bg-slate-400"
      >
        <input
          className="transition-text absolute top-4 left-3 opacity-0 w-12 h-4 hover:cursor-pointer"
          type="checkBox"
        />
        <div
          ref={slider}
          className="text-lg flex items-center justify-center bg-red-200 dark:bg-blue-900 w-6 h-6 rounded-full absolute top-3 left-3 dark:left-7 hover:cursor-pointer"
          onClick={toggleDarkMode}
        >
          {darkMode ? <PiMoonBold /> : <PiSunBold />}
        </div>
      </label>
    </button>
  );
};

export default ThemeSwitch;
