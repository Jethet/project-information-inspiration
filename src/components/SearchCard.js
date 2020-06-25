import React from "react";
import SearchBar from "./SearchBar";
import Card from "./Card";

function SearchCard() {
  let searchResult;
  let searchResultList = [];

  function handleSearch(e) {
    e.preventDefault();

    let searchItem = e.target[0].value;
    let searchItemLower = searchItem.toLowerCase();
    // let searchItemUpper = searchItem[0].toUpperCase() + searchItem[1, -1]
    console.log(searchItem, searchItemLower);

    if (localStorage.getItem(searchItem) !== null) {
      searchResult = localStorage.getItem(searchItem);
      console.log(searchResult);
    } else if (localStorage.getItem(searchItemLower) !== null) {
      searchResult = localStorage.getItem(searchItemLower);
    } else if (localStorage.getItem(searchItem) === null) {
      alert("Not found");
    } else if (localStorage.getItem(searchItemLower) === null) {
      alert("Not found");
    } else {
      alert("Something went wrong")
    }


    let parsedSearchResult = JSON.parse(searchResult)
    console.log("This is searchResult JSON.parse", parsedSearchResult);

    searchResultList.push(parsedSearchResult);
    console.log("This is list of results:", searchResultList);

    e.target[0].value = "";
  }

  // console.log(searchResultList)

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />

      <div>
     
        <p>This is the result: {this.searchResultList} </p>
        
      </div>
    </div>
  );
}

export default SearchCard;
