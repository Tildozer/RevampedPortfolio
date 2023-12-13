import { gsap } from "gsap";

interface ScrollPosition {
  previous: number;
  current: number;
}

let lastKnownScrollPosition: ScrollPosition = {
  previous: window.scrollY,
  current: window.scrollY,
};
let ticking: boolean = false;
let scrollStop: undefined | NodeJS.Timeout;

const findScrollDirection = (
  scrollPosition: ScrollPosition,
  footerContainer: React.MutableRefObject<HTMLDivElement>,
) => {
  if (scrollPosition.current >= scrollPosition.previous) {
    gsap.to(footerContainer.current, {
      bottom: "0",
      display: "flex",
      position: "sticky",
      duration: 0.5,
    });
  } else {
    gsap.to(footerContainer.current, {
      bottom: "-5rem",
      display: "none",
      position: "fixed",
      duration: 0.5,
    });
    setTimeout(() => {}, 500);
  }
  scrollPosition.previous = scrollPosition.current;
  scrollPosition.current = window.scrollY;
};
export const handleScroll = (
  footerContainer: React.MutableRefObject<HTMLDivElement>,
) => {
  lastKnownScrollPosition.current = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(() => {
      clearTimeout(scrollStop);
      findScrollDirection(lastKnownScrollPosition, footerContainer);

      ticking = false;
    });

    ticking = true;
  }
};

export const handleScrollStop = (
  footerContainer: React.MutableRefObject<HTMLDivElement>,
) => {
  clearTimeout(scrollStop);

  scrollStop = setTimeout(() => {
    gsap.to(footerContainer.current, {
      bottom: "0",
      display: "flex",
      position: "sticky",
      duration: 0.75,
    });
  }, 750);
};
