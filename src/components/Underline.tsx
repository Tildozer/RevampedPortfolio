import React, { ReactNode, useEffect, useRef, MutableRefObject } from "react";
import { gsap } from "gsap";

interface Props {
  link: ReactNode;
  width: string;
}

const Underline = ({ link, width }: Props) => {
  const container: MutableRefObject<HTMLDivElement> = useRef(null!);
  const underline: MutableRefObject<HTMLDivElement> = useRef(null!);

  const setEventListeners = () => {
    const containerElement = container.current;
    const underlineElement = underline.current;

    if (containerElement && underlineElement) {
      const mouseOverHandler = () => {
        gsap.fromTo(
          underlineElement,
          { width: "0rem" },
          { width: width, opacity: 1, duration: 0.5 },
        );
        containerElement.removeEventListener("mouseover", mouseOverHandler);
        containerElement.addEventListener("mouseleave", mouseLeaveEvent);
      };
      const mouseLeaveEvent = () => {
        gsap.to(underlineElement, { width: 0, opacity: 0 });
        setTimeout(
          () =>
            containerElement.addEventListener("mouseover", mouseOverHandler),
          300,
        );
      };
      containerElement.addEventListener("mouseover", mouseOverHandler);
    }
  };

  useEffect(() => {
    setTimeout(setEventListeners, 500);
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
