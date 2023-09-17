import React, { useState } from "react";
import useDebugInfo from "./useDebugInfo";

export type ChildComponentProps = {
  count: number;
  toggle: boolean;
  [key: string]: any;
};

const ChildComponent: React.FC<ChildComponentProps> = (props) => {
  const info = useDebugInfo(props);
  return (
    <div>
      <p>Toggle: {props.toggle.toString()}</p>
      <p>Count: {props.count}</p>
      <div style={{ margin: "20px 0" }}>{JSON.stringify(info)}</div>
    </div>
  );
};

const DebugInfoComponent = () => {
  const [count, setCount] = useState<number>(0);
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div>
      <ChildComponent count={count} toggle={toggle} />
      <button type="button" onClick={() => setToggle(!toggle)}>
        Toggle
      </button>
      <button type="button" onClick={() => setCount((p) => p + 1)}>
        Increment
      </button>
    </div>
  );
};

export default DebugInfoComponent;
