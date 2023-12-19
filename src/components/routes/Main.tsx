import React, { useEffect } from "react";
import { useDarkMode } from "../../DarkModeProvider";
import { Header, Footer, Experince, TechStack } from "..";
import { Canvas } from "@react-three/fiber";

type Props = {};

const Main = ({}: Props) => {
  const { background } = useDarkMode();

  return (
    <div
      ref={background}
      className="bg-color flex flex-col min-h-screen w-screen bg-slate-200 dark:bg-slate-900 dark:text-yellow-500"
    >
      <Header />
      <TechStack />
      <div className="h-[85vh] w-screen">
        <Canvas className="bg-slate-400 dark:bg-black">
          <Experince />
        </Canvas>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
