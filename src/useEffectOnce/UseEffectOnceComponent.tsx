import React from "react";
import useEffectOnce from "./useEffectOnce";

const UseEffectOnceComponent = () => {
  const [count, setCount] = React.useState(0);
  useEffectOnce(() => alert("Hello"));
  return (
    <div>
      <p>Count : {count}</p>
      <button type="button" onClick={() => setCount((p) => p + 1)}>
        increment
      </button>
    </div>
  );
};

export default UseEffectOnceComponent;
