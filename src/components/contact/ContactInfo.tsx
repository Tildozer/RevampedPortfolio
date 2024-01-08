import React from "react";
import { useDarkMode } from "../../DarkModeProvider";
import { Footer, Header } from "..";

type Props = {};

const ContactInfo = (props: Props) => {
  const { background } = useDarkMode();
  return (
    <div
      ref={background}
      className="bg-color min-h-screen w-full bg-slate-200 dark:bg-slate-900 dark:text-slate-400"
    >
      <Header />
      <div className="min-h-[71.2vh] sm:min-h-[85.02vh]"></div>
      <Footer />
    </div>
  );
};

export default ContactInfo;
