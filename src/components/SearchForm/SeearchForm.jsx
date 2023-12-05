const SearchForm = ({ setSearch }) => {
  const handleSubmit = ev => {
    ev.preventDefault();
    const filmName = ev.target.elements.filmName.value;
    if (filmName.length === 0) {
      console.log('reject');
      return;
    }
    const query = { query: filmName };
    setSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Search film
        <input type="text" name="filmName" />
      </label>
      <button type="submit"> Search</button>
    </form>
  );
};
export default SearchForm;
