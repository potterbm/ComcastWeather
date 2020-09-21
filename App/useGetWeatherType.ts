import type { Weather, WeatherCondition } from '../useGetWeather';

const validConditions = ['Thunderstorm', 'Drizzle', 'Rain', 'Snow', 'Atmosphere', 'Clear', 'Clouds'];

export type WeatherType = 'Thunderstorm' | 'Drizzle' | 'Rain' | 'Snow' | 'Atmosphere' | 'Clear' | 'Clouds';

function isInRange(num, min, max) {
  return min <= num && num <= max;
}

export default function useGetWeatherType(weather: Weather): WeatherType {
  if (!weather) return null;

  const [primaryWeatherCondition: WeatherCondition] = weather.weather;

  if (!primaryWeatherCondition) return null;

  if (primaryWeatherCondition.id === 800) return 'Clear';

  if (isInRange(primaryWeatherCondition.id, 200, 299)) return 'Thunderstorm';
  if (isInRange(primaryWeatherCondition.id, 300, 399)) return 'Drizzle';
  if (isInRange(primaryWeatherCondition.id, 500, 599)) return 'Rain';
  if (isInRange(primaryWeatherCondition.id, 600, 699)) return 'Snow';
  if (isInRange(primaryWeatherCondition.id, 700, 799)) return 'Atmosphere';
  if (isInRange(primaryWeatherCondition.id, 800, 899)) return 'Clouds';

  return validConditions[Math.floor(Math.random()*items.length)];
}
