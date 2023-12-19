import React, { ReactNode } from "react";
import SetIcon from "./SetIcon";
// import { useDarkMode } from "../../DarkModeProvider";
import { useDarkMode } from "../../DarkModeProvider";

type Props = {};

interface TechnicalSkills {
  name: string;
  iconName: string;
  color: string;
}
const techs: TechnicalSkills[] = [
  { name: "Javascript", iconName: "SiJavascript", color: "#f7df1e" },
  { name: "Typescript", iconName: "TbBrandTypescript", color: "#007acc" },
  { name: "CSS", iconName: "TbBrandCss3", color: "#264de4" },
  { name: "Tailwind", iconName: "TbBrandTailwind", color: "#06b6d4" },
  { name: "HTML", iconName: "SiHtml5", color: "#e34c26" },
  { name: "C++", iconName: "TbBrandCpp", color: "#FFFFFF" },
  { name: "Flutter", iconName: "SiFlutter", color: "#027DFD" },
  { name: "Jest", iconName: "SiJest", color: "#32CD32" },
  { name: "Dart", iconName: "SiDart", color: "#0175C2" },
];

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
      return " ";
  }
};

const TechStack = (props: Props) => {
  const { techStackContainer } = useDarkMode();
  const makeTechStack = (techs: TechnicalSkills[]) => {
    return techs.map(({ name, iconName, color }) => {
      return (
        <div
          key={name}
          className={`flex flex-col justify-center items-center p-2 rounded-md break-all min-w-[6rem] bg-black dark:bg-slate-500`}
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
      className="content-start max-h-96 overflow-scroll grid grid-flow-col grid-rows-3 gap-2 w-screen text-6xl p-4 border-solid border-l-0 border-r-0 bg-orange-200 dark:bg-blue-900 text-yellow-500 dark:text-black border-slate-950 border-2 self-center sm:justify-start lg:justify-center sm:grid-rows-1"
    >
      {makeTechStack(techs)}
    </div>
  );
};

export default TechStack;
