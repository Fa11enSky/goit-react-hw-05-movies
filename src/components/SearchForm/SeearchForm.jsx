const SearchForm = ({handleSubmit}) => {
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
