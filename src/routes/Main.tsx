import React from "react";
import { useDarkMode } from "../DarkModeProvider";
import { Header, Footer } from "../components";

type Props = {};

const Main = ({}: Props) => {
  const { background } = useDarkMode();
  return (
    <div
      ref={background}
      className="bg-color min-h-screen w-screen bg-slate-50 dark:bg-slate-900 dark:text-slate-400"
    >
      <Header />
      <div>
        
      </div>
      <Footer />
    </div>
  );
};

export default Main;
