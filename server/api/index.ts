import express, { Request, Response } from "express";
import techStack from "./techStack.js";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  res.send("Server set up");
});

router.use("/tech", techStack);

export default router;
