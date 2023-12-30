import { NavLink } from "react-router-dom";
import { NavStyled } from "./Nav.Styled";
import css from './styles.module.css'
const Header = () => {
  return (
    <header className={css.header}>
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
  );
}

export default Header
