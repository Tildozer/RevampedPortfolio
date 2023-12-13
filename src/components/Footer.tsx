import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { PiGithubLogoDuotone, PiLinkedinLogoFill } from "react-icons/pi";
import { IconContext } from "react-icons";
import { useDarkMode } from "../DarkModeProvider";

interface Props {}

interface ScrollPosition {
  previous: number;
  current: number;
}

const Footer = (props: Props) => {
  const { darkMode, githubContainer, linkedinContainer } = useDarkMode();
  const footerContainer = useRef<HTMLDivElement>(null!);

  let lastKnownScrollPosition: ScrollPosition = {
    previous: window.scrollY,
    current: window.scrollY,
  };
  let ticking: boolean = false;
  const findScrollDirection = (scrollPosition: ScrollPosition) => {
    if (scrollPosition.current >= scrollPosition.previous) {
      console.log("we scrolling down");
      footerContainer.current.classList.remove("hidden");
    } else {
      footerContainer.current.classList.add("hidden");
      console.log(footerContainer.current.classList);
    }
    scrollPosition.previous = scrollPosition.current;
    scrollPosition.current = window.scrollY;
  };
  const handleScroll = () => {
    lastKnownScrollPosition.current = window.scrollY;
    console.log(lastKnownScrollPosition);
    if (!ticking) {
      window.requestAnimationFrame(() => {
        findScrollDirection(lastKnownScrollPosition);
        ticking = false;
      });

      ticking = true;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
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
