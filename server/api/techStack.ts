import express, { NextFunction, Request, Response } from "express";
import { getAllTechs } from "../db/index.js";

const router = express.Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const techStack = await getAllTechs();
    res.send(techStack);
  } catch (error) {
    next(error);
  }
});

export default router;
