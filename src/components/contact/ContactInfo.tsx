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
      className="bg-color min-h-screen w-full bg-slate-200 text-black dark:bg-slate-900 dark:text-yellow-500"
    >
      <Header />
      <div className="mt-4 flex animate-fadeInOnce flex-col items-center justify-center">
        <Email />
      </div>
      <Footer />
    </div>
  );
};

export default ContactInfo;
