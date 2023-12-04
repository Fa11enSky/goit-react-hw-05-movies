import MovieItem from "components/MovieItem/MovieItem";
const MovieList = ({ movies,location }) => {
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
            return <MovieItem key={el.id} movie={el} location={location} />;
          })}
    </ul>
  );
};
export default MovieList;
