import React from "react";
import { useDarkMode } from "../../DarkModeProvider";
import { Header, Footer } from "..";
import { ProjectLinks } from "./";

interface Props {}

const Projects = (props: Props) => {
  const { background } = useDarkMode();
  return (
    <div
      ref={background}
      className="bg-color min-h-screen w-full overflow-x-hidden bg-slate-200 dark:bg-slate-900 dark:text-slate-400"
    >
      <Header />
      <ProjectLinks />
      <Footer />
    </div>
  );
};

export default Projects;
