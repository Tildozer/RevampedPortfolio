import React from "react";
import { IconType } from "react-icons";
import { TbBrandCpp } from "react-icons/tb";
import { RiJavascriptFill, RiFlutterFill } from "react-icons/ri";
import { TiHtml5 } from "react-icons/ti";
import { BiLogoTypescript, BiLogoTailwindCss } from "react-icons/bi";
import { SiDart } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";

type Props = {};
interface TechnicalSkills {
  id: number;
  Icon: IconType;
}

const TechStack = (props: Props) => {
  const techs: TechnicalSkills[] = [
    { id: 0, Icon: RiJavascriptFill },
    { id: 1, Icon: BiLogoTypescript },
    { id: 2, Icon: FaCss3Alt },
    { id: 3, Icon: BiLogoTailwindCss },
    { id: 4, Icon: TiHtml5 },
    { id: 5, Icon: TbBrandCpp },
    { id: 6, Icon: RiFlutterFill },
    { id: 7, Icon: SiDart },
  ];

  const makeTechStack = (techs: TechnicalSkills[]) => {
    return techs.map(({ id, Icon }) => {
      return (
        <div key={id} className="h-fit">
          <Icon />
        </div>
      );
    });
  };

  return (
    <div className="content-start sm:justify-center flex flex-wrap w-screen gap-4 text-6xl p-4 border-solid border-l-0 border-r-0 bg-orange-200 dark:bg-slate-600 border-slate-950 border-2 self-center z-10">
      {makeTechStack(techs)}
    </div>
  );
};

export default TechStack;
