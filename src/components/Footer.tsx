import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { PiGithubLogoDuotone, PiLinkedinLogoFill } from "react-icons/pi";
import { IconContext } from "react-icons";
import { useDarkMode } from "../DarkModeProvider";
import { gsap } from "gsap";

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
      gsap.to(footerContainer.current, {
        bottom: "0",
        display: "flex",
        position: "sticky",
        duration: 0.5,
      });
    } else {
      gsap.to(footerContainer.current, {
        bottom: "-5rem",
        display: "none",
        position: "fixed",
        duration: 0.5,
      });
      setTimeout(() => {}, 500);
    }
    scrollPosition.previous = scrollPosition.current;
    scrollPosition.current = window.scrollY;
  };
  const handleScroll = () => {
    lastKnownScrollPosition.current = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(() => {
        findScrollDirection(lastKnownScrollPosition);
        ticking = false;
      });

      ticking = true;
    }
  };

  const handleScrollStop = () => {
    setTimeout(() => {
      console.log("stopped");
      gsap.to(footerContainer.current, {
        bottom: "0",
        display: "flex",
        position: "sticky",
        duration: 0.75,
      });
    }, 2000);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scrollend", handleScrollStop);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      // window.removeEventListener("scrollend", handleScrollStop);
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
