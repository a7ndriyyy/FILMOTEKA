import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));

const App = () => {
  return (
    <>
      <Routes>
          <Route index element={<Home />} />
          <Route  element={<Movies />} />
      </Routes>
    </>
  );
};

export default App;