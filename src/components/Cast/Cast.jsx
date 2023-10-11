import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastMovie } from 'services/movie-api';
import { Container, Section } from 'components/App.styled';
import CastList from './CastList/CastList';
import Error from 'components/Error/Error';

const Cast = () => {
  const [cast, setCast] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async id => {
      try {
        const { cast } = await getCastMovie(id);
        setCast(cast);
      } catch (error) {
        console.log(error.message);
        setError(true);
        setLoading(false);
      } finally {
        setLoading(true);
      }
    };

    fetchData(movieId);
  }, [movieId]);
  return (
    <Section>
      <Container>
        {loading && <CastList cast={cast} />}
        {error && <Error />}
      </Container>
    </Section>
  );
};

export default Cast;