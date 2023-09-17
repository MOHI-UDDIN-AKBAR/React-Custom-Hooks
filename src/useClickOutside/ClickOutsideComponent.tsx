import React from "react";
import useClickOutside from "./useClickOutside";

const ClickOutsideComponent = () => {
  const [toggle, setToggle] = React.useState(false);
  const elementRef = React.useRef<null | HTMLDivElement>(null);
  useClickOutside(
    "click",
    (e: any) => {
      if (
        !elementRef.current?.contains(e.target) &&
        e.target.nodeName !== "BUTTON"
      ) {
        setToggle(false);
      }
    },
    document
  );

  return (
    <div>
      {!toggle && (
        <button type="button" onClick={() => setToggle(!toggle)}>
          Open
        </button>
      )}
      {toggle && (
        <div
          ref={elementRef}
          style={{
            border: "2px solid red",
            width: 200,
            height: 200,
            backgroundColor: "#1f2633",
            color: "white",
            display: "grid",
            placeItems: "center",
            fontSize: "30px",
            marginTop: "100px",
          }}
        >
          Model
        </div>
      )}
    </div>
  );
};

export default ClickOutsideComponent;
