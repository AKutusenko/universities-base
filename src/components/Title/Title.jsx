import { Container, Title as TitleTag } from './Title.styled';
import { Link } from 'react-router-dom';

function Title({ title, path = '/' }) {
  return (
    <Link to={path}>
      <Container>
        <TitleTag>{title}</TitleTag>
      </Container>
    </Link>
  );
}

export { Title };
