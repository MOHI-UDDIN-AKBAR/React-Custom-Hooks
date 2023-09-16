import React, { useEffect, useState } from "react";

const useOnScreen = (
  rootMargin: string,
  ref: React.MutableRefObject<HTMLHeadingElement | null>
) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (ref.current === null) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin }
    );
    observer.observe(ref.current);
    return () => {
      if (ref.current === null) return;
      observer.unobserve(ref.current);
    };
  }, [ref, rootMargin]);

  return visible;
};

export default useOnScreen;
