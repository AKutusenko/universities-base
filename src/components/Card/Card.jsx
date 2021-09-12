import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';

function Card({ id, name, buttonName, handleClick, url }) {
  const onClick = () => {
    handleClick(id);
  };

  return (
    <div key={id}>
      <Link to={{ pathname: `/${url}/${id}` }}>{name}</Link>
      <Button buttonName={buttonName} onClick={onClick} />
    </div>
  );
}

export { Card };
