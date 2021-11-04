import classNames from 'classnames';
import { format } from 'date-fns';
import { FC, memo } from 'react';
import { SeriallizedWeatherModel, WeatherData } from '../../models';

import humidityIcon from '../../assets/icons/drop-of-blood.png';
import { getWeatherIcon } from '../../utils/getWeatherIcon';

const getMinTemp = (weather: WeatherData[]): number => {
  return Math.round(Math.min(...weather.map((item) => item.main.temp)));
};

const getMaxTemp = (weather: WeatherData[]): number => {
  return Math.round(Math.max(...weather.map((item) => item.main.temp)));
};

type Props = {
  weather: SeriallizedWeatherModel[];
  onClickSelect: (id: number) => void;
  selectedDay: number;
};

const DaysWeather: FC<Props> = memo(({ weather, onClickSelect, selectedDay }) => {
  return (
    <div className="weather-cards">
      {weather.map((item, key) => (
        <div
          key={Math.random() * 5}
          onClick={() => onClickSelect(key)}
          className={classNames({
            'weather-cards__card': true,
            'weather-cards__card-choosed': selectedDay === key,
          })}>
          <p className="weather-cards__card--title">{item.day}</p>
          <span className="weather-cards__card--date">
            {format(new Date(item.data[0].dt_txt), 'd MMM')}
          </span>

          <div className="weather-cards__card--icon-body">
            <img
              height={50}
              src={getWeatherIcon(item.data[Math.floor(item.data.length / 2)].weather[0].icon)}
              alt="icon"
            />
            <span>
              <img alt="Icon" src={humidityIcon} />
              {item.data[Math.floor(item.data.length / 2)].main.humidity}%
            </span>
          </div>
          <div className="weather-cards__card--temp">
            <p className="weather-cards__card--temp-max">{getMaxTemp(item.data)}</p>
            <p className="weather-cards__card--temp-min">{getMinTemp(item.data)}</p>
          </div>
        </div>
      ))}
    </div>
  );
});

export default DaysWeather;
