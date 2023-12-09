import React from "react";
import { useDarkMode } from "../DarkModeProvider";

type Props = {};

const ThemeSwitch = (props: Props) => {
  const { toggleDarkMode, darkMode } = useDarkMode();
  return <button onClick={toggleDarkMode}>Test</button>;
};

export default ThemeSwitch;
