import React, { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Underline } from ".";

type Props = {};

interface LinkSettings {
  id: number;
  path: string;
  name: string;
  width: string;
}

const Nav = (props: Props) => {
  const pathname = useLocation().pathname;

  const MakeLinks = (settings: LinkSettings[]): ReactNode[] => {
    return settings.map(({id, name, path, width}) => {

      return (
        <Underline
          width={width}
          key={id}
          link={
            <Link
              className={`${
                pathname === path
                  ? "font-bold text-orange-500 dark:text-cyan-500"
                  : ""
              } hover:text-blue-500 hover:dark:text-yellow-500`}
              to={path}
            >
              {name}
            </Link>
          }
        />
      );
    });
  };

  return (
    <nav className="flex justify-around flex-col sm:flex-row order-2 sm:-order-none sm:gap-4 select-none">
      {MakeLinks(
        [
          {
            id: 1,
            path:"/", 
            name: "Home",
            width: "2.60rem",
            
          },
          {
            id: 2,
            path: "/projects", 
            name: "Projects", 
            width: "3.60rem", 
            
          }, 
          {
            id: 3,
            path: "/contact",
            name: "Contact me",
            width: "5rem",

          }]
      )}
    </nav>
  );
};

export default Nav;
