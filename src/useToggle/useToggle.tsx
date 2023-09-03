import { useState } from "react";

const useToggle = (defaultValue: boolean) => {
  const [value, setValue] = useState<boolean>(defaultValue);
  const toggle = (newValue?: boolean) => {
    setValue((currentValue) => {
      return typeof newValue === "boolean" ? newValue : !currentValue;
    });
  };
  return { value, toggle };
};

export default useToggle;
