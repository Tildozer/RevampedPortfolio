import React, { ReactNode, useEffect, useRef } from "react";
import { gsap } from "gsap";

interface Props {
  link: ReactNode;
  width: string;
}

const Underline = ({ link, width }: Props) => {
  const container: React.MutableRefObject<HTMLDivElement> = useRef(null!);
  const underline: React.MutableRefObject<HTMLDivElement> = useRef(null!);

  useEffect(() => {
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
      };
      const mouseLeaveEvent = () => {
        gsap.to(underlineElement, { width: 0, opacity: 0, duration: 0.3})
        setTimeout(() => containerElement.addEventListener("mouseover", mouseOverHandler), 750);
      };
      containerElement.addEventListener("mouseover", mouseOverHandler);
      containerElement.addEventListener("mouseleave", mouseLeaveEvent);
    }
  }, []);
  return (
    <div ref={container}>
      {link}
      <div ref={underline} className="bg-slate-800 dark:bg-slate-400 h-1 rounded-md w-0"></div>
    </div>
  );
};

export default Underline;
