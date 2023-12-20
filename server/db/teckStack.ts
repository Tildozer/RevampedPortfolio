import client from "./client.js";

export const createTechItem = async ({ name, iconName, color }) => {
  try {
    await client.query(
      `
          INSERT INTO tech_stack(name, "iconName", color)
          VALUES($1, $2, $3)
          RETURNING *
        `,
      [name, iconName, color],
    );
  } catch (error) {
    throw error;
  }
};
