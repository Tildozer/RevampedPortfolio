import React from "react";
import {
  TbBrandCss3,
  TbBrandTypescript,
  TbBrandTailwind,
  TbBrandCpp,
  TbError404Off,
} from "react-icons/tb";
import {
  SiJavascript,
  SiHtml5,
  SiFlutter,
  SiJest,
  SiDart,
} from "react-icons/si";

type Props = {
  iconName: string;
};

const SetIcon = ({ iconName }: Props) => {
  switch (iconName) {
    case "TbBrandTypescript":
      return <TbBrandTypescript />;
    case "TbBrandCss3":
      return <TbBrandCss3 />;
    case "TbBrandTailwind":
      return <TbBrandTailwind />;
    case "TbBrandCpp":
      return <TbBrandCpp />;
    case "SiJavascript":
      return <SiJavascript />;
    case "SiHtml5":
      return <SiHtml5 />;
    case "SiFlutter":
      return <SiFlutter />;
    case "SiJest":
      return <SiJest />;
    case "SiDart":
      return <SiDart />;
    default:
      return <TbError404Off />;
  }
};

export default SetIcon;
