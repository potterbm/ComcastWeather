import * as Location from 'expo-location';
import React, { useState, useEffect } from 'react';

const API_KEY = '064b8336ef21acef0bb14e8ca6624458';

export type WeatherCondition = {
  id: number; // Weather condition id
  main: string; // Group of weather parameters (Rain, Snow, Extreme etc.)
  description: string; // Weather condition within the group. You can get the output in your language. Learn more
  icon: string; // Weather icon id
};

export type Weather = {
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  }
  weather: WeatherCondition[];
  timezone: number;
  visibility: number;
  wind: {
    deg: number;
    speed: number;
  }
  clouds: {
    all: number;
  }
  rain: {
    '1h': number; // Rain volume for the last 1 hour, mm
    '3h': number; // Rain volume for the last 3 hours, mm
  }
  snow: {
    '1h': number; // Snow volume for the last 1 hour, mm
    '3h': number; // Snow volume for the last 3 hours, mm
  }
};

export default function useGetWeather(): Weather | null {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  useEffect(() => {
    async function getWeather() {
      const { latitude, longitude } = location.coords;

      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${API_KEY}`);
      const weather = await response.json();

      console.log('weather', weather);
      setWeather(weather);
    }

    if (location) getWeather();
  }, [location])

  return weather;
}
