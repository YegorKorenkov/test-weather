import classNames from 'classnames';
import { FC, memo, useRef, useState } from 'react';
import { ReactComponent as HistoryIcon } from '../../assets/icons/HistoryArrow.svg';
import useOutsideClick from '../../hooks/useOutsideClick';
import { capitalizeFirstLetter } from '../../utils/capitallizeFirstLetter';

type Props = {
  history: string[];
  onSelectCity: (city: string) => void;
};

const History: FC<Props> = memo(({ history, onSelectCity }) => {
  const ref = useRef(null);

  const [isVisibleList, setIsVisibleList] = useState(false);

  const clickHandler = () => {
    if (history.length) setIsVisibleList((prev) => !prev);
  };

  const onSelect = (city: string) => {
    setIsVisibleList(false);
    onSelectCity(city);
  };

  useOutsideClick(ref, () => setIsVisibleList(false));

  return (
    <>
      <div
        ref={ref}
        className={classNames({
          history: true,
          history_inactive: !history.length,
        })}>
        <span onClick={clickHandler}>History(last 10 queries)</span>
        <HistoryIcon className={isVisibleList ? 'rotate' : ''} />
        {isVisibleList && (
          <ul className="history__list">
            {history.map((item) => (
              <li key={Math.random() * 5} onClick={() => onSelect(item)}>
                {capitalizeFirstLetter(item)}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
});

export default History;
