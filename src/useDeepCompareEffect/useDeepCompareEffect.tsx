import { useEffect, useRef } from "react";
import { isEqual } from "lodash/fp";
type Person = {
  age: number;
  name: string;
};
const useDeepCompareEffect = (callback: () => void, dependencies: [Person]) => {
  const dependencyRef = useRef<[Person]>();
  if (!isEqual(dependencyRef.current, dependencies)) {
    dependencyRef.current = dependencies;
  }
  useEffect(callback, dependencyRef.current);
};

export default useDeepCompareEffect;
