import React from "react";
import SearchBar from "./SearchBar";
import Card from "./Card";

function SearchInfo(props) {
  let searchResult;

  function handleSearch(e) {
    e.preventDefault();

    let searchItem = e.target[0].value;
    let searchItemLower = searchItem.toLowerCase();

    // searchResult = localStorage.getItem(searchItem) && localStorage.getItem(searchItemLower);
    console.log(searchItem, searchItemLower);

    // console.log("This is searchResult", searchResult);

    if (
      searchResult === localStorage.getItem(searchItem) ||
      searchResult === localStorage.getItem(searchItemLower)
    ) {
      console.log("This is JSON.parse", JSON.parse(searchResult));
    } else {
      alert("Not found");
    }
    // Object.keys(localStorage).forEach(function (key) {
    //   console.log(localStorage.getItem(key));
    // });

    e.target[0].value = "";
  }

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
      {/* <div>
      {searchResult.map((result) => {
        return <Card key={result.id} />;
      })}
      </div> */}
    </div>
  );
}

export default SearchInfo;
