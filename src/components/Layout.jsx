import StyledContainer from './StyledContainer/StyledContainer';
const { NavLink, Outlet } = require('react-router-dom');
const Layout = () => {
  return (
    <StyledContainer>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </StyledContainer>
  );
};
export default Layout;
