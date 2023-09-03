import { useState } from "react";
import useTimeout from "./useTimeout";

const TimeOutComponent = () => {
  const [counter, setCounter] = useState<number>(10);
  const { reset, clear } = useTimeout(() => setCounter(0), 2000);
  return (
    <>
      <p>Counter : {counter}</p>
      <button type="button" onClick={() => setCounter((prev) => prev + 1)}>
        increment
      </button>
      <button type="button" onClick={() => clear()}>
        Clear Timeout
      </button>
      <button type="button" onClick={() => reset()}>
        Reset Timeout
      </button>
    </>
  );
};

export default TimeOutComponent;
