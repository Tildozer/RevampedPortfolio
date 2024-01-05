import React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Main, Projects, Contact } from "./components";
import { DarkModeProvider } from "./DarkModeProvider";
import "vite/modulepreload-polyfill";
import ErrorBoundary from "./components/routes/ErrorBoundary.jsx";

const root = ReactDOM.createRoot(document.getElementById("root") as Element);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorBoundary path="/" />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  // { errorElement: }
]);

root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <RouterProvider router={router} />
    </DarkModeProvider>
  </React.StrictMode>,
);
