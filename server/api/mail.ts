import express, { NextFunction, Request, Response } from "express";
import { sendMail } from "../db/index.js";

const router = express.Router();

interface MailObj {
  email: string;
  name: string;
  htmlStr: string;
}

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const content: MailObj = req.body;
    const regex: RegExp = new RegExp(
      "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$",
    );
    if (!regex.test(content.email)) {
      next({ message: "Plese enter a valid email", status: 400 });
    } else {
      const results = await sendMail("Anthonys resume", content);
      console.log(results);
    }
    // res.send(results);
  } catch (error) {
    next(error);
  }
});

export default router;
