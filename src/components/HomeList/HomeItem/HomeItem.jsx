import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const HomeItem = ({ title, poster_path, id }) => {
  const BASE_IMG = 'https://image.tmdb.org/t/p/w200';
  const location = useLocation();
  return (
    <li key={id}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <img src={`${BASE_IMG}${poster_path}`} alt={title} />
        {title && title.substring(0, 20)}
      </Link>
    </li>
  );
};

export default HomeItem;