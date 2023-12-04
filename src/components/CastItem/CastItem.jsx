const CastItem = ({ cast }) => {
  const { name, character, profile_path: photo } = cast;
  return (
    <li style={{ maxWidth: 450 }}>
      {photo ? (
        <img
          style={{ width: '250px' }}
          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${photo}`}
          alt="cats"
        />
      ) : (
        <img
          style={{ height: '375px', width: '250px' }}
          alt="dont have poster"
          src="https://usagif.com/wp-content/uploads/2021/4fh5wi/pepefrg-4.gif"
          height="450"
        />
      )}
      <h3>{name}</h3>
      <h3>{character}</h3>
    </li>
  );
};
export default CastItem;
