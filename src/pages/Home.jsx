import { useEffect, useState } from 'react';
import getFilms from 'sercvice/getFilmList';
import css from './Home.module.css';
import MovieList from 'components/MovieList/MovieList';
import Loader from 'components/Loader/Loader';
const Home = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getFilms()
      .then(data => {
        setIsEmpty(false);
        return data.results;
      })
      .then(films => {
        setFilms(films);
      })
      .catch(err => {
        setIsEmpty(true);
        setErrorMessage(err.message);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <h1 className={css.header}>Trending today</h1>
      {isLoading && <Loader />}
      {isEmpty ? <h1>{errorMessage}</h1> : <MovieList movies={films} />}
    </div>
  );
};
export default Home;
