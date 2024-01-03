import client from "./client.js";

interface ProjectWithDescription {
  id: number;
  githubLink: string;
  projectLink: string;
  projectName: string;
  description: string;
  projectId: number;
}

export const createProject = async ({
  projectName,
  githubLink,
  projectLink,
}) => {
  try {
    const SQL = `
    INSERT INTO projects("projectName", "githubLink", "projectLink")
    values($1, $2, $3)
    RETURNING *
    `;

    const {
      rows: [project],
    } = await client.query(SQL, [projectName, githubLink, projectLink]);

    return project;
  } catch (error) {
    throw error;
  }
};

const attachDescriptionToProject = (projects: ProjectWithDescription[]) => {
  const projectsById = {};

  projects.forEach((project) => {
    if (!projectsById[project.id]) {
      projectsById[project.id] = {
        id: project.id,
        projectName: project.projectName,
        projectLink: project.projectLink,
        githubLink: project.githubLink,
        descriptions: [],
      };
    }
    if (project.projectId) {
      const description = project.description;
      projectsById[project.id].descriptions.push(description);
    }
  });

  return projectsById;
};

export const getAllProjects = async () => {
  const SQL = `
    SELECT projects.id, projects."githubLink", projects."projectLink", projects."projectName", projects_descriptions.description, projects_descriptions."projectId"
    FROM projects
    LEFT JOIN projects_descriptions ON "projectId" = projects.id;
    `;

  const { rows }: { rows: ProjectWithDescription[] } = await client.query(SQL);

  let projects = attachDescriptionToProject(rows);
  projects = Object.values(projects);

  return projects;
};
