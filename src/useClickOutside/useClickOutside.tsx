import React from "react";
import useEventListener from "../useEventListener/useEventListener";

const useClickOutside = (
  eventType: string,
  callback: (e: any) => void,
  element: any = document
) => {
  useEventListener(eventType, callback, element);
};

export default useClickOutside;
