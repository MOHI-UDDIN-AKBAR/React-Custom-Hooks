import { useLayoutEffect, useRef } from "react";

const useUpdateEffect = (callback: () => void, dependencies: Array<number>) => {
  const firstRenderRef = useRef(true);
  useLayoutEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    return callback();
  }, dependencies);
};

export default useUpdateEffect;
