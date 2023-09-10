import React from "react";
import useFetch from "./useFetch";

const url = `https://jsonplaceholder.typicode.com/todos/1`;

const FetchComponent = () => {
  const { data, isError, isLoading } = useFetch(url);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        isError
      ) : (
        <pre>{JSON.stringify(data)}</pre>
      )}
    </>
  );
};

export default FetchComponent;
