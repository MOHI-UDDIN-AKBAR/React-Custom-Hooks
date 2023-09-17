import React from "react";
import useEventListener from "../useEventListener/useEventListener";

const useOnline = () => {
  const [status, setStatus] = React.useState(navigator.onLine);
  useEventListener("online", (e: any) => setStatus(navigator.onLine));
  useEventListener("offline", (e: any) => setStatus(navigator.onLine));

  return status;
};

export default useOnline;
