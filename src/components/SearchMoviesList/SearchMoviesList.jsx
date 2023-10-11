import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ListSearch } from './SearchMoviesList.styled';
const BASE_IMG = 'https://image.tmdb.org/t/p/w200';

const SearchMoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <ListSearch>
        {movies.map(({ title, id, poster_path }) => (
          <li key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              <img src={`${BASE_IMG}${poster_path}`} alt={title} />
              {title && title.substring(0, 18)}
            </Link>
          </li>
        ))}
      </ListSearch>
    </>
  );
};

export default SearchMoviesList;