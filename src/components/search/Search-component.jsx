import React from 'react';

const Search = ({ placeholder, handleChange }) => {
  return (
    <>
      <input
        type="search"
        placeholder={placeholder}
        className="search"
        onChange={handleChange}
      />
    </>
  );
};

export default Search;
