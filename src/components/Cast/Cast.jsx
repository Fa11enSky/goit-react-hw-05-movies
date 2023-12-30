import { useParams } from 'react-router-dom';
import CastItem from 'components/CastItem/CastItem';
import css from './styles.module.css'
const { useState, useEffect } = require('react');
const { getCasts } = require('sercvice/getFilmList');

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCasts(movieId)
      .then(data => setCast(data.cast))
      .catch(err => console.log(err));
  }, [movieId]);
  return (
    <ul className={css.cast_list} style={{ display: 'flex', flexWrap: 'wrap', gap: 15 }}>
      {cast.map(el => {
        return <CastItem key={el.id} cast={el} />;
      })}
    </ul>
  );
};
export default Cast;
