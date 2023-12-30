import { StyledForm, StyledInput, StyledSearchBtn } from './SearchForm.styled';
import { FaSearch } from 'react-icons/fa';

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
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        placeholder="Search movies......."
        name="filmName"
      />
      <StyledSearchBtn type="submit">
        <FaSearch color="inherit" size="30px" />
      </StyledSearchBtn>
    </StyledForm>
  );
};
export default SearchForm;
