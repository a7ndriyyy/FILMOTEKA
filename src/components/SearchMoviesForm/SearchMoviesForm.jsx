import { Label,  Input , SearchForm, ButtonSearch} from './SearchMoviesForm.styled';
import { useState } from 'react'

const SearchBar = ({setSearchParams }) => {
  const [searchValue, setSearchValue] = useState('');
  
  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query: searchValue });
};
  const handleSearchState = e => {
    setSearchValue(e.target.value.trim());
  };
 
  return (
    <SearchForm onSubmit={handleSubmit}>
      <ButtonSearch type="submit">
        <Label>Search</Label>
      </ButtonSearch>
      <Input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search films"
        value={searchValue}
        onChange={handleSearchState}
      />
    </SearchForm>
  );
}
export default SearchBar;