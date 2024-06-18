import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBox = () => {
  return (
    <form className="d-flex" role="search">
      <input
        className="form-control me-2 custom-input"
        type="search"
        placeholder="Search songs, albums, artists, podcasts"
        aria-label="Search"
      />
    </form>
  );
};

export default SearchBox;
