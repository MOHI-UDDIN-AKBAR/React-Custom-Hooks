import React, { useCallback, useState } from "react";
import copy from "copy-to-clipboard";

const useCopyToClipBoard = () => {
  const [success, setSuccess] = useState(false);
  const copyToClipBoard = useCallback(
    (ref: React.MutableRefObject<HTMLParagraphElement | null>) => {
      if (ref.current && ref.current.textContent) {
        const result = copy(ref.current.textContent);
        result && setSuccess(true);
      }
    },
    []
  );
  return { success, copyToClipBoard };
};

export default useCopyToClipBoard;
