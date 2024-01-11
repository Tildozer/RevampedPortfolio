import client from "./client.js";
import { createDescription } from "./projectDescription.js";
import { createProject, getAllProjects } from "./projects.js";
import { createTechItem, getAllTechs } from "./teckStack.js";
import sendMail from "./email.js";

const resetTables = async () => {
  const resetSQL = `
    DROP TABLE IF EXISTS tech_stack;
    DROP TABLE IF EXISTS projects_descriptions;
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
      "projectName" VARCHAR(100) UNIQUE NOT NULL,
      "githubLink" VARCHAR(255) UNIQUE NOT NULL,
      "projectLink" VARCHAR(255) UNIQUE NOT NULL
    );
    CREATE TABLE projects_descriptions(
      id SERIAL PRIMARY KEY,
      "projectId" INTEGER REFERENCES projects (id),
      description VARCHAR(255) NOT NULL
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

const createProjectDescriptions = async (
  id: number,
  descriptionArr: string[],
) => {
  descriptionArr.map(async (description) => {
    const desc = await createDescription({ projectId: id, description });
    console.log(desc);
  });
};

const createProjects = async () => {
  const strangersThings = await createProject({
    projectName: "Strangers Things",
    githubLink: "https://github.com/Tildozer/strangersThngs",
    projectLink: "https://strangersproj.netlify.app",
  });
  const reKANstructed = await createProject({
    projectName: "Re-KANstructed",
    githubLink: "https://github.com/Team-Kan/Lego-shopper",
    projectLink: "https://rekanstructed.onrender.com/",
  });
  const galaxyGenerator = await createProject({
    projectName: "Galaxy generator",
    githubLink: "https://github.com/Tildozer/galaxyGenerator",
    projectLink: "https://galaxy-generator-opal.vercel.app/",
  });

  console.log(strangersThings);
  console.log(reKANstructed);
  console.log(galaxyGenerator);

  createProjectDescriptions(strangersThings.id, [
    "This was my first introduction to React and JSON web tokens.",
    "I learned how to make components, how to trade in credentials for a token, and how to validate the token for actions on the site.",
    "Successfully incorporated react-router-DOM to navigate visitors between pages on a single-page application",
  ]);
  createProjectDescriptions(reKANstructed.id, [
    "This project was my final project for Fullstack Academy, my two partners and I were tasked with making an Ecommerce website. We went with a buyback Lego site.",
    "In the development process, we decided to use Jest to test our back-end routes, helping assure that our functions were properly working before we got to the front end.",
    "We used Exalidraw to plan out our front end before coding that way we were all on the same page about what to do. This helped make development smooth thus letting us do some extra stuff at the end such as email confirmation with NodeMailer",
  ]);
  createProjectDescriptions(galaxyGenerator.id, [
    "This was one of my first 3D rendered projects, implementing Three.js.",
    "It helped me learn how to use math to make a design and how small a change can make a big difference.",
    "I used a GUI for debugging and figuring out the how I wanted my galaxy to look.",
  ]);
};

export const syncAndSeed = async () => {
  console.log("----reseting tables----");
  await resetTables();
  console.log("----tables reset----");
  console.log("----creating techStack----");
  await createTechstack();
  console.log("----techStack finished----");
  console.log("----creating projects----");
  await createProjects();
  console.log("----projects finished----");
};

export { getAllTechs, getAllProjects, client, sendMail };
