import { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  function handleSearch(e) {
    e.preventDefault(), setQuery(e.target.value);
  }
  return (
    <input
      type="text"
      placeholder="Search.."
      onChange={handleSearch}
      value={query}
    />
  );
};
export default SearchBar;
