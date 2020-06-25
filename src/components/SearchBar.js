import React from "react"

function SearchBar(props) {
  return(
    <div className="search-form">
      <form className="form-inline" onSubmit={props.handleSearch}>
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search word, tag, date"
        aria-label="Search"
        value={props.searchItem}
      />
      <button className="create-button" type="submit">
        Search
      </button>
    </form>
    
    </div>
  )
}

export default SearchBar