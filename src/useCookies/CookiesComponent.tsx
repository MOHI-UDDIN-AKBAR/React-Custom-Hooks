import React from "react";
import useCookies from "./useCookies";

const CookiesComponent = () => {
  const { userName, updateCookie, removeCookie } = useCookies(
    "username",
    "Rifat"
  );

  return (
    <div>
      <p>{userName}</p>
      <button type="button" onClick={() => updateCookie("Arafat")}>
        Change Name To Arafat
      </button>
      <button type="button" onClick={() => removeCookie()}>
        Delete Name
      </button>
    </div>
  );
};

export default CookiesComponent;
