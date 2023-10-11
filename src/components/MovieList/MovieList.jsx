import { Box, ListLink } from './MovieList.styled';
import { Link } from 'react-router-dom';

import MovieItem from './MovieItem/MovieItem';
const MovieList = ({ movie }) => {
  return (
    <>
      <Box>
        <MovieItem movie={movie} />
        <ListLink>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ListLink>
      </Box>
    </>
  );
};

export default MovieList;