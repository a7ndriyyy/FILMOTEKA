import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const App = () => {
  return (
    <>
      <Routes>
        <Route  element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route  element={<Movies />} />
          <Route element={<MovieDetails />}>
            <Route  element={<Cast />} />
            <Route  element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;