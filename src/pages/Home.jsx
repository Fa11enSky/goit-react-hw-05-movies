import { useEffect, useState } from 'react';
import getFilms from 'sercvice/getFilmList';
import MovieList from 'components/MovieList/MovieList';
import Loader from 'components/Loader/Loader';
import { useLocation } from 'react-router-dom';
const Home = () => {
  const location = useLocation();
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getFilms()
      .then(response => response.json())
      .then(data => {
        if (data.success === false) {
          throw new Error(data.status_message);
        }
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
      <h1
        style={{ fontSize: '70px', textAlign: 'center', marginBottom: '30px' }}
      >
        Trending today
      </h1>
      {isLoading && <Loader />}

      {isEmpty ? <h1>{errorMessage}</h1> : <MovieList movies={films} location={location} />}
    </div>
  );
};
export default Home;
