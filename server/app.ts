import { config } from "dotenv";
import express, { Express, NextFunction, Request, Response } from "express";
import path from "path";
import morgan from "morgan";
import cors from "cors";
import { default as api } from "./api/index.js";
import url from "url";

config();
const app: Express = express();
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/dist", express.static(path.join(__dirname, "../dist")));
app.use("/static", express.static(path.join(__dirname, "../static")));

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log("<____Body Logger START____>");
  console.log(JSON.stringify(req.body));
  console.log("<____Body Logger END_____>");

  next();
});

app.use("/api", api);

export default app;
