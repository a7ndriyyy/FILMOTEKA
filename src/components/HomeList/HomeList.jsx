import { ListHome } from './HomeList.styled';
import HomeItem from './HomeItem/HomeItem';

const HomeList = ({ movies }) => {
  return (
    <ListHome>
      {movies.map(({ title, id, poster_path }) => (
        <HomeItem key={id} title={title} poster_path={poster_path} id={id} />
      ))}
    </ListHome>
  );
};

export default HomeList;