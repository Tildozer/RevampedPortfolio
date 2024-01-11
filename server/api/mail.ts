import express, { NextFunction, Request, Response } from "express";
import { sendMail } from "../db/index.js";

const router = express.Router();

interface MailObj {
  email: string;
  name: string;
  htmlStr: string;
}

declare global {
  namespace Express {
    interface Request {
      mailObj: MailObj;
    }
  }
}

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const content: MailObj = req.params;
    await sendMail("Anthonys resume", content);
  } catch (error) {
    next(error);
  }
});

export default router;
