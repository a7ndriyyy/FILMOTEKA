import { Container, Section } from 'components/App.styled';
import Error from 'components/Error/Error';
import Loading from 'components/Loading/Loading';
import MovieList from 'components/Movielist/MovieList';
import React, { Suspense, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getMoveDetails } from 'services/movies-api';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const detail = async id => {
      try {
        const response = await getMoveDetails(id);
        setMovie(response);
        setLoading(true);
      } catch (error) {
        console.log(error.message);
        setError(true);
        setLoading(false);
      }
    };

    detail(movieId);

    return () => {
      detail(movieId);
    };
  }, [movieId]);

  return (
    <>
      <Section>
        <Container>
          {error && <Error />}
          {loading ? <MovieList movie={movie} /> : <Loading />}
        </Container>
      </Section>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;