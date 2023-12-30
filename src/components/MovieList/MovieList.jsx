import MovieItem from "components/MovieItem/MovieItem";
import StyledMovieList from "./MovieList.Styled";
const MovieList = ({ movies }) => {
  return (
    <StyledMovieList>
      {movies.map(el => {
            return <MovieItem key={el.id} movie={el}  />;
          })}
    </StyledMovieList>
  );
};
export default MovieList;
