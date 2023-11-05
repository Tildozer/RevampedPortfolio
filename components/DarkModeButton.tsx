"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
// import gsap from "gsap";

interface Props {}

export const DarkModeButton = (props: Props) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <label
      className="relative inline-block w-16 h-8"
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      <input className="" type="checkBox" />
      <span className=""></span>
    </label>
  );
};
