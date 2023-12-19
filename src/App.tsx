import React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Main, Projects, Contact } from "./routes";
import { DarkModeProvider } from "./DarkModeProvider";
import "vite/modulepreload-polyfill";

const root = ReactDOM.createRoot(document.getElementById("root") as Element);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <script type="module" src="http://localhost:5173/@vite/client"></script>
      <script type="module" src="http://localhost:5173/main.js"></script>
      <RouterProvider router={router} />
    </DarkModeProvider>
  </React.StrictMode>,
);
