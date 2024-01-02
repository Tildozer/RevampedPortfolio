import client from "./client.js";

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
