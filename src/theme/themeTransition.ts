import {
  lightModeSettings,
  darkModeSettings,
  ThemeSettings,
  ThemeTransitionItems,
  // Logo
} from ".";
import { gsap } from "gsap";

export const themeTransition = (items: ThemeTransitionItems) => {
  if (localStorage.theme === "dark") {
    console.log("dark");
    transition(darkModeSettings, items);
  } else {
    console.log("light");
    transition(lightModeSettings, items);
  }
};

const transitionDuration = 0.5;

const transition = (
  settings: ThemeSettings,
  {
    slider,
    background,
    githubContainer,
    linkedinContainer,
    footerContainer,
  }: ThemeTransitionItems,
) => {
  gsap
    .to(slider.current, { left: settings.sliderPosition })
    .duration(transitionDuration);

  gsap.to(background.current, {
    backgroundColor: settings.backgroundColor,
    color: settings.textColor,
    duration: transitionDuration,
  });
  gsap.to(footerContainer.current, {
    backgroundColor: settings.backgroundColor,
    duration: transitionDuration,
  });

  gsap.fromTo(slider.current, { rotateZ: 0 }, { rotateZ: 360 });
  gsap.to(githubContainer.current, {
    backgroundColor: settings.footerLinkBackgroundColor,
    color: settings.githubLogoColor,
    duration: transitionDuration,
  });
  gsap.to(linkedinContainer.current, {
    backgroundColor: settings.footerLinkBackgroundColor,
    color: settings.linkedinLogoColor,
    duration: transitionDuration,
  });
};
