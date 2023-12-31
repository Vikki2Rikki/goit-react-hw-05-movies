import { SearchForm, SearchInput, SearchBtn } from './SearchMovie.styled';
import PropTypes from 'prop-types';

const SearchMovie = ({ getSearchMovie, searchQuery, setSearchParams }) => {
  const handleSearchChange = ({ target: { value } }) => {
    setSearchParams({ search: value });
  };

  const handleSearchSubmit = e => {
    e.preventDefault();
    getSearchMovie(searchQuery);
    searchQuery = '';
  };

  return (
    <div>
      <SearchForm onSubmit={handleSearchSubmit}>
        <SearchInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleSearchChange}
          value={searchQuery}
        />
        <SearchBtn type="submit">Search</SearchBtn>
      </SearchForm>
    </div>
  );
};

export default SearchMovie;

SearchMovie.propTypes = {
  getSearchMovie: PropTypes.func,
  searchQuery: PropTypes.string,
  setSearchParams: PropTypes.func,
};
