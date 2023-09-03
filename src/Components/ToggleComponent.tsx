import React from "react";
import useToggle from "../Hooks/useToggle";

const ToggleComponent = () => {
  const { value, toggle } = useToggle(false);

  return (
    <>
      <p>value : {value.toString()}</p>
      <button type="button" onClick={() => toggle()}>
        Toggle
      </button>
      <button type="button" onClick={() => toggle(false)}>
        make False
      </button>
      <button type="button" onClick={() => toggle(true)}>
        make True
      </button>
    </>
  );
};

export default ToggleComponent;
