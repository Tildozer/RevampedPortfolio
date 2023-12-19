import React from "react";
import { IconType } from "react-icons";
import * as TbIcon from "react-icons/tb";
import * as SiIcon from "react-icons/si";

type Props = {
  iconName: string;
};

const SetIcon = ({ iconName }: Props) => {
  let Icon: IconType;
  switch (iconName.slice(0, 2)) {
    case "Tb":
      Icon = TbIcon[iconName];
      return <Icon />;
    case "Si":
      Icon = SiIcon[iconName];
      return <Icon />;
    default:
      return <TbIcon.TbError404Off />;
  }
};

export default SetIcon;
