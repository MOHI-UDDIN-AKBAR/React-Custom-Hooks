import { useState, useEffect } from "react";

type GeolocationType = {
  latitude: number | string;
  longitude: number | string;
};

const useGeolocation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<GeolocationType | undefined>();
  useEffect(() => {
    const onSuccess = (e: GeolocationPosition) => {
      setIsLoading(false);
      setData({ latitude: e.coords.latitude, longitude: e.coords.longitude });
      setError(null);
    };

    const onError = (e: GeolocationPositionError) => {
      setError(e.message);
      setIsLoading(false);
    };

    navigator.geolocation.getCurrentPosition(onSuccess, onError);

    const id = navigator.geolocation.watchPosition((e) => onSuccess, onError);
    return () => navigator.geolocation.clearWatch(id);
  }, []);

  return { data, error, isLoading };
};

export default useGeolocation;
