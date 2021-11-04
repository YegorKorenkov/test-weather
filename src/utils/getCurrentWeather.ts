import { SeriallizedWeatherModel } from '../models';

export const getCurrentWeather = (weather: SeriallizedWeatherModel) => {
  return {
    city: weather.city,
    day: weather.day,
    data: weather.data[0],
  };
};
