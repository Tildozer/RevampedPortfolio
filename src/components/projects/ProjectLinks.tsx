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
  // image?: File;
  descriptions: Description[];
}

const makeProjectContainers = (projects: Projects[]): ReactNode => {
  return projects.map(
    ({ id, projectLink, githubLink, descriptions, projectName }): ReactNode => {
      return (
        <div
          key={id}
          className="mb-6 border-2 border-slate-400 rounded-md bg-black dark:bg-slate-500 text-yellow-500 dark:text-black transition shadow-lg shadow-black dark:shadow-slate-500 animate-fadeInOnce"
        >
          <div className="flex flex-col xs:flex-row justify-between border-b-2 p-4 border-slate-400">
            <h1 className="text-xl text-orange-200 dark:text-yellow-500">
              {projectName}
            </h1>
            <span className="">
              <Link
                to={githubLink}
                target="_blank"
                className="hover:text-blue-500 dark:hover:text-yellow-500 underline underline-offset-4 text-orange-500 dark:text-cyan-500"
              >
                Repository
              </Link>
              <span className="text-orange-500 dark:text-cyan-500"> | </span>
              <Link
                to={projectLink}
                target="_blank"
                className="hover:text-blue-500 dark:hover:text-yellow-500 underline underline-offset-4 text-orange-500 dark:text-cyan-500"
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
                  className="max-w-2xl pb-4 pt-2 list-disc  ml-4 mr-4"
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
    <div className="flex flex-col justify-center items-center pb-20 w-full">
      {projects.length ? (
        makeProjectContainers(projects)
      ) : (
        <div className="w-full h-[110vh]"></div>
      )}
    </div>
  );
};

export default ProjectLinks;
