import MovieItem from "components/MovieItem/MovieItem";
const MovieList = ({ movies }) => {
  return (
    <ul
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {movies.map(el => {
            return <MovieItem key={el.id} movie={el} />;
          })}
    </ul>
  );
};
export default MovieList;
