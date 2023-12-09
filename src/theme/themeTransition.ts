import {
  lightModeSettings,
  darkModeSettings,
  ThemeSettings,
  ThemeTransitionItems,
} from ".";
import { gsap } from "gsap";

export const themeTransition = (items: ThemeTransitionItems) => {
  if (localStorage.theme === "dark") {
    transition(darkModeSettings, items);
  } else {
    transition(lightModeSettings, items);
  }
};

const transitionDuration = 0.2;

const transition = (
  settings: ThemeSettings,
  { slider, background }: ThemeTransitionItems,
) => {
  gsap
    .to(slider.current, { left: settings.sliderPosition })
    .duration(transitionDuration);

  gsap
    .to(background.current, { backgroundColor: settings.backgroundColor })
    .duration(transitionDuration);

  gsap.fromTo(slider.current, { rotateZ: 0 }, { rotateZ: 360 });
};
