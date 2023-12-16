import React from "react";
import { IconType } from "react-icons";
import { TbBrandCpp } from "react-icons/tb";
import { RiJavascriptFill, RiFlutterFill } from "react-icons/ri";
import { TiHtml5 } from "react-icons/ti";
import { BiLogoTypescript, BiLogoTailwindCss } from "react-icons/bi";
import { SiDart, SiJest } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";

type Props = {};
interface TechnicalSkills {
  name: string;
  Icon: IconType;
  color: string;
}

const TechStack = (props: Props) => {
  const techs: TechnicalSkills[] = [
    { name: "Javascript", Icon: RiJavascriptFill, color: "#f7df1e" },
    { name: "Typescript", Icon: BiLogoTypescript, color: "#007acc" },
    { name: "CSS", Icon: FaCss3Alt, color: "#264de4" },
    { name: "Tailwind", Icon: BiLogoTailwindCss, color: "#06b6d4" },
    { name: "HTML", Icon: TiHtml5, color: "#e34c26" },
    { name: "C++", Icon: TbBrandCpp, color: "#FFFFFF" },
    { name: "Flutter", Icon: RiFlutterFill, color: "#027DFD" },
    { name: "Jest", Icon: SiJest, color: "#32CD32" },
    { name: "Dart", Icon: SiDart, color: "" },
  ];

  const makeTechStack = (techs: TechnicalSkills[]) => {
    return techs.map(({ name, Icon, color }) => {
      return (
        <div
          key={name}
          className={`flex flex-col justify-center items-center p-2 rounded-md break-all min-w-[6rem] bg-black dark:bg-slate-500`}
        >
          <span
            className={`text-${color} ${
              name === "Typescript" ||
              name === "CSS" ||
              name === "HTML" ||
              name === "Flutter"
                ? "bg-white rounded-lg"
                : ""
            }`}
          >
            <Icon />
          </span>
          <span className="text-sm pt-1">{name}</span>
        </div>
      );
    });
  };

  return (
    <div className="content-start max-h-96 overflow-scroll grid grid-flow-col grid-rows-3 gap-2 w-screen text-6xl p-4 border-solid border-l-0 border-r-0 bg-orange-200 dark:bg-blue-900 text-white dark:text-black border-slate-950 border-2 self-center sm:justify-start lg:justify-center sm:grid-rows-1">
      {makeTechStack(techs)}
    </div>
  );
};

export default TechStack;
