export { default as client } from "./client.js";
import { default as client } from "./client.js";

const resetTables = async () => {
  const resetSQL = `
    DROP TABLE IF EXISTS tech_stack;

    CREATE TABLE teck_stack(
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) UNIQUE NOT NULL
    );
    `;

  client.query(resetSQL);
};

export const syncAndSeed = async () => {
  console.log("reseting tables");
  await resetTables();
  console.log("tables reset");
};

/* const techStack = [
  { name: "Javascript", iconName: "SiJavascript", color: "#f7df1e" },
  { name: "Typescript", iconName: "TbBrandTypescript", color: "#007acc" },
  { name: "CSS", iconName: "TbBrandCss3", color: "#264de4" },
  { name: "Tailwind", iconName: "TbBrandTailwind", color: "#06b6d4" },
  { name: "HTML", iconName: "SiHtml5", color: "#e34c26" },
  { name: "C++", iconName: "TbBrandCpp", color: "#FFFFFF" },
  { name: "Flutter", iconName: "SiFlutter", color: "#027DFD" },
  { name: "Jest", iconName: "SiJest", color: "#32CD32" },
  { name: "Dart", iconName: "SiDart", color: "#0175C2" },
]; */
