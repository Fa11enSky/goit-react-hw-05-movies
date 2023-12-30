import SearchForm from 'components/SearchForm/SeearchForm';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovie } from 'sercvice/getFilmList';
import MovieList from 'components/MovieList/MovieList';
import Loader from 'components/Loader/Loader';
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  useEffect(() => {
    if (!query) return;
    setIsLoading(true);
    searchMovie(query)
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
  }, [query]);
  // Цю штуку я бачив як робив Репета, але тільки після того як ви відправили на доопрацювання
  // я допер що то по відношенню до слухача на інпуті а не на сабміт😁
  // const updateQueryString = name => {
  //   const nextName = name !== '' ? { query: name } : {};
  //   setSearchParams(nextName);
  // };

  return (
    <>
      <div style={{ display:'flex',justifyContent:'center'}}>
        {isLoading && <Loader />}
        <SearchForm setSearch={setSearchParams} />
      </div>
      {isEmpty ? <div>VOID</div> : <MovieList movies={movies} />}
    </>
  );
};
export default Movies;
