import { useEffect, useRef } from "react";

const useRenderCount = () => {
  const counterRef = useRef(0);
  useEffect(() => {
    counterRef.current++;
  });
  return counterRef;
};

export default useRenderCount;
