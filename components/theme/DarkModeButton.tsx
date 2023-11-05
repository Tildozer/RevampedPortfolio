"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { gsap } from "gsap";

interface Props {}

export const DarkModeButton = (props: Props) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  type Settings = {
    backgroundColor: string;
    buttonColor: string;
    textColor: string;
    duration: number;
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
    setTimeout(() => setTheme(newTheme), settings.duration * 1000);
  };

  const darkModeClick = () => {
    if (theme === "dark") {
      darkModeTransition(
        {
          backgroundColor: "rgb(248 250 252 / var(--tw-bg-opacity)",
          buttonColor: "rgb(30 41 59 / var(--tw-bg-opacity)",
          textColor: "rgb(234 179 8 / var(--tw-text-opacity)",
          duration: 0.5,
        },
        "light",
      );
    } else {
      darkModeTransition(
        {
          backgroundColor: "rgb(15 23 42 / var(--tw-bg-opacity)",
          buttonColor: "rgb(148 163 184 / var(--tw-bg-opacity)",
          textColor: "rgb(15 23 42 / var(--tw-text-opacity)",
          duration: 0.5,
        },
        "dark",
      );
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
    <div>
      <label
        className="transition-button w-16 h-8 rounded-md m-2 bg-slate-800 dark:bg-slate-400 text-yellow-500 dark:text-slate-900"
        onClick={darkModeClick}
      >
        <input className="transition-text opacity-0 w-16 h-8" type="checkBox" />
        {theme === "dark" ? "light" : "dark"}
      </label>
    </div>
  );
};
