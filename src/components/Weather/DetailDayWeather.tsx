import { format } from 'date-fns';
import { FC } from 'react';
import { SeriallizedWeatherModel } from '../../models';

import humidityIcon from '../../assets/icons/drop-of-blood.png';
import { getWeatherIcon } from '../../utils/getWeatherIcon';
import { capitalizeFirstLetter } from '../../utils/capitallizeFirstLetter';
import classNames from 'classnames';

type Props = {
  data: SeriallizedWeatherModel;
};

const DetailDayWeather: FC<Props> = ({ data }) => {
  return (
    <ul className="detail-weather">
      {data.data.map((item, id) => (
        <li
          key={Math.random() * 5}
          className={classNames({
            'detail-weather__item': true,
            'detail-weather__item_gradient': id === 0 || id % 2 === 0,
          })}>
          <div className="detail-weather__upper-block">
            <p className="detail-weather__time">{format(new Date(item.dt_txt), 'hh:mm')}</p>
            <img alt="Icon" src={getWeatherIcon(item.weather[0].icon)} />
            <p>{capitalizeFirstLetter(item.weather[0].description)}</p>
          </div>
          <div className="detail-weather__lower-block">
            <p className="temp">
              {Math.round(item.main.temp)}
              <span>&deg;C</span>
            </p>
            <p className="humidity">
              <img src={humidityIcon} alt="Icon" />
              {item.main.humidity}%
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default DetailDayWeather;
