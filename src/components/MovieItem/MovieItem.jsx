import MovieItemStyled from './MovieItem.Styled';
import css from './style.module.css';
const { Link } = require('react-router-dom');

function MovieItem({ movie, location }) {
  return (
    <li>
      <Link style={{ textDecoration: 'none' }} to={`/movies/${movie.id}`} state={{from:location}}>
        <MovieItemStyled>
          <h1 className={css.header}> {movie.title}</h1>
          <div className={css.thumb}>
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`}
                alt={`${movie.title} poster`}
              />
            ) : (
              <img
                style={{ height: '450px' }}
                alt="dont have poster"
                src="https://usagif.com/wp-content/uploads/2021/4fh5wi/pepefrg-4.gif"
                height="450"
              />
            )}
          </div>
        </MovieItemStyled>
      </Link>
    </li>
  );
}
export default MovieItem;
