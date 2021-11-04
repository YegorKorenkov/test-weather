import { useEffect, useState } from 'react';

import { useActions } from './hooks/useActions';
import { useTypedSelector } from './hooks/useTypedSelector';

import Error from './components/Error';
import History from './components/History';
import Search from './components/Search';
import Weather from './components/Weather';
import Loader from './components/Loader';

const App = () => {
  const { getWeather, setError } = useActions();
  const { history, error, isLoading } = useTypedSelector((state) => state.weather);

  const [selectedCity, setSelectedCity] = useState('');

  const onSubmitCity = (city: string) => {
    getWeather(city);
    setSelectedCity(city);
  };

  useEffect(() => {
    getWeather();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="container">
      {error && <Error deleteError={() => setError('')} error={error} />}
      <div className="search-block">
        <Search selectedCity={selectedCity} onSubmit={onSubmitCity} />
        <History onSelectCity={onSubmitCity} history={history.reverse()} />
      </div>

      <Weather />
    </div>
  );
};

export default App;
