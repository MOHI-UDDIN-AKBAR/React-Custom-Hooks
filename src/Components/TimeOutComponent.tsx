import useTimeout from "../Hooks/useTimeout";

const TimeOutComponent = () => {
  const { counter, setCounter, reset, clear } = useTimeout(2000);
  return (
    <>
      <p>Counter : {counter}</p>
      <button type="button" onClick={() => setCounter((prev) => prev + 1)}>
        increment
      </button>
      <button type="button" onClick={() => clear()}>
        Clear Timeout
      </button>
      <button type="button" onClick={() => reset()}>
        Reset Timeout
      </button>
    </>
  );
};

export default TimeOutComponent;
