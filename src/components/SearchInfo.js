import React from "react";

function SearchInfo(props) {

  function handleSearch(e) {
    e.preventDefault()

    let searchItem = e.target[0].value;
    // console.log(e.target[0].value);

    let searchResult = localStorage.getItem(searchItem)
    // console.log(searchResult);

    if (localStorage.getItem(searchItem) === null) {
      alert("Not found");
    } else {
      console.log(JSON.parse(searchResult));
    }
    e.target[0].value = ""
  }

  return (
    <form className="form-inline" onSubmit={handleSearch}>
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchInfo
