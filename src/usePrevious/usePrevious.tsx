import { useRef } from "react";

const usePrevious = (counter: number) => {
  const previousRef = useRef<number | undefined>();
  const currentRef = useRef<number | undefined>(counter);

  if (currentRef.current !== counter) {
    previousRef.current = currentRef.current;
    currentRef.current = counter;
  }

  return previousRef.current;
};

export default usePrevious;
