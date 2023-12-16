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
}

const TechStack = (props: Props) => {
  const techs: TechnicalSkills[] = [
    { name: "Javascript", Icon: RiJavascriptFill },
    { name: "Typescript", Icon: BiLogoTypescript },
    { name: "CSS", Icon: FaCss3Alt },
    { name: "Tailwind", Icon: BiLogoTailwindCss },
    { name: "HTML", Icon: TiHtml5 },
    { name: "C++", Icon: TbBrandCpp },
    { name: "Jest", Icon: SiJest },
    { name: "Flutter", Icon: RiFlutterFill },
    { name: "Dart", Icon: SiDart },
  ];

  const makeTechStack = (techs: TechnicalSkills[]) => {
    return techs.map(({ name, Icon }) => {
      return (
        <div
          key={name}
          className="flex flex-col justify-center items-center bg-white p-2 rounded-md break-all min-w-[6rem]"
        >
          <Icon />
          <span className="text-sm pt-1">{name}</span>
        </div>
      );
    });
  };

  return (
    <div className="content-start max-h-96 overflow-scroll grid grid-flow-col grid-rows-3 gap-2 w-screen text-6xl p-4 border-solid border-l-0 border-r-0 bg-orange-200 dark:bg-slate-600 border-slate-950 border-2 self-center sm:justify-start sm:grid-rows-1">
      {makeTechStack(techs)}
    </div>
  );
};

export default TechStack;
