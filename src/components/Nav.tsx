import React from "react";
import { Link, useLocation } from "react-router-dom";

type Props = {};

const Nav = (props: Props) => {
  const pathname = useLocation().pathname;

  return (
    <nav className="flex justify-around gap-4">
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
    </nav>
  );
};

export default Nav;
