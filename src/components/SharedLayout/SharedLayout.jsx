import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Header, LinkStyle } from './SharedLayout.styled';
import { Container } from 'components/App.styled';
import Loading from 'components/Loading/Loading';
// import { Container } from 'components/App.styled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <nav>
            <LinkStyle to="/">
              <span>M</span>
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/fluency/48/film-reel.png"
                alt="film-reel"
              />
              <span>vie</span>
            </LinkStyle>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/movies">Movies</NavLink>
              </li>
            </ul>
          </nav>
        </Container>
      </Header>
      <main>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
      {/* <Footer>Footer</Footer> */}
    </>
  );
};

export default SharedLayout;