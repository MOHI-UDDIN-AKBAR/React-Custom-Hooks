import { useCallback, useRef, useState } from "react";

const useStateWithHistory = () => {
  const [count, setCount] = useState<number>(1);
  const [stateHistory, setStateHistory] = useState([count]);
  const currentStateRef = useRef(count);
  const statePointerRef = useRef(0);

  const set = useCallback(
    (newValue: number): void => {
      const index = stateHistory.findIndex(
        (each) => each === currentStateRef.current
      );
      if (currentStateRef.current !== newValue) {
        index !== -1
          ? setStateHistory((prev) => [...prev.slice(0, index + 1), newValue])
          : setStateHistory((prev) => [...prev, newValue]);
        currentStateRef.current = newValue;
        statePointerRef.current++;
      }
    },
    [stateHistory]
  );

  const goBack = () => {
    setCount((prev: number): number => {
      if (statePointerRef.current <= 0) return prev;
      statePointerRef.current = statePointerRef.current - 1;
      currentStateRef.current = stateHistory[statePointerRef.current];
      return stateHistory[statePointerRef.current];
    });
  };

  const goForward = () => {
    setCount((prev: number): number => {
      if (statePointerRef.current >= stateHistory.length - 1) return prev;
      statePointerRef.current = statePointerRef.current + 1;
      currentStateRef.current = stateHistory[statePointerRef.current];
      return stateHistory[statePointerRef.current];
    });
  };

  const goToIndex = (index: number) => {
    setCount((prev: number): number => {
      if (index >= stateHistory.length - 1) return prev;
      statePointerRef.current = index;
      currentStateRef.current = stateHistory[statePointerRef.current];
      return stateHistory[statePointerRef.current];
    });
  };
  return {
    set,
    count,
    setCount,
    stateHistory,
    pointer: statePointerRef.current,
    goBack,
    goForward,
    goToIndex,
  };
};

export default useStateWithHistory;

// const set = useCallback(() => {
//   if (currentStateRef.current !== count) {
//     if (statePointerRef.current < stateHistory.length - 1) {
//       setStateHistory((prev) => prev.slice(0, statePointerRef.current));
//     }
//     if (stateHistory.includes(count)) return;
//     setStateHistory((prev) => [...prev, count]);
//     currentStateRef.current = count;
//     statePointerRef.current = stateHistory.length;
//   }
// }, [count, stateHistory]);

// const goBackword = () => {
//   setCount((prev: number): number => {
//     if (statePointerRef.current <= 0) return prev;
//     statePointerRef.current--;
//     return stateHistory[statePointerRef.current];
//   });
// };

// if (statePointerRef.current < stateHistory.length - 1) {
//   setStateHistory((prev) => [
//     ...prev.slice(0, statePointerRef.current),
//     newValue,
//   ]);
// }
// if (stateHistory.includes(newValue)) return;
// setStateHistory((prev) => [...prev, newValue]);
// currentStateRef.current = newValue;
// statePointerRef.current = stateHistory.length;
