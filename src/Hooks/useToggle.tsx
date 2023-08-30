import { useState } from "react";

const useToggle = (defaultValue: boolean) => {
  const [value, setValue] = useState<boolean>(defaultValue);
  const toggleValue = (newValue?: boolean) => {
    typeof newValue === "boolean"
      ? setValue(newValue)
      : setValue((prev) => !prev);
  };

  return { value, toggleValue };
};

export default useToggle;
