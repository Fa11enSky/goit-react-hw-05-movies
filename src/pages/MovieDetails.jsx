import { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import { searchMovieById } from 'sercvice/getFilmList';
import MovieDetailsItem from 'components/MovieDetailsItem/MovieDetailsItem';
const MovieDetails = () => {
  const [movieItem, setMovieItem] = useState(null);
    const { movieId } = useParams();
    
  useEffect(() => {
    searchMovieById(movieId)
      .then(data => {
        setMovieItem(data);
      })
      .catch(err => console.log(err));
  }, [movieId]);
  return movieItem && <MovieDetailsItem movieObj={movieItem} />;
};
export default MovieDetails;
