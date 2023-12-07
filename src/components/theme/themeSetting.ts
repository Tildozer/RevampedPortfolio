type ThemeSettings = {
    backgroundColor: string;
    buttonColor: string;
    textColor: string;
    transitionDuration: number;
    sliderPosition: string;
  };

const lightModeSettings: ThemeSettings = {
    backgroundColor: "rgb(248 250 252 / var(--tw-bg-opacity)",
    buttonColor: "rgb(30 41 59 / var(--tw-bg-opacity)",
    textColor: "rgb(15 23 42 / var(--tw-text-opacity)",
    transitionDuration: 0.2,
    sliderPosition: "0.75rem",
  };

  const darkModeSettings: ThemeSettings = {
    backgroundColor: "rgb(15 23 42 / var(--tw-bg-opacity)",
    buttonColor: "rgb(148 163 184 / var(--tw-bg-opacity)",
    textColor: "rgb(234 179 8 / var(--tw-text-opacity)",
    transitionDuration: 0.2,
    sliderPosition: "1.75rem",
  };
