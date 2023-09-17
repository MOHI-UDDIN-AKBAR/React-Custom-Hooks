import React from "react";
import useDarkMode from "./useDarkMode";

const DarkModeComponent = () => {
  const toggleDarkMode = useDarkMode("darkMode", false);
  return (
    <div>
      <button type="button" onClick={() => toggleDarkMode()}>
        Toggle Dark Mode
      </button>
    </div>
  );
};

export default DarkModeComponent;
