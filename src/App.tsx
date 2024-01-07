import React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Main, Projects, ContactInfo, ErrorBoundary } from "./components";
import { DarkModeProvider } from "./DarkModeProvider";
import "vite/modulepreload-polyfill";

const root = ReactDOM.createRoot(document.getElementById("root") as Element);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/contact",
    element: <ContactInfo />,
  },
]);

root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <RouterProvider router={router} />
    </DarkModeProvider>
  </React.StrictMode>,
);
