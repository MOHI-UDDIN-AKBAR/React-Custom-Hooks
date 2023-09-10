import { useState } from "react";
import usePrevious from "./usePrevious";

const PreviousComponent = () => {
  const [username, setUsername] = useState("Samir");
  const [counter, setCounter] = useState(0);
  const previousValue = usePrevious(counter);

  return (
    <>
      <p>
        current : {counter} - previous : {previousValue && previousValue}
      </p>
      <p>{username}</p>
      <button type="button" onClick={() => setCounter((prev) => prev + 1)}>
        Increment
      </button>
      <button type="button" onClick={() => setUsername("Arafat")}>
        change name to Arafat
      </button>
    </>
  );
};

export default PreviousComponent;
