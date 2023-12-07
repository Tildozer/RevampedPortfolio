import React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Main } from "./routes";
import { ThemeSlider } from "./components";

const root = ReactDOM.createRoot(document.getElementById("root") as Element);


const router = createBrowserRouter([
  {
    path: "/",
    element: 
      <ThemeSlider>
        <Main />
      </ThemeSlider>,
  },
], );

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
