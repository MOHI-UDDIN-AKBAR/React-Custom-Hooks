import { useRef } from "react";
import useEventListener from "./useEventListener";

const EventListenerComponent = () => {
  const keyRef = useRef<HTMLSpanElement | null>(null);
  useEventListener(
    "keydown",
    (e: Event) => {
      console.log(e instanceof KeyboardEvent);
      if (keyRef.current === null) return null;
      if (e instanceof KeyboardEvent && e.key) {
        keyRef.current.textContent = e.key;
      }
    },
    window
  );
  return (
    <>
      <p>
        Last Key : <span ref={keyRef}></span>
      </p>
    </>
  );
};

export default EventListenerComponent;
