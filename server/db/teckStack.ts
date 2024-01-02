import client from "./client.js";

export const createTechItem = async ({ name, iconName, color, url }) => {
  try {
    const SQL = `
    INSERT INTO tech_stack(name, "iconName", color, url)
    VALUES($1, $2, $3, $4)
    RETURNING *;
    `;
    const {
      rows: [techItem],
    } = await client.query(SQL, [name, iconName, color, url]);

    return techItem;
  } catch (error) {
    throw error;
  }
};

export const getAllTechs = async () => {
  try {
    const SQL = `
    SELECT * FROM tech_stack;
  `;
    const { rows: techStack } = await client.query(SQL);

    return techStack;
  } catch (error) {
    throw error;
  }
};
