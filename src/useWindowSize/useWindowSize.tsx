import React from "react";
import useEventListener from "../useEventListener/useEventListener";

type WindowSize = {
  width: number;
  height: number;
};
const useWindowSize = () => {
  const [windowSize, setWindowSize] = React.useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEventListener(
    "resize",
    (e: Event) => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    },
    window
  );
  return windowSize;
};

export default useWindowSize;
