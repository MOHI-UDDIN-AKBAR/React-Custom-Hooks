import React from "react";

const useEffectOnce = (callback: () => void) => {
  React.useEffect(callback, []);
};

export default useEffectOnce;
