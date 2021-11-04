import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { WeatherActionCreator } from '../store/weather/actionCreators';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(WeatherActionCreator, dispatch);
};
