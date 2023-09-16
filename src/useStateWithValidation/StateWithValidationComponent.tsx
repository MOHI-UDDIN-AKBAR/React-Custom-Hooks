import React from "react";
import useStateWithValidation from "./useStateWithValidation";

const StateWithValidationComponent = () => {
  const { value, isValid, setValue } = useStateWithValidation(
    (value) => value.length > 5,
    ""
  );
  return (
    <div>
      <p>isValid: {isValid.toString()}</p>
      <input
        type="text"
        value={value}
        title="inputField"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default StateWithValidationComponent;
