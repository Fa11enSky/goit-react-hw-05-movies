import { Link, Outlet, useLocation } from 'react-router-dom';
import css from './styles.module.css';
import { MdDateRange } from 'react-icons/md';
import { WiTime3 } from 'react-icons/wi';
import GenresItem from 'components/GenresItem/GenresItem';
import { IoMdStarOutline } from 'react-icons/io';
import ButtonBack from 'components/ButtonBack/ButtonBack';
const MovieDetailsItem = ({ movieObj }) => {
  const {
    original_title: title,
    overview,
    release_date,
    status,
    genres,
    runtime,
    production_countries,
    production_companies,
    poster_path: poster,
    vote_average: vote,
  } = movieObj;
  
  const date = release_date.split('-');
  const location = useLocation();
  return (
    <div>
      <ButtonBack location={location} />
      <article className={css.article}>
        <div className={css.thumb}>
          <img
            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${poster}`}
            alt="poster"
          />
        </div>
        <div className={css.main_description}>
          <h1 className={css.title}>{`${title}`}</h1>
          <div className={css.wrapper}>
            <ul className={css.genres_list}>
              {genres.map(el => {
                return <GenresItem name={el.name} key={el.id} />;
              })}
            </ul>
            <div className={css.info}>
              <div className={css.info_item}>
                <MdDateRange size="20px" /> {date[0]}
              </div>
              <div className={css.info_item}>
                <WiTime3 size="20px" />
                {runtime}.min
              </div>
              <div className={css.info_item}>
                <IoMdStarOutline size="20px" />
                {vote}
              </div>
            </div>
          </div>
          <p className={css.overview}>{overview}</p>
          <ul className={css.main_info}>
            <li>
              <span className={css.info_span}>Countries:</span>{' '}
              {production_countries.map((el, index, arr) => {
                if (index !== arr.length - 1) {
                  return `${el.iso_3166_1}, `;
                }
                return `${el.iso_3166_1}`;
              })}
            </li>
            <li >
              <span className={css.info_span}>Genres:{ ' '}</span> 
              {genres.map((el, index, arr) => {
                if (index !== arr.length - 1) {
                  return `${el.name}, `;
                }
                return `${el.name}`;
              })}
            </li>
            <li><span className={css.info_span}>Date Release:</span> {release_date}</li>
            <li className={css.bigList}>
              <span className={css.info_span}>Production</span>:{' '}
              <ul className={css.bigListItem}>
                {production_companies.map((el, index, arr) => {
                  if (index !== arr.length - 1) {
                    return <li style={{marginBottom:0}}>{el.name},</li>;
                  }
                  return <li style={{marginBottom:0}}>{el.name}</li>;
                })}
              </ul>{' '}
            </li>
            <li><span className={css.info_span}>Status:</span> {status}</li>
          </ul>
        </div>
      </article>
      <div className={css.additionSectionTitle}>
        <h2>Addition information</h2>
      <ul className={css.additionBtnList}>
        <li>
          <Link style={{textDecoration:'none'}} to="cast">Cast</Link>
        </li>
        <li>
          <Link style={{textDecoration:'none'}} to="reviews" element={<div>rev</div>}>
            Reviews
          </Link>
        </li>
      </ul>
      </div>
      <Outlet />
    </div>
  );
};
export default MovieDetailsItem;
