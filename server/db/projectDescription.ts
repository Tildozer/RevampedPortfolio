import client from "./client.js";

export const createDescription = async ({ projectId, description }) => {
  try {
    const SQL = `
        INSERT INTO projects_descriptions("projectId", description)
        VALUES ($1, $2)
        RETURNING *
      `;

    const {
      rows: [projectDescription],
    } = await client.query(SQL, [projectId, description]);

    return projectDescription;
  } catch (error) {
    throw error;
  }
};
