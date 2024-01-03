import express, { Request, Response } from "express";
import techStack from "./techStack.js";
import projects from "./projects.js";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  res.send("Server set up");
});

router.use("/tech", techStack);

router.use("/projects", projects);

export default router;
