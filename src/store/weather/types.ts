import { CurrentWeatherModel, SeriallizedWeatherModel } from '../../models';

export type WeatherState = {
  weather: SeriallizedWeatherModel[];
  currentWeather: CurrentWeatherModel;
  history: string[];
  isLoading: boolean;
  error: string;
};

export enum WeatherActionEnum {
  SET_WEATHER = 'SET_WEATHER',
  SET_ERROR = 'SET_ERROR',
  SET_LOADING = 'SET_LOADING',
  SET_CURRENT_WEATHER = 'SET_CURRENT_WEATHER',
  SET_HISTORY = 'SET_HISTORY',
}

export interface SetWeatherAction {
  type: WeatherActionEnum.SET_WEATHER;
  payload: SeriallizedWeatherModel[];
}

export interface SetErrorAction {
  type: WeatherActionEnum.SET_ERROR;
  payload: string;
}

export interface SetLoadingAction {
  type: WeatherActionEnum.SET_LOADING;
  payload: boolean;
}

export interface SetCurrentWeatherAction {
  type: WeatherActionEnum.SET_CURRENT_WEATHER;
  payload: CurrentWeatherModel;
}

export interface SetHistoryAction {
  type: WeatherActionEnum.SET_HISTORY;
  payload: string;
}

export type WeatherAction =
  | SetWeatherAction
  | SetErrorAction
  | SetLoadingAction
  | SetCurrentWeatherAction
  | SetHistoryAction;
