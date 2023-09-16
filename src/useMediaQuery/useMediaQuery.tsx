import React from "react";
import useWindowSize from "../useWindowSize/useWindowSize";
import useEventListener from "../useEventListener/useEventListener";

//Version One
// const useMediaQuery = () => {
//   const [isLarge, setIsLarge] = React.useState(false);
//   const { width } = useWindowSize();
//   React.useEffect(() => {
//     if (width > 600) {
//       setIsLarge(true);
//     } else {
//       setIsLarge(false);
//     }
//   }, [width]);
//   return isLarge;
// };

//Version two
const useMediaQuery = (mediaQuery: string) => {
  const [isLarge, setIsLarge] = React.useState(false);
  const [mediaQueryList, setMediaQueryList] = React.useState<
    MediaQueryList | undefined
  >();

  React.useEffect(() => {
    const list = window.matchMedia(mediaQuery);
    setMediaQueryList(list);
    setIsLarge(list.matches);
  }, [mediaQuery]);

  useEventListener("change", (e: any) => setIsLarge(e.matches), mediaQueryList);
  return isLarge;
};
export default useMediaQuery;
