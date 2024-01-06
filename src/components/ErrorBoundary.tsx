import React, { useEffect } from "react";
import {
  redirect,
  useNavigate,
  useRouteError,
  useLocation,
} from "react-router-dom";

type Props = {};

const ErrorBoundary = (props: Props) => {
  const nav = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log();
    const locationArr = location.pathname.split("/");
    if (locationArr.length > 2) {
      if (locationArr[1] === "projects" || locationArr[1] === "contact") {
        return nav(`/${locationArr[1]}`);
      }
    }
    return nav(`/${locationArr[0]}`);
  }, []);

  return (
    <div className="bg-slate-200 dark:bg-slate-900 h-screen w-screen"></div>
  );
};

export default ErrorBoundary;
