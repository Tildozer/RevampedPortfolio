import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { PiGithubLogoDuotone, PiLinkedinLogoFill } from "react-icons/pi";
import { useDarkMode } from "../DarkModeProvider";
import { setFooterEventListeners } from ".";

interface Props {}

const Footer = (props: Props) => {
  const { githubContainer, linkedinContainer, footerContainer } = useDarkMode();

  useEffect(() => {
    setFooterEventListeners(footerContainer);
  }, []);

  return (
    <div
      ref={footerContainer}
      className="fixed bottom-0 pb-4 pt-4 w-full bg-slate-200 dark:bg-slate-900 flex justify-center items-center gap-1 sm:gap-4"
    >
      <Link
        to={"https://github.com/Tildozer"}
        target="_blank"
        ref={githubContainer}
        className="text-3xl text-orange-400 dark:text-cyan-400 bg-black dark:bg-slate-600 p-2 rounded-md hover:shadow-md hover:shadow-black dark:hover:shadow-slate-300 hover:-translate-y-1 transition-transform duration-500"
      >
        <PiGithubLogoDuotone />
      </Link>
      <Link
        to={"https://www.linkedin.com/in/anthony-thibodeaux/"}
        target="_blank"
        ref={linkedinContainer}
        className="text-3xl bg-black dark:bg-slate-600 text-[#0077b5] dark:text-white p-2 rounded-md hover:shadow-md hover:shadow-black dark:hover:shadow-slate-300 hover:-translate-y-1 transition-transform duration-500"
      >
        <PiLinkedinLogoFill />
      </Link>
    </div>
  );
};

export default Footer;
