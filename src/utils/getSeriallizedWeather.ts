import { format } from 'date-fns';
import { FetchedWeatherModel, SeriallizedWeatherModel } from '../models';

export const getSeriallizedWeather = (weather: FetchedWeatherModel): SeriallizedWeatherModel[] => {
  return Object.values(
    weather.list.reduce((prev, next) => {
      const key = format(new Date(next.dt_txt), 'eeee');

      if (!prev[key]) prev[key] = { day: key, city: weather.city.name, data: [] };
      prev[key].data.push(next);
      return prev;
    }, {} as { [key: string]: SeriallizedWeatherModel }),
  ) as SeriallizedWeatherModel[];
};
