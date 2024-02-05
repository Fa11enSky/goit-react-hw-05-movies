import css from './styles.module.css'

const ReviewItem = ({ review }) => {
  const { author, content } = review;
  return (
    <li className={css.reviewItem}>
      <h3 className={css.reviewTitle}>Author: {author}</h3>
      <p>{content}</p>
    </li>
  );
};
export default ReviewItem;
