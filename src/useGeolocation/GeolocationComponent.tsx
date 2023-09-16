import React from "react";
import useGeolocation from "./useGeolocation";

const GeolocationComponent = () => {
  const { error, data, isLoading } = useGeolocation();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {data && (
        <div>
          <p> latitude: {data.latitude}</p> <p>longitude: {data.longitude}</p>
        </div>
      )}
    </>
  );
};

export default GeolocationComponent;
