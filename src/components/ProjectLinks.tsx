import React from "react";

type Props = {};

interface Projects {
  id: number;
  mainLink: string;
  githubLink: string;
  // image?: File;
  descriptionPoints: string[];
}

// const makeProjectContainers = (projects: Projects[]) => {
//   projects.map(({ id, mainLink, githubLink, descriptionPoints }) => {});
// };

const ProjectLinks = (props: Props) => {
  return <div className="h-[200rem]">ProjectLinks</div>;
};

export default ProjectLinks;
