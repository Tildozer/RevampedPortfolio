import React, { ReactNode, useEffect, useState } from "react";
import SetIcon from "./SetIcon";
import { useDarkMode } from "../../DarkModeProvider";
import { fetchAllTechs } from "../../api/index.js";

type Props = {};

interface TechnicalSkills {
  name: string;
  iconName: string;
  color: string;
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

  useEffect(() => {
    const fetchData = async () => {
      const data: TechnicalSkills[] = await fetchAllTechs();
      setTechs(data);
    };

    fetchData();
  }, []);

  const makeTechStack = (techs: TechnicalSkills[]) => {
    return techs.map(({ name, iconName, color }) => {
      return (
        <div
          key={name}
          className={`flex flex-col justify-center items-center p-2 rounded-md break-all min-w-[6rem] bg-black dark:bg-slate-500 border-solid border-2 border-slate-600 shadow-sm shadow-black hover:shadow-md hover:shadow-black hover:-translate-y-1 hover:border-yellow-500`}
        >
          <span className={`text-${color} ${giveIconBackground(name)}`}>
            <SetIcon iconName={iconName} />
          </span>
          <span className="text-sm pt-1">{name}</span>
        </div>
      );
    });
  };

  return (
    <div
      ref={techStackContainer}
      className="content-start min-h-36 max-h-96 overflow-scroll grid grid-flow-col grid-rows-3 gap-2 w-screen text-6xl p-4 border-solid border-l-0 border-r-0 bg-orange-200 dark:bg-blue-900 text-yellow-500 dark:text-black border-slate-950 border-2 self-center sm:justify-start lg:justify-center sm:grid-rows-1"
    >
      {techs.length ? makeTechStack(techs) : null}
    </div>
  );
};

export default TechStack;
