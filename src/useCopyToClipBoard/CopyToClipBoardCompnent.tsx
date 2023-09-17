import { useRef } from "react";
import useCopyToClipBoard from "./useCopyToClipBoard";
const CopyToClipBoardCompnent = () => {
  const elementRef = useRef<HTMLParagraphElement | null>(null);
  const { success, copyToClipBoard } = useCopyToClipBoard();

  return (
    <div>
      <p ref={elementRef}>Hello World</p>
      <button type="button" onClick={() => copyToClipBoard(elementRef)}>
        {success ? "Copied" : "Copy"}
      </button>
    </div>
  );
};

export default CopyToClipBoardCompnent;
