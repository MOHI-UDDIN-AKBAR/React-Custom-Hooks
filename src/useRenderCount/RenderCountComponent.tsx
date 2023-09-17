import React from "react";
import useRenderCount from "./useRenderCount";

const RenderCountComponent = () => {
  const [toggle, setToggle] = React.useState(false);
  const counterRef = useRenderCount();
  return (
    <div>
      <p>toggle : {toggle.toString()}</p>
      <p>Render Count :{counterRef.current}</p>
      <button type="button" onClick={() => setToggle((p) => !p)}>
        Toggle
      </button>
    </div>
  );
};

export default RenderCountComponent;
