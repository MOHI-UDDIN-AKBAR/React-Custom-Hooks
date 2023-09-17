import React from "react";

const useDarkMode = (modeName: string, defaultValue: boolean) => {
  const [darkMode, setDarkMode] = React.useState(() => {
    const mode = localStorage.getItem(modeName);
    if (mode) return mode === "black" ? false : true;
    return defaultValue;
  });

  const toggleDarkMode = React.useCallback(() => {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem(modeName, newMode ? "white" : "black");
      return newMode;
    });
  }, [modeName]);

  React.useLayoutEffect(() => {
    if (!darkMode) {
      document.body.style.backgroundColor = "#1f2633";
      document.body.style.color = "white";
    } else if (darkMode) {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }, [darkMode]);
  return toggleDarkMode;
};

export default useDarkMode;
