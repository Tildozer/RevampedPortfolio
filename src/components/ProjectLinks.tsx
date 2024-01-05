import React, { ReactNode, useEffect, useState } from "react";
import { fetchAllProjects } from "../api/index.js";

type Props = {};

interface Projects {
  id: number;
  mainLink: string;
  githubLink: string;
  projectName: string;
  // image?: File;
  descriptions: string[];
}

const makeProjectContainers = (projects: Projects[]): ReactNode => {
  return projects.map(
    ({ id, mainLink, githubLink, descriptions, projectName }): ReactNode => {
      return (
        <div key={id} className="">
          {projectName}
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
    <div className="h-[200rem]">
      {projects.length ? makeProjectContainers(projects) : null}
    </div>
  );
};

export default ProjectLinks;
