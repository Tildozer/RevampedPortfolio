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
      className="bg-color min-h-screen w-full overflow-x-hidden bg-slate-200 dark:bg-slate-900 dark:text-yellow-500"
    >
      <Header />
      <div className="flex animate-fadeInOnce flex-col">
        <TechStack />
        <div className="mb-20 h-[85vh]">
          <Canvas className="bg-slate-400 dark:bg-black">
            <Experince />
          </Canvas>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
