import React, { ReactNode, useEffect, useState } from "react";
import SetIcon from "./SetIcon";
import { useDarkMode } from "../../DarkModeProvider";
import { fetchAllTechs } from "../../api/index.js";
import { Link } from "react-router-dom";

type Props = {};

interface TechnicalSkills {
  id: number;
  name: string;
  iconName: string;
  color: string;
  url: string;
}

const giveIconBackground = (name: string): string => {
  switch (name) {
    case "Typescript":
    case "CSS":
      return "bg-white rounded-lg";
    case "Dart":
      return "bg-white rounded-lg p-1";
    case "Javascript":
      return "bg-black rounded-lg";
    default:
      return "";
  }
};

const TechStack = (props: Props) => {
  const { techStackContainer } = useDarkMode();
  const [techs, setTechs] = useState<TechnicalSkills[] | []>([]);
  const getTechStack = async () => {
    setTechs(await fetchAllTechs());
  };

  useEffect(() => {
    getTechStack();
  }, []);

  const makeTechStack = (techs: TechnicalSkills[]) => {
    return techs.map(({ id, name, iconName, color, url }) => {
      return (
        <Link
          to={url}
          target="_blank"
          key={id}
          className={`group flex min-w-[6rem] flex-col items-center justify-center break-all rounded-md border-2 border-solid border-slate-600 bg-black p-2 shadow-sm shadow-black transition-transform duration-500 hover:-translate-y-3 hover:border-yellow-500 hover:shadow-md hover:shadow-black dark:bg-slate-500`}
        >
          <span
            className={`text-${color} ${giveIconBackground(
              name,
            )} transition duration-500 group-hover:animate-wiggle`}
          >
            <SetIcon iconName={iconName} />
          </span>
          <span className="pt-1 text-sm transition-transform duration-500 group-hover:scale-125">
            {name}
          </span>
        </Link>
      );
    });
  };

  return (
    <div>
      <h3>Languges & libraries:</h3>
      <div
        ref={techStackContainer}
        className="grid max-h-96 min-h-[9.25rem] w-full grid-flow-col grid-rows-3 content-start gap-2 self-center overflow-x-scroll border-2 border-l-0 border-r-0 border-solid border-slate-950 bg-orange-200 p-4 text-6xl text-yellow-500 dark:bg-blue-900 dark:text-black sm:grid-rows-1 sm:justify-start lg:justify-center lg:overflow-hidden"
      >
        {techs.length ? makeTechStack(techs) : null}
      </div>
    </div>
  );
};

export default TechStack;
