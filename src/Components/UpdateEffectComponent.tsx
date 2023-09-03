import React, { useState } from "react";
import useUpdateEffect from "../Hooks/useUpdateEffect";

const UpdateEffectComponent = () => {
  const [counter, setCounter] = useState(0);
  useUpdateEffect(() => alert(counter), [counter]);
  return (
    <>
      <p>Counter : {counter}</p>
      <button type="button" onClick={() => setCounter((prev) => prev + 1)}>
        Increment
      </button>
    </>
  );
};

export default UpdateEffectComponent;
