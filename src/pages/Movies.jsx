import { Container } from 'components/App.styled';
import Error from 'components/Error/Error';
import LoadMore from 'components/LoadMore/LoadMore';
import Loading from 'components/Loading/Loading';
import SearchMoviesForm from 'components/SearchMoviesForm/SearchMoviesForm';
import SearchMoviesList from 'components/SearchMoviesList/SearchMoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from 'services/movie-api';


const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const queryParam = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!queryParam) return setMovies([]);
    const searchMovie = async (query, page) => {
      setLoading(true);
      try {
        const { results, total_result, total_pages } = await getSearchMovies(
          query,
          page
        );
        if (page === 1) {
          setMovies(results);
        } else {
          setMovies(prevMovies => [...prevMovies, ...results]);
          setLoadMore(total_pages < Math.ceil(total_result / 20));
        }
        setLoadMore(true);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
        setLoading(true);
      }
    };
    searchMovie(queryParam, page);
  }, [page, queryParam]);

  useEffect(() => {
    if (!queryParam) return setLoadMore(false);
  }, [queryParam]);
  const handleQuery = query => {
    setSearchParams(query);
  };

  const onClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <section>
      <Container>
        <SearchMoviesForm
          // handleQuery={handleQuery}
          // queryParam={queryParam}
          // setPage={setPage}
          setSearchParams={setSearchParams}
        />
        {loading ? (
          <Loading />
        ) : (
          <>
            {movies.length !== 0 && <h2>Movies: '{queryParam}'</h2>}
            <SearchMoviesList movies={movies} />
            {loadMore && <LoadMore onClick={onClick} />}
          </>
        )}
        {error && <Error />}
      </Container>
    </section>
  );
};

export default Movies;