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
      className="fixed bottom-0 flex w-full items-center justify-center gap-1 bg-slate-200 pb-4 pt-4 dark:bg-slate-900 sm:gap-4"
    >
      <Link
        to={"https://github.com/Tildozer"}
        target="_blank"
        ref={githubContainer}
        className="rounded-md bg-black p-2 text-3xl text-orange-400 transition-transform duration-500 hover:-translate-y-1 hover:shadow-md hover:shadow-black dark:bg-slate-600 dark:text-cyan-400 dark:hover:shadow-slate-300"
      >
        <PiGithubLogoDuotone />
      </Link>
      <Link
        to={"https://www.linkedin.com/in/anthony-thibodeaux/"}
        target="_blank"
        ref={linkedinContainer}
        className="rounded-md bg-black p-2 text-3xl text-[#0077b5] transition-transform duration-500 hover:-translate-y-1 hover:shadow-md hover:shadow-black dark:bg-slate-600 dark:text-white dark:hover:shadow-slate-300"
      >
        <PiLinkedinLogoFill />
      </Link>
    </div>
  );
};

export default Footer;
