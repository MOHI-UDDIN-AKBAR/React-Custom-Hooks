import { useState } from "react";
import useDebounce from "./Debounce/useDebounce";
// import useDebounceVersionTwo from "./Debounce/useDebounceVersionTwo";

const DebounceComponent = () => {
  const [counter, setCounter] = useState(0);
  const delay: number = 1000;
  // option one
  useDebounce(() => alert(counter), counter, delay);

  // option two
  // useDebounceVersionTwo(() => alert(counter), [counter, delay], delay);

  return (
    <>
      <p>Counter : {counter}</p>
      <button type="button" onClick={() => setCounter((prev) => prev + 1)}>
        increment
      </button>
    </>
  );
};

export default DebounceComponent;
