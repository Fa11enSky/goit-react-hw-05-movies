import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { searchMovieById } from 'sercvice/getFilmList';
import MovieDetailsItem from 'components/MovieDetailsItem/MovieDetailsItem';
const MovieDetails = () => {
  const [movieItem, setMovieItem] = useState({});
  const [done, setDone] = useState(false);
  const { movieId } = useParams();
  useEffect(() => {
    searchMovieById(movieId)
      .then(response => response.json())
      .then(data => {
        setMovieItem(data);
        setDone(true);
      })
      .catch(err => console.log(err));
  }, [movieId]);
  return done && <MovieDetailsItem movieObj={movieItem} />;
};
export default MovieDetails;
