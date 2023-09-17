import { useEffect, useRef } from "react";
import { ChildComponentProps } from "./DebugInfoComponent";

const useDebugInfo = (props: ChildComponentProps) => {
  const prevPropsRef = useRef(props);
  const changedPropsRef = useRef<Record<string, any> | null>(null);
  const lastRenderTimeRef = useRef(Date.now());
  const renderCountRef = useRef<number>(0);

  useEffect(() => {
    renderCountRef.current++;
  });

  console.log(prevPropsRef.current, props);
  const propsKeys = Object.keys({ ...prevPropsRef.current, ...props });
  console.log(propsKeys);
  changedPropsRef.current = propsKeys.reduce((obj, key) => {
    console.log("Obj\t", obj);
    if (props[key] === prevPropsRef.current[key]) return obj;
    return {
      ...obj,
      [key]: { previous: prevPropsRef.current[key], current: props[key] },
    };
  }, {} as Record<string, any>);

  const info = {
    renderCount: renderCountRef.current,
    changedProp: changedPropsRef.current,
    timeSinceLastRender: Date.now() - lastRenderTimeRef.current,
    lastRenderTime: lastRenderTimeRef.current,
  };
  useEffect(() => {
    prevPropsRef.current = props;
    lastRenderTimeRef.current = Date.now();
  }, [props]);
  return info;
};

export default useDebugInfo;
