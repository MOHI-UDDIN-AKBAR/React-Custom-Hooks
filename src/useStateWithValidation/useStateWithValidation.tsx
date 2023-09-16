import { useState, useEffect, useRef } from "react";

const useStateWithValidation = (
  callback: (name: string) => boolean,
  defaultValue: string = ""
) => {
  const [value, setValue] = useState(defaultValue);
  const [isValid, setIsValid] = useState(false);
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    setIsValid(callbackRef.current(value));
  }, [value, callbackRef.current]);

  return { value, isValid, setValue };
};

export default useStateWithValidation;
