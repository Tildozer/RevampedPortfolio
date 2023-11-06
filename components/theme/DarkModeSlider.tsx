"use client";
import React, { useState, useEffect } from "react";
import { PiSunBold, PiMoonBold } from "react-icons/pi";
import { useTheme } from "next-themes";
import { gsap } from "gsap";

interface Props {}

export const DarkModeSlider = (props: Props) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  type Settings = {
    backgroundColor: string;
    buttonColor: string;
    textColor: string;
    duration: number;
    sliderPosition: string;
  };

  const darkModeTransition = (
    settings: Settings,
    newTheme: "dark" | "light",
  ) => {
    gsap
      .to(".transition-bg", {
        background: settings.backgroundColor,
      })
      .duration(settings.duration);
    gsap
      .to(".transition-button", {
        background: settings.buttonColor,
      })
      .duration(settings.duration * 2);
    gsap.to(".transition-text", {
      color: settings.textColor,
    });
    gsap.fromTo(".transition-slider", { rotateZ: 0 }, { rotateZ: 360 });
    gsap
      .to(".transition-slider", { left: settings.sliderPosition })
      .duration(settings.duration);

    setTimeout(() => {
      setTheme(newTheme);
      // gsap.to()
    }, settings.duration * 1000);
  };
  const lightModeSettings: Settings = {
    backgroundColor: "rgb(248 250 252 / var(--tw-bg-opacity)",
    buttonColor: "rgb(30 41 59 / var(--tw-bg-opacity)",
    textColor: "rgb(15 23 42 / var(--tw-text-opacity)",
    duration: 0.2,
    sliderPosition: "0.75rem",
  };
  const darkModeSettings = {
    backgroundColor: "rgb(15 23 42 / var(--tw-bg-opacity)",
    buttonColor: "rgb(148 163 184 / var(--tw-bg-opacity)",
    textColor: "rgb(234 179 8 / var(--tw-text-opacity)",
    duration: 0.2,
    sliderPosition: "1.75rem",
  };

  const darkModeClick = () => {
    if (theme === "dark") {
      darkModeTransition(lightModeSettings, "light");
    } else {
      darkModeTransition(darkModeSettings, "dark");
    }
  };

  useEffect(() => {
    setMounted(true);
    if (!window.localStorage.theme) {
      const userPrefDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      window.localStorage.setItem("theme", userPrefDark ? "dark" : "light");
    }
    setTheme(window.localStorage.theme);
  }, [setTheme]);

  if (!mounted) return null;

  return (
    <div className="transition-text flex flex-col text-[.45rem] dark:text-yellow-500 text-slate-900">
      <span className="ml-2">{theme === "dark" ? "Dark" : "Light"} mode</span>
      <label
        className="transition-button w-12 h-2 rounded-md m-2 bg-slate-800 dark:bg-slate-400"
        onClick={darkModeClick}
      >
        <input
          className="transition-text absolute top-4 left-3 opacity-0 w-12 h-4 hover:cursor-pointer"
          type="checkBox"
        />
        <div className="transition-slider text-lg flex items-center justify-center bg-red-200 dark:bg-blue-900 w-6 h-6 rounded-full absolute top-3 left-3 dark:left-7 hover:cursor-pointer">
          {theme === "dark" ? <PiMoonBold /> : <PiSunBold />}
        </div>
      </label>
    </div>
  );
};
