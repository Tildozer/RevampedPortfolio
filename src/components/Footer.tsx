import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { PiGithubLogoDuotone, PiLinkedinLogoFill } from "react-icons/pi";
import { IconContext } from "react-icons";
import { useDarkMode } from "../DarkModeProvider";
import { handleScroll, handleScrollStop } from ".";

interface Props {}

const Footer = (props: Props) => {
  const { darkMode, githubContainer, linkedinContainer } = useDarkMode();
  const footerContainer = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    window.addEventListener("scrollend", () =>
      handleScrollStop(footerContainer),
    );
    window.addEventListener("scroll", () => handleScroll(footerContainer));
    return () => {
      window.removeEventListener("scroll", () => handleScroll(footerContainer));
    };
  }, []);

  return (
    <div
      ref={footerContainer}
      className="sticky bottom-0 pb-4 pt-4 w-screen bg-white flex justify-center items-center gap-1 sm:gap-4"
    >
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
