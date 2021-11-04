import { CurrentWeatherModel, SeriallizedWeatherModel } from '../../models';
import { WeatherAction, WeatherActionEnum, WeatherState } from './types';

const initialState: WeatherState = {
  weather: [] as SeriallizedWeatherModel[],
  currentWeather: {} as CurrentWeatherModel,
  history: [] as string[],
  isLoading: false,
  error: '',
};

export default function WeatherReducer(state = initialState, action: WeatherAction): WeatherState {
  switch (action.type) {
    case WeatherActionEnum.SET_WEATHER:
      return { ...state, weather: action.payload };

    case WeatherActionEnum.SET_LOADING:
      return { ...state, isLoading: action.payload };

    case WeatherActionEnum.SET_ERROR:
      return { ...state, error: action.payload };

    case WeatherActionEnum.SET_CURRENT_WEATHER:
      return { ...state, currentWeather: action.payload };

    case WeatherActionEnum.SET_HISTORY: {
      const updatedHistory = [...state.history];

      if (updatedHistory.length === 10) {
        updatedHistory.splice(9, 1);
        updatedHistory.unshift(action.payload);
      } else {
        updatedHistory.unshift(action.payload);
      }

      return {
        ...state,
        history: updatedHistory,
      };
    }

    default:
      return state;
  }
}
