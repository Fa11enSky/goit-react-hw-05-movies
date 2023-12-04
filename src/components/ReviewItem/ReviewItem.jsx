const ReviewItem = ({ review }) => {
  const { author, content } = review;
  return (
    <li style={{ marginBottom: '20px' }}>
      <h3>Author: {author}</h3>
      <p>{content}</p>
    </li>
  );
};
export default ReviewItem;
