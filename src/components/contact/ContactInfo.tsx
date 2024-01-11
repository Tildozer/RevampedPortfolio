import React from "react";
import { useDarkMode } from "../../DarkModeProvider";
import { Footer, Header } from "..";
import Email from "./Email.jsx";

type Props = {};

const ContactInfo = (props: Props) => {
  const { background } = useDarkMode();
  return (
    <div
      ref={background}
      className="bg-color min-h-screen w-full bg-slate-200 dark:bg-slate-900 dark:text-slate-400"
    >
      <Header />
      <div className="flex flex-col items-center justify-center mt-4">
        <Email />
      </div>
      <Footer />
    </div>
  );
};

export default ContactInfo;
