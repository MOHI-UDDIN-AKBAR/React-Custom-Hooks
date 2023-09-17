import React from "react";
import useOnline from "./useOnline";

const OnlineComponent = () => {
  const status = useOnline();
  return <div>online Status : {status.toString()}</div>;
};

export default OnlineComponent;
