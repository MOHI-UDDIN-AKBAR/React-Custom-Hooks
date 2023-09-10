import { useState, useEffect } from "react";

type PersonProps = {
  name: string | null;
  age: number | null;
};

const getInfoFromStorage = (
  storage: Storage,
  defaultValue: PersonProps | (() => PersonProps)
): PersonProps => {
  const person = storage.getItem("person");
  if (person) {
    return JSON.parse(person);
  }
  return typeof defaultValue === "function" ? defaultValue() : defaultValue;
};

const useStorage = (storage: Storage, defaultValue: PersonProps) => {
  const [person, setPerson] = useState(() => {
    return getInfoFromStorage(storage, defaultValue);
  });

  const removeName = () => {
    setPerson((prev) => ({ ...prev, name: null }));
  };

  const removeAge = () => {
    setPerson((prev) => ({ ...prev, age: null }));
  };

  useEffect(() => {
    storage.setItem("person", JSON.stringify(person));
  }, [person, storage]);

  return { removeName, removeAge, person, setPerson };
};

export const useLocalStorage = (defaultValue: PersonProps) => {
  return useStorage(localStorage, defaultValue);
};
