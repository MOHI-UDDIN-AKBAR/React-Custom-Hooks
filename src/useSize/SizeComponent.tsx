import { useRef } from "react";
import useSize from "./useSize";

const SizeComponent = () => {
  const elementRef = useRef<HTMLTextAreaElement | null>(null);
  const size = useSize(elementRef);
  return (
    <div>
      <div>{JSON.stringify(size)}</div>
      <textarea
        title="textarea"
        id="10"
        cols={30}
        rows={10}
        ref={elementRef}
      ></textarea>
    </div>
  );
};

export default SizeComponent;
