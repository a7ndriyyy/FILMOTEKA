import React from 'react';
import { Item } from './CastItem.styled';

const CastItem = ({ profile_path, name, character }) => {
  const BASE_IMG = 'https://image.tmdb.org/t/p/w200';

  return (
    <Item>
      {profile_path ? (
        <img src={`${BASE_IMG}${profile_path}`} alt={character} />
      ) : (
        <img src={'Заглушка'} alt={character} />
      )}
      <h2>{name}</h2>
      <p>{character}</p>
    </Item>
  );
};

export default CastItem;