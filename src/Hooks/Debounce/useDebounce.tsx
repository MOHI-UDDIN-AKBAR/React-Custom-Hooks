import { useCallback, useEffect, useRef } from "react";

const useDebounce = (
  callbackF: () => void,
  counter: number,
  delay: number = 0
) => {
  const callbackRef = useRef(callbackF);
  const timeoutRef = useRef<NodeJS.Timeout | null>();
  useEffect(() => {
    callbackRef.current = callbackF;
  }, [callbackF]);

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
  }, [delay, counter]);

  const clear = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  useEffect(() => {
    set();
    return clear;
  }, [delay, set, clear]);

  useEffect(clear, []);
};

export default useDebounce;
