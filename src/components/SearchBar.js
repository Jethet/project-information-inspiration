import React from "react"

function SearchBar(props) {
  return(
    <div>
      <form className="form-inline" onSubmit={props.handleSearch}>
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={props.searchItem}
      />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
    </div>
  )
}

export default SearchBar