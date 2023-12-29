export { default as client } from "./client.js";
import { default as client } from "./client.js";
import { createTechItem, getAllTechs } from "./teckStack.js";

const resetTables = async () => {
  const resetSQL = `
    DROP TABLE IF EXISTS tech_stack;
    DROP TABLE IF EXISTS projects;

    CREATE TABLE tech_stack(
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) UNIQUE NOT NULL,
        "iconName" VARCHAR(100) UNIQUE NOT NULL,
        color VARCHAR(7) NOT NULL,
        url VARCHAR(255) NOT NULL
    );
    CREATE TABLE projects(
        id SERIAL PRIMARY KEY,
        "projectName" VARCHAR(100)
    );
    `;

  client.query(resetSQL);
};

const createTechstack = async () => {
  const techStack = await Promise.all([
    createTechItem({
      name: "Javascript",
      iconName: "SiJavascript",
      color: "#f7df1e",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    }),
    createTechItem({
      name: "Typescript",
      iconName: "TbBrandTypescript",
      color: "#007acc",
      url: "https://www.typescriptlang.org/docs/",
    }),
    createTechItem({
      name: "CSS",
      iconName: "TbBrandCss3",
      color: "#264de4",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    }),
    createTechItem({
      name: "Tailwind",
      iconName: "TbBrandTailwind",
      color: "#06b6d4",
      url: "https://tailwindcss.com/docs/installation",
    }),
    createTechItem({
      name: "HTML",
      iconName: "SiHtml5",
      color: "#e34c26",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    }),
    createTechItem({
      name: "C++",
      iconName: "TbBrandCpp",
      color: "#FFFFFF",
      url: "https://devdocs.io/cpp/",
    }),
    createTechItem({
      name: "Flutter",
      iconName: "SiFlutter",
      color: "#027DFD",
      url: "https://docs.flutter.dev/",
    }),
    createTechItem({
      name: "Jest",
      iconName: "SiJest",
      color: "#32CD32",
      url: "https://jestjs.io/docs/getting-started",
    }),
    createTechItem({
      name: "Dart",
      iconName: "SiDart",
      color: "#0175C2",
      url: "https://dart.dev/guides",
    }),
  ]);
  techStack.map((tech) => console.log(tech));
};

export const syncAndSeed = async () => {
  console.log("----reseting tables----");
  await resetTables();
  console.log("----tables reset----");
  console.log("----creating techStack----");
  await createTechstack();
  console.log("----techStack finished----");
};

export { getAllTechs };
