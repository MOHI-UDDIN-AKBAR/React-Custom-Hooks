import React from "react";
import useToggle from "../Hooks/useToggle";

const ToggleComponent = () => {
  const { value, toggleValue } = useToggle(false);
  return (
    <div>
      <p>value : {value.toString()}</p>
      <button onClick={() => toggleValue()}>Toggle</button>
      <button onClick={() => toggleValue(true)}>turn into True</button>
      <button onClick={() => toggleValue(false)}>turn into false </button>
    </div>
  );
};

export default ToggleComponent;
