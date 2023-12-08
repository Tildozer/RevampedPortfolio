import React, {
  useEffect,
  useState,
  ReactElement,
  JSXElementConstructor,
  useRef,
  LegacyRef,
} from "react";

type Props = {
  children: ReactElement<any, string | JSXElementConstructor<any>>;
};

const ThemeSlider = ({ children }: Props) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  //   console.log("darkMode", darkMode)

  if (React.Children.count(children) !== 1) {
    throw new Error("ParentComponent expects exactly one child.");
  }

  const childsBackground = useRef<LegacyRef<HTMLDivElement>>(null!);
  const childWithProps = React.cloneElement(children, { childsBackground });

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    // Update local storage when darkMode changes
    window.localStorage.setItem("darkMode", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const storedMode = window.localStorage.getItem("darkMode");
    if (storedMode === null) {
      window.localStorage.setItem(
        "darkMode",
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
      );
    } else {
      setDarkMode(storedMode === "dark");
    }
  }, []);

  return (
    <div>
      <div onClick={toggleTheme} className="select-none">
        {darkMode ? "darkMode" : "lightMode"}
      </div>
      {childWithProps}
    </div>
  );
};

export default ThemeSlider;
