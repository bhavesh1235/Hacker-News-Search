import React from "react";
import { useGlobalContext } from "../context.js";

const SearchForm = () => {
  const { query, handleSearch } = useGlobalContext();

  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <h2 style={{ color: "white" }}>search hacker news</h2>
      <input
        style={{ color: "white" }}
        type="text"
        className="form-input"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
