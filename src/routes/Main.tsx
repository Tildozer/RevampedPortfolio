import React, { LegacyRef } from "react";
import { Canvas } from "@react-three/fiber";
import "./index.css";
import { useDarkMode } from "../DarkModeProvider";

type Props = {};

const Main = ({}: Props) => {
  const { toggleDarkMode, darkMode } = useDarkMode();

  console.log(darkMode);

  return (
    <div
      className={
        "bg-color h-screen w-screen bg-white dark:bg-black dark:text-white"
      }
    >
      <button onClick={toggleDarkMode}>Test</button>
    </div>
  );
};

export default Main;
