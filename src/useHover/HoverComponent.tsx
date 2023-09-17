import React from "react";
import useEventListener from "../useEventListener/useEventListener";
import useHover from "./useHover";

const HoverComponent = () => {
  const elementRef = React.useRef<HTMLDivElement | null>(null);
  const hover = useHover(elementRef);
  return (
    <div style={{ height: "100dvh", display: "grid", placeItems: "center" }}>
      <div
        ref={elementRef}
        style={{
          width: 200,
          height: 200,
          display: "grid",
          placeItems: "center",
          backgroundColor: hover ? "#1f2633" : "red",
          color: hover ? "white" : "#1f2633",
        }}
      >
        HoverComponent
      </div>
    </div>
  );
};

export default HoverComponent;
