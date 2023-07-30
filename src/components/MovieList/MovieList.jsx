import { useLocation } from 'react-router-dom';
import { List, ListItem, ListLink, ListTitle } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      {!location.pathname.includes('movies') && (
        <ListTitle>Trenging today</ListTitle>
      )}
      <List>
        {movies &&
          movies.map(({ id, title }) => (
            <ListItem key={id}>
              <ListLink to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </ListLink>
            </ListItem>
          ))}
      </List>
    </>
  );
};

export default MoviesList;
