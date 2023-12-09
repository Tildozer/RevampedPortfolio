import React from "react";
import { useDarkMode } from "../DarkModeProvider";
import { Header } from "../components";

type Props = {};

const ContactInfo = (props: Props) => {
  const { background } = useDarkMode();
  return (
    <div
      ref={background}
      className={
        "bg-color h-screen w-screen bg-slate-50 dark:bg-slate-900 dark:text-slate-400"
      }
    >
      <Header />
    </div>
  );
};

export default ContactInfo;
