
import { SearchBarStyled } from "../styles";

const SearchBar = ({ setQuery }) => {
  return (
    <SearchBarStyled
      placeholder="Search for a book name or "
      onChange={(event) => setQuery(event.target.value)}
    />
  );
};

export default SearchBar;