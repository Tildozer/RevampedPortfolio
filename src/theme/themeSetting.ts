import { MutableRefObject } from "react";
import { IconType } from "react-icons";
import {} from "react-router-dom";

export interface ThemeSettings {
  backgroundColor: string;
  buttonColor: string;
  textColor: string;
  sliderPosition: string;
  githubLogoColor: string;
  linkedinLogoColor: string;
  footerLinkBackgroundColor: string;
}

export type Slider = MutableRefObject<HTMLDivElement>;
export type Background = MutableRefObject<HTMLDivElement>;
export type Links = React.RefObject<HTMLAnchorElement>;
// export type Logo = MutableRefObject<HTMLDivElement>;

export interface ThemeTransitionItems {
  slider: Slider;
  background: Background;
  githubContainer: Links;
  linkedinContainer: Links;
  footerContainer: Background;
}

export const lightModeSettings: ThemeSettings = {
  backgroundColor: "rgb(226 232 240 / var(--tw-bg-opacity)",
  buttonColor: "rgb(30 58 138 / var(--tw-bg-opacity)",
  textColor: "rgb(0 0 0 / var(--tw-bg-opacity)",
  sliderPosition: "0.75rem",
  footerLinkBackgroundColor: "rgb(0 0 0 / var(--tw-bg-opacity)",
  githubLogoColor: "rgb(251 146 60 / var(--tw-text-opacity)",
  linkedinLogoColor: "#0077b5",
};

export const darkModeSettings: ThemeSettings = {
  backgroundColor: "rgb(15 23 42 / var(--tw-bg-opacity)",
  buttonColor: "rgb(148 163 184 / var(--tw-bg-opacity)",
  textColor: "rgb(234 179 8 / var(--tw-text-opacity)",
  sliderPosition: "1.75rem",
  footerLinkBackgroundColor: "rgb(71 85 105 / var(--tw-bg-opacity)",
  githubLogoColor: "rgb(34 211 238 / var(--tw-text-opacity)",
  linkedinLogoColor: "rgb(255, 255, 255)",
};
