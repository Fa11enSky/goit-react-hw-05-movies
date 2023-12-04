import { Link, Outlet } from 'react-router-dom';
import ArticleStyled from './Article.Styled';
import DescriptionStyled from './Description.Styled';
import ThumbStyled from './Thumb.Styled';

const MovieDetailsItem = ({ movieObj }) => {
  const {
    original_title: title,
    overview,
    release_date,
    genres,
    poster_path: poster,
    vote_average: vote,
  } = movieObj;
  const date = release_date.split('-');
  return (
    <div>
      <ArticleStyled>
        <ThumbStyled>
          <img
            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${poster}`}
            alt="poster"
          />
        </ThumbStyled>
        <DescriptionStyled>
          <h1>{`${title} (${date[0]})`}</h1>
          <p style={{ marginBottom: 15 }}>
            Average vote: <span>{vote}</span>
          </p>
          <h2>Overview</h2>
          <p style={{ fontSize: 22, marginBottom: 10 }}>{overview}</p>
          <h2>Genres</h2>
          <ul
            style={{
              display: 'flex',
              gap: '15px',
              fontSize: '20px',
              marginBottom: 25,
            }}
          >
            {genres.map(el => {
              return <li key={el.id}>{el.name}</li>;
            })}
          </ul>
        </DescriptionStyled>
      </ArticleStyled>
      <div>
        <h2>Addition information</h2>
      </div>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews" element={<div>rev</div>}>
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
export default MovieDetailsItem;
