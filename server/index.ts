import app from "./app.js";
import { client, syncAndSeed } from "./db/index.js";
import ViteExpress from "vite-express";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MODE: "development" | "production";
      PORT?: number;
    }
  }
}

const init = async () => {
  try {
    await client.connect();
    if (process.env.MODE === "development") {
      await syncAndSeed();
    }
    const port = process.env.PORT || 5173;
    ViteExpress.listen(app, port, () => {
      console.log(`server is listening on port ${port}`);
    });
  } catch (ex) {
    console.log(ex);
  }
};

init();
