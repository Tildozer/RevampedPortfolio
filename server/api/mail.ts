import express, { NextFunction, Request, Response } from "express";
import { sendMail } from "../db/index.js";

const router = express.Router();

interface MailObj {
  subject: string;
  name: string;
  htmlStr: string;
}

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const content: MailObj = req.body;
    await sendMail("Anthonys resume", content);

    res.send(JSON.stringify({ message: "Email sent" }));
  } catch (error) {
    next(error);
  }
});

export default router;
