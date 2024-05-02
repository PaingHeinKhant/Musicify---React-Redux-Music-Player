import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBox = () => {
  return (
    <form className="d-flex">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-success" type="submit">
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchBox;
