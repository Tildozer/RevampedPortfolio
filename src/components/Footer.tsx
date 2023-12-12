import React from "react";
import { Link } from "react-router-dom";
import { PiGithubLogoDuotone, PiLinkedinLogoFill } from "react-icons/pi";
import { IconContext } from "react-icons";
import { useDarkMode } from "../DarkModeProvider";
import { Links } from "../theme";

interface Props {}

const Footer = (props: Props) => {
  const { darkMode, githubContainer, linkedinContainer } = useDarkMode();

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
      <Link
        to={"https://www.linkedin.com/in/anthony-thibodeaux/"}
        target="_blank"
        ref={linkedinContainer}
        className="text-3xl bg-black dark:bg-slate-600 p-2 rounded-md hover:shadow-md hover:shadow-black dark:hover:shadow-slate-300 hover:-translate-y-1"
      >
        <IconContext.Provider value={{ color: darkMode ? "white" : "#0077b5" }}>
          <PiLinkedinLogoFill />
        </IconContext.Provider>
      </Link>
    </div>
  );
};

export default Footer;
