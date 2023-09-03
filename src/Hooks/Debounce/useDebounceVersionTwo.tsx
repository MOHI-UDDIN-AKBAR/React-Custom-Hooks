import { useEffect } from "react";
import useTimeout from "../useTimeout";

const useDebounceVersionTwo = (
  callback: () => void,
  dependencies: any,
  delay: number
) => {
  const { reset, clear } = useTimeout(callback, delay);
  useEffect(() => reset(), [...dependencies, reset]);
  useEffect(() => clear(), []);
};

export default useDebounceVersionTwo;
