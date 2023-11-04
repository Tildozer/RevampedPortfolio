"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

interface Props {}

export const DarkModeButton = (props: Props) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      className={``}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? "Dark" : "Light"}
    </button>
  );
};
