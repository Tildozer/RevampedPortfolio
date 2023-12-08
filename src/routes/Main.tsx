import React, { LegacyRef } from "react";
import { Canvas } from "@react-three/fiber";
import "./index.css";
import { ThemeSlider } from "../components";

type Props = {
  childsBackground: LegacyRef<HTMLDivElement> | null;
};

const Main = ({ childsBackground }: Props) => {
  console.log(childsBackground);

  return <div ref={childsBackground} className="h-screen w-screen"></div>;
};

export default Main;
