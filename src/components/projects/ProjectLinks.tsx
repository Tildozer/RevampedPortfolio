import { fetchAllProjects } from "../../api";
import React, { ReactNode, useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Props = {};

interface Description {
  id: number;
  description: string;
}
interface Projects {
  id: number;
  projectLink: string;
  githubLink: string;
  projectName: string;
  descriptions: Description[];
}

const makeProjectContainers = (projects: Projects[]): ReactNode => {
  return projects.map(
    ({ id, projectLink, githubLink, descriptions, projectName }): ReactNode => {
      return (
        <div
          key={id}
          className="mb-6 animate-fadeInOnce rounded-md border-2 border-slate-400 bg-black text-yellow-500 shadow-lg shadow-black transition dark:bg-slate-500 dark:text-black dark:shadow-slate-500"
        >
          <div className="flex flex-col justify-between border-b-2 border-slate-400 p-4 xs:flex-row">
            <h1 className="text-xl text-orange-200 dark:text-yellow-500">
              {projectName}
            </h1>
            <span className="">
              <Link
                to={githubLink}
                target="_blank"
                className="text-orange-500 underline underline-offset-4 hover:text-blue-500 dark:text-cyan-500 dark:hover:text-yellow-500"
              >
                Repository
              </Link>
              <span className="text-orange-500 dark:text-cyan-500"> | </span>
              <Link
                to={projectLink}
                target="_blank"
                className="text-orange-500 underline underline-offset-4 hover:text-blue-500 dark:text-cyan-500 dark:hover:text-yellow-500"
              >
                Website
              </Link>
            </span>
          </div>
          <ul className="ml-2">
            {descriptions.map(({ description, id }): ReactNode => {
              return (
                <li
                  key={id}
                  className="ml-4 mr-4 max-w-2xl list-disc  pb-4 pt-2"
                >
                  {description}
                </li>
              );
            })}
          </ul>
        </div>
      );
    },
  );
};

const ProjectLinks = (props: Props) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      setProjects(await fetchAllProjects());
    };

    getProjects();
  }, []);

  return (
    <div className="flex w-full flex-col items-center justify-center pb-20 pl-3 pr-3">
      {projects.length ? (
        makeProjectContainers(projects)
      ) : (
        <div className="h-[110vh] w-full"></div>
      )}
    </div>
  );
};

export default ProjectLinks;
