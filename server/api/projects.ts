import express, { NextFunction, Request, Response } from "express";
import { getAllProjects } from "../db/index.js";

const router = express.Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const projects = await getAllProjects();

    res.send(projects);
  } catch (error) {
    next(error);
  }
});

export default router;
