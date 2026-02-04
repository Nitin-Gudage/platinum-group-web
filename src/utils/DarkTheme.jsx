import React, { useEffect, useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";

const DarkTheme = () => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark",
  );

  // Apply theme
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <>
      <button
        onClick={() => setDarkMode((prev) => !prev)}
        className="
              relative p-2 rounded-full
              shadow-accent
              shadow-sm hover:shadow-md
              dark:shadow-black
            "
        aria-label="Toggle Dark Mode"
      >
        {darkMode ? (
          <CiLight className="text-yellow-500 text-xl" />
        ) : (
          <CiDark className="text-primary text-xl" />
        )}
      </button>
    </>
  );
};

export default DarkTheme;
