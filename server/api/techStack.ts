import express, { Request, Response } from "express";
import { getAllTechs } from "../db/index.js";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const techStack = await getAllTechs();
  res.send(techStack);
});

export default router;
