import { AppDispatchType } from '..';
import { WeatherApi } from '../../api/WeatherApi';
import { errorMessages } from '../../constants';
import { SeriallizedWeatherModel } from '../../models';
import { getCurrentWeather } from '../../utils/getCurrentWeather';
import { getSeriallizedWeather } from '../../utils/getSeriallizedWeather';
import {
  SetErrorAction,
  SetLoadingAction,
  SetCurrentWeatherAction,
  SetWeatherAction,
  WeatherActionEnum,
  SetHistoryAction,
} from './types';

export const WeatherActionCreator = {
  setWeather: (payload: SeriallizedWeatherModel[]): SetWeatherAction => ({
    type: WeatherActionEnum.SET_WEATHER,
    payload,
  }),

  setCurrentWeather: (payload: any): SetCurrentWeatherAction => ({
    type: WeatherActionEnum.SET_CURRENT_WEATHER,
    payload,
  }),

  setLoading: (payload: boolean): SetLoadingAction => ({
    type: WeatherActionEnum.SET_LOADING,
    payload,
  }),

  setError: (payload: string): SetErrorAction => ({
    type: WeatherActionEnum.SET_ERROR,
    payload,
  }),

  setHistory: (payload: string): SetHistoryAction => ({
    type: WeatherActionEnum.SET_HISTORY,
    payload,
  }),

  getWeather: (city?: string) => async (dispatch: AppDispatchType) => {
    try {
      dispatch(WeatherActionCreator.setLoading(true));

      const weather = getSeriallizedWeather(await WeatherApi.fetchWeather(city));
      dispatch(WeatherActionCreator.setWeather(weather));
      dispatch(WeatherActionCreator.setCurrentWeather(getCurrentWeather(weather[0])));

      if (city) dispatch(WeatherActionCreator.setHistory(city));

      dispatch(WeatherActionCreator.setLoading(false));
    } catch (error) {
      dispatch(WeatherActionCreator.setError(errorMessages));
      dispatch(WeatherActionCreator.setLoading(false));
    }
  },
};
