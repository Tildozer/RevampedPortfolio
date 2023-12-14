import React from "react";
import { IconType } from "react-icons";
import { TbBrandCpp } from "react-icons/tb";
import { RiJavascriptFill } from "react-icons/ri";
import * as Icon from "react-icons/ri";
import { BiLogoTypescript, BiLogoTailwindCss } from "react-icons/bi";

type Props = {};
interface TechnicalSkills {
  id: number;
  Icon: IconType;
}

const TechStack = (props: Props) => {
  const techs: TechnicalSkills[] = [
    { id: 0, Icon: RiJavascriptFill },
    { id: 1, Icon: BiLogoTypescript },
    { id: 2, Icon: BiLogoTailwindCss },
    { id: 3, Icon: TbBrandCpp },
  ];

  const makeTechStack = (techs: TechnicalSkills[]) => {
    return techs.map(({ id, Icon }) => {
      return (
        <div key={id}>
          <Icon />
        </div>
      );
    });
  };

  return (
    <div className="min-h-[14rem] flex flex-wrap gap-2 w-1/2 min-w-[20rem] text-6xl p-2 border-solid rounded-md border-slate-950 border-2 self-center">
      {makeTechStack(techs)}
    </div>
  );
};

export default TechStack;
