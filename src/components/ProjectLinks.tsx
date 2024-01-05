import React, { ReactNode, useEffect, useState } from "react";
import { fetchAllProjects } from "../api/index.js";
import { Link } from "react-router-dom";

type Props = {};

interface Projects {
  id: number;
  projectLink: string;
  githubLink: string;
  projectName: string;
  // image?: File;
  descriptions: string[];
}

const makeProjectContainers = (projects: Projects[]): ReactNode => {
  return projects.map(
    ({ id, projectLink, githubLink, descriptions, projectName }): ReactNode => {
      return (
        <div key={id} className="p-10">
          <span>
            {projectName}
            <span> </span>
            <Link to={githubLink} target="_blank">
              Repository
            </Link>
            <span> | </span>
            <Link to={projectLink} target="_blank">
              Website
            </Link>
          </span>
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
    <div className="flex flex-col justify-center items-center">
      {projects.length ? makeProjectContainers(projects) : null}
    </div>
  );
};

export default ProjectLinks;
