import { Label,  Input , SearchForm, ButtonSearch} from './SearchMoviesForm.styled';
import { useState } from 'react'

const SearchBar = ({ handleSubmit, setSearchParams }) => {
const [searchValue, setSearchValue] = useState('');

  const handleSearchState = e => {
    const currentQuery = e.target.value.trim();
    setSearchValue(currentQuery);
    setSearchParams(currentQuery !== '' ? { query: currentQuery } : {});
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