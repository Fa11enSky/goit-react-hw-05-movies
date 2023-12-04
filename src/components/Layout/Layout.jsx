import StyledContainer from '../StyledContainer/StyledContainer';
import { Suspense } from 'react';
import { NavStyled } from './Nav.Styled';
import css from './styles.module.css'
// import Loader from './Loader/Loader';
const { NavLink, Outlet } = require('react-router-dom'); 

const Layout = () => {
  return (
    <StyledContainer>
      <header>
        <nav>
          <NavStyled>
            <li>
              <NavLink className={css.link} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={css.link} to="/movies">
                Movies
              </NavLink>
            </li>
          </NavStyled>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </StyledContainer>
  );
};
export default Layout;
