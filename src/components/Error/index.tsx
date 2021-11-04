import { FC, useEffect } from 'react';
import { ReactComponent as CloseIcon } from '../../assets/icons/Delete.svg';

type Props = {
  error: string;
  deleteError: () => void;
};

const Error: FC<Props> = ({ error, deleteError }) => {
  useEffect(() => {
    setTimeout(() => {
      deleteError();
    }, 3000);
  }, [deleteError]);

  return (
    <div className="error">
      <p>{error}</p>
      <CloseIcon onClick={deleteError} />
    </div>
  );
};

export default Error;
