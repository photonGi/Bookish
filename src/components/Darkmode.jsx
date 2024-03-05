import React, { useEffect, useState } from "react";
import DarkPng from "../assets/darkpng.png";
import LightPng from "../assets/lightpng.png";

const Darkmode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="relative w-12">
      <img
        src={DarkPng}
        alt="dark-theme"
        className={`cursor-pointer transition-all duration-300 absolute top-[0px] right-0 z-10 w-12 ${
          theme === "dark" ? "opacity-0" : "opactiy-100"
        }`}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      <img
        src={LightPng}
        alt="light-theme"
        className={`cursor-pointer transition-all duration-300 w-12`}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
    </div>
  );
};

export default Darkmode;
