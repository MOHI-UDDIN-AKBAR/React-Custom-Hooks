import { useLocalStorage } from "./useStorage";

const StorageComponent = () => {
  const { setPerson, person, removeName, removeAge } = useLocalStorage({
    name: "Rifat",
    age: 22,
  });

  return (
    <>
      <p> Name : {person.name} </p>
      <p>Age : {person.age}</p>
      <button
        type="button"
        onClick={() => setPerson((prev) => ({ ...prev, name: "Samir" }))}
      >
        Set name
      </button>
      <button
        type="button"
        onClick={() => setPerson((prev) => ({ ...prev, age: 27 }))}
      >
        Set age
      </button>
      <button type="button" onClick={() => removeName()}>
        Remove name
      </button>
      <button type="button" onClick={() => removeAge()}>
        Remove Age
      </button>
    </>
  );
};

export default StorageComponent;
