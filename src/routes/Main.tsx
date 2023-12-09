import React from "react";
import "./index.css";

import { Header } from "../components";

type Props = {};

const Main = ({}: Props) => {
  return (
    <div
      className={
        "bg-color h-screen w-screen bg-white dark:bg-black dark:text-white"
      }
    >
      <Header />
    </div>
  );
};

export default Main;
