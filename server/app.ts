import { config } from "dotenv";
import express, { Express, NextFunction, Request, Response } from "express";
import path from "path";
import morgan from "morgan";
import cors from "cors";
import { default as api } from "./api/index.js";
import url from "url";

interface Error {
  status?: number;
  message?: string;
}

config();
const app: Express = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log("<____Body Logger START____>");
  console.log(JSON.stringify(req.body));
  console.log("<____Body Logger END_____>");

  next();
});

app.use("/api", api);

export default app;
