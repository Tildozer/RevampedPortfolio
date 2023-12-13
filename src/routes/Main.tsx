import React, { useEffect } from "react";
import { useDarkMode } from "../DarkModeProvider";
import { Header, Footer, Experince } from "../components";
import { Canvas } from "@react-three/fiber";

type Props = {};

const Main = ({}: Props) => {
  const { background } = useDarkMode();

  return (
    <div
      ref={background}
      className="bg-color min-h-screen w-screen bg-slate-50 dark:bg-slate-900 dark:text-slate-400"
    >
      <Header />
      <div className=" h-screen sm:h-[44rem] w-screen">
        <Canvas className="bg-black">
          <Experince />
        </Canvas>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
