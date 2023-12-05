const CastItem = ({ cast }) => {
  const { name, character, profile_path: photo } = cast;
  const defaultPhoto =
    'https://usagif.com/wp-content/uploads/2021/4fh5wi/pepefrg-4.gif';

  return (
    <li style={{ maxWidth: 450 }}>
      <img
        style={{ width: '250px' }}
        src={
          photo
            ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${photo}`
            : defaultPhoto
        }
        alt="cast"
      />

      <h3>{name}</h3>
      <h3>{character}</h3>
    </li>
  );
};
export default CastItem;
