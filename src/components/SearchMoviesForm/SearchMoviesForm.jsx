import { Label,  Input , SearchForm, ButtonSearch} from './SearchMoviesForm.styled';
import { useState } from 'react'

const SearchBar = ({setSearchParams }) => {
  const [searchValue, setSearchValue] = useState('');
  
  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query: currentQuery });
};
  const handleSearchState = e => {
    const currentQuery = e.target.value.trim();
    console.log(e.target.value);
    setSearchValue(currentQuery);
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