import MovieItemStyled from './MovieItem.Styled';
import css from './style.module.css';
import { IoMdStarOutline } from 'react-icons/io';

const { Link, useLocation } = require('react-router-dom');

function MovieItem({ movie }) {
  const location = useLocation();
  const defaultImage =
    'https://usagif.com/wp-content/uploads/2021/4fh5wi/pepefrg-4.gif';

  return (
    <li>
      <Link
        title={movie.title}
        style={{ textDecoration: 'none' }}
        to={`/movies/${movie.id}`}
        state={{ from: location }}
      >
        <MovieItemStyled>
          <div className={css.thumb}>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`
                  : defaultImage
              }
              alt={`${movie.title} poster`}
            />
          </div>
          <div style={{ display:'flex', justifyContent:'space-between'}}>
            <h2 className={css.header}> {movie.title}</h2>
            <p style={{ display: 'flex', gap: '5px' }} color="inherit">
              <IoMdStarOutline size="20px" />
              {movie.vote_average}{' '}
            </p>
          </div>
        </MovieItemStyled>
      </Link>
    </li>
  );
}
export default MovieItem;
