import React from "react";
import useArray from "./useArray";

const ArrayComponent = () => {
  const {
    array,
    addElement,
    changeSecondElement,
    removeSecondElement,
    keepElement,
    setElement,
    clear,
  } = useArray([1, 2, 3, 4, 5]);
  return (
    <>
      <p>{array?.join(", ")}</p>
      <button type="button" onClick={() => addElement(7)}>
        ADD 7
      </button>
      <button type="button" onClick={() => changeSecondElement(9)}>
        Change Second Element To 9
      </button>
      <button type="button" onClick={() => removeSecondElement()}>
        Remove Second Element
      </button>
      <button type="button" onClick={() => keepElement((n: number) => n < 4)}>
        Keep Numbers Less Than 4
      </button>
      <button type="button" onClick={() => setElement([1, 2])}>
        Set To 1, 2
      </button>
      <button type="button" onClick={() => clear()}>
        Clear
      </button>
    </>
  );
};

export default ArrayComponent;
