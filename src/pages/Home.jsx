import { Container, Section } from 'components/App.styled';
import Error from 'components/Error/Error';
import HomeList from 'components/HomeList/HomeList';
import Loading from 'components/Loading/Loading';
import { useEffect, useState } from 'react';

import { getMovies } from 'services/movie-api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const details = async () => {
      try {
        const { results } = await getMovies();
        setMovies(results);
        setLoading(true);
      } catch (error) {
        console.log(error.message);
        setError(true);
        setLoading(true);
      }
    };

    details();
  }, []);

  return (
    <Section>
      <Container>
        <h1>Popular movies of the day! </h1>
        {error && <Error />}
        {loading ? <HomeList movies={movies} /> : <Loading />}
      </Container>
    </Section>
  );
};

export default Home;