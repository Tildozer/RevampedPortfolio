import React, { LegacyRef, MutableRefObject } from "react";

export interface ThemeSettings {
  backgroundColor: string;
  buttonColor: string;
  textColor: string;
  sliderPosition: string;
}

export type Slider = React.MutableRefObject<HTMLDivElement>;
export type Background = React.MutableRefObject<HTMLDivElement>;

export interface ThemeTransitionItems {
  slider: Slider;
  background: Background;
}

export const lightModeSettings: ThemeSettings = {
  backgroundColor: "rgb(248 250 252 / var(--tw-bg-opacity)",
  buttonColor: "rgb(30 41 59 / var(--tw-bg-opacity)",
  textColor: "rgb(15 23 42 / var(--tw-text-opacity)",
  sliderPosition: "0.75rem",
};

export const darkModeSettings: ThemeSettings = {
  backgroundColor: "rgb(15 23 42 / var(--tw-bg-opacity)",
  buttonColor: "rgb(148 163 184 / var(--tw-bg-opacity)",
  textColor: "rgb(234 179 8 / var(--tw-text-opacity)",
  sliderPosition: "1.75rem",
};
