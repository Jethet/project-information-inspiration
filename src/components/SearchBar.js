import React from "react";

function SearchBar(props) {
  return (
    <div>
      <div className="search-header">
        <h1>Search for cards</h1>
      </div>
      <div className="search-form">
        <div className="form-group">
          <form className="form-inline" onSubmit={props.handleSearch}>
            <input
              className="form-control"
              type="search"
              placeholder="Search word, tag, date"
              aria-label="Search"
              value={props.searchItem}
            />
            <button className="search-button" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
