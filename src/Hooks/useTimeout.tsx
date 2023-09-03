import { useEffect, useRef, useCallback, useState } from "react";

const useTimeout = (delay: number = 0) => {
  const [counter, setCounter] = useState<number>(10);
  const timeoutId = useRef<NodeJS.Timeout | null>();

  const set = useCallback(() => {
    timeoutId.current = setTimeout(() => setCounter(0), delay);
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

  return { counter, setCounter, reset, clear };
};

export default useTimeout;
