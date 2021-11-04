import classNames from 'classnames';
import { FC, FormEvent, useEffect, useRef, useState } from 'react';
import { ReactComponent as SearchIcon } from '../../assets/icons/searchIcon.svg';
import useOutsideClick from '../../hooks/useOutsideClick';

type Props = {
  onSubmit: (city: string) => void;
  selectedCity: string;
};

const Search: FC<Props> = ({ onSubmit, selectedCity }) => {
  const ref = useRef(null);

  const [city, setCity] = useState('');
  const [isActive, setIsActive] = useState(false);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(city);
  };

  useOutsideClick(ref, () => setIsActive(false));

  useEffect(() => {
    setCity(selectedCity);
  }, [selectedCity]);

  return (
    <form className="search" onSubmit={submitHandler}>
      <div
        ref={ref}
        className={classNames({ search__container: true, search__container_active: isActive })}>
        <input
          type="text"
          value={city}
          placeholder="Enter the name of the city"
          onChange={(e) => setCity(e.currentTarget.value)}
          onClick={() => setIsActive(true)}
          className="search__input"
        />
        <SearchIcon />
      </div>
      {alert && <span className="search__alert">{alert}</span>}
      <button type="submit" className="search__button">
        Search
      </button>
    </form>
  );
};

export default Search;
