import client from "./client.js";

export const createTechItem = async ({ name, iconName, color, url }) => {
  try {
    const {
      rows: [techItem],
    } = await client.query(
      `
          INSERT INTO tech_stack(name, "iconName", color, url)
          VALUES($1, $2, $3, $4)
          RETURNING *;
        `,
      [name, iconName, color, url],
    );
    return techItem;
  } catch (error) {
    throw error;
  }
};

export const getAllTechs = async () => {
  try {
    const { rows: techStack } = await client.query(
      `
        SELECT * FROM tech_stack;
      `,
    );

    return techStack;
  } catch (error) {
    throw error;
  }
};
