import { useEffect, useRef } from "react";

const useEventListener = (
  eventType: string,
  callback: (e: Event) => void,
  element: any = window
) => {
  const callbackRef = useRef(callback);
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler = (e: Event) => callbackRef.current(e);

    window.addEventListener(eventType, handler);
    return () => window.removeEventListener(eventType, handler);
  }, [eventType, element, callbackRef]);
};

export default useEventListener;
