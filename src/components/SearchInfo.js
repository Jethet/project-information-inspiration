import React from "react";
import SearchBar from "./SearchBar"

// SEARCH has to be done on all words, lowercase - need to
// create an array cardList with all information to be
// filtered and returned

function SearchInfo() {

  function handleSearch(e) {
    e.preventDefault()

    let searchItem = e.target[0].value;
    let searchItemLower = searchItem.toLowerCase()
    let searchResult = (localStorage.getItem(searchItem) && localStorage.getItem(searchItemLower))

    console.log("This is searchResult", searchResult);

    if (!searchResult) {
      alert("Not found");
    } else {
      console.log("This is JSON.parse", JSON.parse(searchResult));
    }

    Object.keys(localStorage).forEach(function(key) {
      console.log(localStorage.getItem(key));
      
    })
    e.target[0].value = ""
  }

  return (
    <div>
      <SearchBar handleSearch={handleSearch}/>
    </div>
  );
}

export default SearchInfo
