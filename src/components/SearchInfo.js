import React from "react";
import SearchBar from "./SearchBar";
import Card from "./Card";

function SearchInfo() {
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
    } else {
      alert("Not found");
    }

    let parsedSearchResult = JSON.parse(searchResult);
    console.log("This is searchResult JSON.parse", parsedSearchResult);

    searchResultList.push(parsedSearchResult);
    console.log("This is list of results:", searchResultList);

    e.target[0].value = "";
  }

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
      <div>
      <p>This is the result: </p>
      <ul style={{ listStyle: "none" }}>
        {searchResultList.map((result) => {
          return <p>{result}</p>
          {/* <Card key={result.id} data={result} />; */}
        })}
        </ul>
      </div>
    </div>
  );
}

export default SearchInfo;
