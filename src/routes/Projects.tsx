import React from "react";
import { useDarkMode } from "../DarkModeProvider";
import { Header, ProjectLinks, Footer } from "../components";

interface Props {}

const Projects = (props: Props) => {
  const { background } = useDarkMode();
  return (
    <div
      ref={background}
      className="bg-color min-h-screen w-screen bg-slate-200 dark:bg-slate-900 dark:text-slate-400"
    >
      <Header />
      <ProjectLinks />
      <div className="min-h-[68vh] sm:min-h-[82vh]"></div>
      <Footer />
    </div>
  );
};

export default Projects;
