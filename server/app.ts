import express, { Express, NextFunction, Request, Response } from "express";
import path from "path";
import morgan from "morgan";
import cors from "cors";
import ViteExpress from "vite-express";
import { default as api } from "./api/index.js";

const app: Express = express();
const port: number = 4000;

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "../static/index.html")),
);

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log("<____Body Logger START____>");
  console.log(JSON.stringify(req.body));
  console.log("<____Body Logger END_____>");

  next();
});

app.use("/api", api);

ViteExpress.listen(app, port, () => {
  console.log(`server is listening on port ${port}`);
});

export default app;
