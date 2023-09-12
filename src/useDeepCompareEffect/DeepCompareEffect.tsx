import React, { useEffect, useRef, useState } from "react";
import useDeepCompareEffect from "./useDeepCompareEffect";

const DeepCompareEffect = () => {
  const [age, setAge] = useState(0);
  const [otherCount, setOtherCount] = useState(0);
  const useEffectRef = useRef<any>();
  const deepCompareEffectRef = useRef<any>();
  const person = { age, name: "Arafat" };

  useEffect(() => {
    useEffectRef.current.textContent =
      parseInt(useEffectRef.current.textContent) + 1;
  }, [person]);

  useDeepCompareEffect(() => {
    deepCompareEffectRef.current.textContent =
      parseInt(deepCompareEffectRef.current.textContent) + 1;
  }, [person]);

  return (
    <>
      <p>
        useEffect : <span ref={useEffectRef}>0</span>
      </p>
      <p>
        useDeepCompareEffect :<span ref={deepCompareEffectRef}>0</span>
      </p>
      <p>other Count : {otherCount}</p>
      <pre>{JSON.stringify(person)}</pre>
      <div>
        <button type="button" onClick={() => setAge((p) => p + 1)}>
          increment Age
        </button>
        <button type="button" onClick={() => setOtherCount((p) => p + 1)}>
          Increment other count
        </button>
      </div>
    </>
  );
};

export default DeepCompareEffect;
