import { MutableRefObject} from "react";
import {IconType} from "react-icons"

export interface ThemeSettings {
  backgroundColor: string;
  buttonColor: string;
  textColor: string;
  sliderPosition: string;
  githubLogoColor: string;
  githubBackgroundColor: string;
}

export type Slider = MutableRefObject<HTMLDivElement>;
export type Background = MutableRefObject<HTMLDivElement>;
export type Logo = MutableRefObject<IconType>;

export interface ThemeTransitionItems {
  slider: Slider;
  background: Background;
  githubLogo: Logo
}

export const lightModeSettings: ThemeSettings = {
  backgroundColor: "rgb(248 250 252 / var(--tw-bg-opacity)",
  buttonColor: "rgb(30 41 59 / var(--tw-bg-opacity)",
  textColor: "rgb(15 23 42 / var(--tw-text-opacity)",
  sliderPosition: "0.75rem",
  githubLogoColor: "",
  githubBackgroundColor: "" 
};

export const darkModeSettings: ThemeSettings = {
  backgroundColor: "rgb(15 23 42 / var(--tw-bg-opacity)",
  buttonColor: "rgb(148 163 184 / var(--tw-bg-opacity)",
  textColor: "rgb(234 179 8 / var(--tw-text-opacity)",
  sliderPosition: "1.75rem",
  githubLogoColor: "",
  githubBackgroundColor: "" 
};
