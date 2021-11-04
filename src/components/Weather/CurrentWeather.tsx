import { FC } from 'react';
import { format } from 'date-fns';

import { CurrentWeatherModel } from '../../models';
import { capitalizeFirstLetter } from '../../utils/capitallizeFirstLetter';

import { ReactComponent as FeelsLikeIcon } from '../../assets/icons/feelsLike.svg';
import { ReactComponent as HumidityIcon } from '../../assets/icons/humidity.svg';
import { ReactComponent as PressureIcon } from '../../assets/icons/pressure.svg';
import { getWeatherIcon } from '../../utils/getWeatherIcon';

type Props = {
  data: CurrentWeatherModel;
};

const CurrentWeather: FC<Props> = ({ data }) => {
  return (
    <div className="current-weather">
      <h1>{data.city}</h1>
      <p className="current-weather__last-update">
        Last update {format(new Date(data.data.dt_txt), 'HH:mm')}
      </p>
      <div className="current-weather__main">
        <span className="current-weather__main-temp">{Math.round(data.data.main.temp)}&deg;C</span>
        <div>
          <img height={80} src={getWeatherIcon(data.data.weather[0].icon)} alt="Weather Icon" />
          <span>{capitalizeFirstLetter(data.data.weather[0].description)}</span>
        </div>
      </div>
      <div className="current-weather__details">
        <div className="current-weather__details-item">
          <span>
            <FeelsLikeIcon />
          </span>
          <div>
            <p>Feels like</p>
            <p>{Math.round(data.data.main.feels_like)}&deg;C</p>
          </div>
        </div>

        <div className="current-weather__details-item">
          <span>
            <PressureIcon />
          </span>
          <div>
            <p>Pressure</p>
            <p>{data.data.main.pressure} m/bar</p>
          </div>
        </div>

        <div className="current-weather__details-item">
          <span>
            <HumidityIcon />
          </span>
          <div>
            <p>Humidity</p>
            <p>{data.data.main.humidity} m/bar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
