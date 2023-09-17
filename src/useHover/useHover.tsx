import React from "react";

const useHover = (
  elementRef: React.MutableRefObject<HTMLDivElement | null>
) => {
  const [hover, setHover] = React.useState(false);

  React.useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      if (!elementRef.current) return;
      if (elementRef.current.contains(e.target as Node)) {
        setHover(true);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      if (!elementRef.current) return;
      if (elementRef.current.contains(e.target as Node)) {
        setHover(false);
      }
    };

    const element = elementRef.current;

    if (element) {
      element.addEventListener("mouseover", handleMouseOver);
      element.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        element.removeEventListener("mouseover", handleMouseOver);
        element.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [elementRef]);

  return hover;
};

export default useHover;
