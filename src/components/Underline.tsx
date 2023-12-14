import React, { ReactNode, useEffect, useRef, MutableRefObject } from "react";
import { gsap } from "gsap";
import { setHeaderEventListeners } from ".";

interface Props {
  link: ReactNode;
  width: string;
}

const Underline = ({ link, width }: Props) => {
  const container: MutableRefObject<HTMLDivElement> = useRef(null!);
  const underline: MutableRefObject<HTMLDivElement> = useRef(null!);

  useEffect(() => {
    setTimeout(() => setHeaderEventListeners(container, underline, width), 500);
  }, []);

  return (
    <div className="pl-4 sm:pl-0" ref={container}>
      {link}
      <div
        ref={underline}
        className="bg-slate-800 dark:bg-slate-400 h-1 rounded-md w-0"
      ></div>
    </div>
  );
};

export default Underline;
