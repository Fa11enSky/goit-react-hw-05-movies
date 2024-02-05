import ReviewItem from 'components/ReviewItem/ReviewItem';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'sercvice/getFilmList';
import css from './style.module.css'

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getReviews(movieId)
      .then(data => setReviews(data.results))
      .catch(err => console.log(err));
  }, [movieId]);
  return reviews.length > 0 ? (
    <ul className={css.reviewList}>
      {reviews.map(el => {
        return <ReviewItem key={el.id} review={el} />;
      })}
    </ul>
  ) : (
    <div>There is not reviwes</div>
  );
};
export default Reviews;
