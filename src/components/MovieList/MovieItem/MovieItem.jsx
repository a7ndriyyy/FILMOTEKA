import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { DetailWrrap, ImgWrrap, LinkStyled, Span } from './MovieItem.styled';

const BASE_IMG = 'https://image.tmdb.org/t/p/w300';


const MovieItem = ({ movie }) => {
  const location = useLocation();

  const ref = useRef(location.state?.from ?? '/');
  const { title, overview, genres, release_date, vote_average, poster_path } =
    movie;
  return (
    <>
      <LinkStyled to={ref.current}>Go back</LinkStyled>
      <ImgWrrap>
        <img src={`${BASE_IMG}${poster_path}`} alt={title} />
        {vote_average ? (
          <Span rating={vote_average}>{vote_average.toFixed(1)}</Span>
        ) : (
          ''
        )}
      </ImgWrrap>
      <DetailWrrap>
        <h2>{title}</h2>
        <p>Release data: {release_date}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        <ul>
          {genres && genres.map(({ id, name }) => <li key={id}>{name}</li>)}
        </ul>
      </DetailWrrap>
    </>
  );
};

export default MovieItem;