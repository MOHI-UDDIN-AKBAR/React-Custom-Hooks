import { useState, useCallback } from "react";

const useArray = (defaultArray: number[]) => {
  const [array, setArray] = useState(defaultArray);

  const addElement = useCallback((value: number) => {
    setArray((previousArray) => [...previousArray, value]);
  }, []);

  const changeSecondElement = useCallback((value: number) => {
    setArray((prevArray) => {
      const newArray = Array.of(...prevArray);
      newArray?.splice(1, 1, value);
      return newArray;
    });
  }, []);

  const removeSecondElement = useCallback(() => {
    setArray((prevArray) => {
      return prevArray
        .splice(0, 1)
        .concat(prevArray?.splice(1, prevArray?.length - 1));
    });
  }, []);

  const keepElement = useCallback((callback: (n: number) => boolean) => {
    setArray((prevArray) => {
      return prevArray?.filter(callback);
    });
  }, []);

  const setElement = useCallback((newArray: number[]) => {
    setArray(newArray);
  }, []);

  const clear = useCallback(() => setArray([]), []);

  return {
    array,
    addElement,
    changeSecondElement,
    removeSecondElement,
    keepElement,
    setElement,
    clear,
  };
};

export default useArray;
