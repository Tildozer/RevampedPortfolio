import React from "react";
import { Link, useLocation } from "react-router-dom";

type Props = {};

const Nav = (props: Props) => {
  const pathname = useLocation().pathname;

  return (
    <nav className="flex justify-around flex-col sm:flex-row sm:gap-4">
      <Link
        className={`${
          pathname === "/" ? "underline" : ""
        } hover:text-blue-500 hover:dark:text-yellow-500`}
        to={"/"}
      >
        Home
      </Link>
      <Link
        className={`${
          pathname === "/projects" ? "underline" : ""
        } hover:text-blue-500 hover:dark:text-yellow-500`}
        to={"/projects"}
      >
        Projects
      </Link>
      <Link
        className={`${
          pathname === "/contact" ? "underline" : ""
        } hover:text-blue-500 hover:dark:text-yellow-500`}
        to={"/contact"}
      >
        Contact me
      </Link>
    </nav>
  );
};

export default Nav;
