import React from "react";
import Cookies from "js-cookie";
const useCookies = (name: string, defaultValue: string) => {
  const [userName, setUserName] = React.useState<string | null>(() => {
    const cookie = Cookies.get(name);
    console.log(cookie);
    if (cookie) return cookie;
    Cookies.set(name, defaultValue);
    return defaultValue;
  });

  const updateCookie = React.useCallback(
    (newName: string) => {
      try {
        Cookies.set(name, newName);
        setUserName(newName);
      } catch (error) {
        console.error("Failed to update cookie:", error);
      }
    },
    [name]
  );

  const removeCookie = React.useCallback(() => {
    try {
      Cookies.remove(name);
      setUserName(null);
    } catch (error) {
      console.error("Failed to remove cookie:", error);
    }
  }, [name]);

  return { userName, updateCookie, removeCookie };
};

export default useCookies;
