import React from "react";
import { ThemeSwitch } from ".";

interface Props {}

const Header = (props: Props) => {
  return (
    <div>
      <ThemeSwitch />
      Header
    </div>
  );
};

export default Header;
