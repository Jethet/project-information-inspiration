import React from "react";
import SearchBar from "./SearchBar"

// SEARCH has to be done on all words, lowercase - need to
// create an array cardList with all information to be
// filtered and returned

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
    <div>
      <SearchBar handleSearch={handleSearch}/>
    </div>
  );
}

export default SearchInfo
