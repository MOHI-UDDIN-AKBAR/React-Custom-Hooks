import React, { useState } from "react";
import useStateWithHistory from "./useStateWithHistory";

const StateWithHistoryComponent = () => {
  const [username, setUsername] = useState<string>("Samir");
  const {
    set,
    count,
    setCount,
    stateHistory,
    pointer,
    goBack,
    goForward,
    goToIndex,
  } = useStateWithHistory();
  return (
    <>
      <p>Current State : {count}</p>
      <p>History : {stateHistory.join(", ")} </p>
      <p>Pointer : {pointer}</p>
      <p>Username: {username}</p>
      <div>
        <button
          type="button"
          onClick={() =>
            setCount((p: number) => {
              const value = p * 2;
              set(value);
              return value;
            })
          }
        >
          Double
        </button>
        <button
          type="button"
          onClick={() =>
            setCount((p: number) => {
              const value = p + 1;
              set(value);
              return value;
            })
          }
        >
          Increment
        </button>
        <button type="button" onClick={() => goBack()}>
          Back
        </button>
        <button type="button" onClick={() => goForward()}>
          Forward
        </button>
        <button type="button" onClick={() => goToIndex(2)}>
          Go to index 2
        </button>
        <button type="button" onClick={() => setUsername("Rifat")}>
          Change name
        </button>
      </div>
    </>
  );
};

export default StateWithHistoryComponent;
