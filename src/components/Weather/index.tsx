import { useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import CurrentWeather from './CurrentWeather';
import DaysWeather from './DaysWeather';
import DetailDayWeather from './DetailDayWeather';

const Weather = () => {
  const { currentWeather, weather } = useTypedSelector((state) => state.weather);

  const [selectedDay, setSelectedDay] = useState(0);

  return (
    <div className="weather">
      {Object.keys(currentWeather).length ? (
        <>
          <CurrentWeather data={currentWeather} />
          <DaysWeather
            selectedDay={selectedDay}
            onClickSelect={(id: number) => setSelectedDay(id)}
            weather={weather}
          />
          <DetailDayWeather data={weather[selectedDay]} />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Weather;
