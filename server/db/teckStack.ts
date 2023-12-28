import client from "./client.js";

export const createTechItem = async ({ name, iconName, color }) => {
  try {
    const {
      rows: [techItem],
    } = await client.query(
      `
          INSERT INTO tech_stack(name, "iconName", color)
          VALUES($1, $2, $3)
          RETURNING *;
        `,
      [name, iconName, color],
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
