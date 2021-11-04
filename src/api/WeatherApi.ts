import axios from 'axios';
import { API_KEY, API_URL } from '../constants';
import { FetchedWeatherModel } from '../models';

export const WeatherApi = {
  async fetchWeather(city = 'Kyiv'): Promise<FetchedWeatherModel> {
    const res = await axios(API_URL + '?q=' + city + '&cnt=40&units=metric&appid=' + API_KEY);
    return res.data;
  },
};
