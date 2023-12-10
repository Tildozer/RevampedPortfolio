import React from "react";
import { Link } from "react-router-dom";
import { PiGithubLogoDuotone } from "react-icons/pi";
import { IconContext } from "react-icons";
import { useDarkMode } from "../DarkModeProvider";

interface Props {}

const Footer = (props: Props) => {
  const { darkMode, githubContainer } = useDarkMode();

  return (
    <div className="absolute bottom-0 w-screen flex justify-center items-center gap-1 mb-1 sm:gap-4">
      <Link
        to={"https://github.com/Tildozer"}
        target="_blank"
        ref={githubContainer}
        className="text-3xl bg-black dark:bg-slate-600 p-2 rounded-md hover:shadow-md hover:shadow-black dark:hover:shadow-slate-300 hover:-translate-y-1"
      >
        <IconContext.Provider value={{ color: darkMode ? "cyan" : "orange" }}>
          <PiGithubLogoDuotone />
        </IconContext.Provider>
      </Link>
    </div>
  );
};

export default Footer;
