import SearchForm from 'components/SearchForm/SeearchForm';
import { useState, useEffect } from 'react';
import { useSearchParams,useLocation } from 'react-router-dom';
import { searchMovie } from 'sercvice/getFilmList';
import MovieList from 'components/MovieList/MovieList';
import Loader from 'components/Loader/Loader';
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();
  useEffect(() => {
    if(!query) return
      setIsLoading(true);
      searchMovie(query)
        .then(response => response.json())
        .then(data => {
          if (data.results.length > 0) {
            setIsEmpty(false);
            setMovies(data.results);
            return;
          }
          setIsEmpty(true);
        })
        .catch(err => console.log(err))
        .finally(() => setIsLoading(false));
    
  }, [ query, isEmpty]);
  const updateQueryString = name => {
    const nextName = name !== '' ? { query: name } : {};
    setSearchParams(nextName);
  };
  const handleSubmit = ev => {
    ev.preventDefault();
    const filmName = ev.target.elements.filmName.value;
    setMovies([]);
    updateQueryString(filmName);
  };

  return (
    <div>
      {isLoading && <Loader />}
      <SearchForm handleSubmit={handleSubmit} />
      <MovieList movies={movies} location={location} />
        
      {isEmpty && <div>VOID</div>}
    </div>
  );
};
export default Movies;
