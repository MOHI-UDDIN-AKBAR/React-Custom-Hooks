import { useEffect, useRef, useCallback } from "react";

const useTimeout = (callbackF: () => void, delay: number = 0) => {
  const timeoutId = useRef<NodeJS.Timeout | null>();
  const callbackRef = useRef(callbackF);
  useEffect(() => {
    callbackRef.current = callbackF;
  }, [callbackF]);
  const set = useCallback(() => {
    timeoutId.current = setTimeout(() => callbackRef.current(), delay);
  }, [delay]);

  const clear = useCallback(() => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
      timeoutId.current = null;
    }
  }, []);

  const reset = useCallback(() => {
    clear();
    set();
  }, [set, clear]);

  useEffect(() => {
    set();
    return clear;
  }, [delay, set, clear]);

  return { reset, clear };
};

export default useTimeout;
