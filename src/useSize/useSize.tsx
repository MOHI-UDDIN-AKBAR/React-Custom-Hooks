import React, { useEffect, useState } from "react";

const useSize = (ref: React.MutableRefObject<HTMLTextAreaElement | null>) => {
  const [size, setSize] = useState<any>();
  useEffect(() => {
    if (!ref.current) return;
    const observer = new ResizeObserver(([entry]) => {
      console.log(entry);
      return setSize(entry.contentRect);
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return size;
};

export default useSize;
