import React from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

class SearchCard extends React.Component {
  state = {
    allStorageObjects: [],
    searchResultList: [],
  };

  componentDidMount() {
    let storageValues = [];
    let allStorage = [];
    let keys = Object.keys(localStorage);
    for (let i = 0; i < keys.length; i++) {
      storageValues = localStorage.getItem(keys[i]);
      allStorage.push(JSON.parse(storageValues));
    }
    this.setState({ allStorageObjects: allStorage });
    console.log("The values list from componentDidMount:", allStorage);
  }

  handleSearch = (e) => {
    e.preventDefault();
    // Set the search value to lowercase: card names are saved in local
    // storage with lowercase to avoid search problems with upper/lower
    let searchItem = e.target[0].value.toLowerCase();
    e.target[0].value = "";

    let searchResult = "";
    let storageObjects = this.state.allStorageObjects;
    let storageStrings = storageObjects.map((item) => {
      return item.cardTitle.toLowerCase();
    });

    const foundItem = storageStrings
      .filter((item) => item.includes(searchItem))
      .map((item) => {
        return item;
      });
        if (foundItem) {
          searchResult = localStorage.getItem(foundItem);
        } else {
          alert("Not found");
          return;
        }
     

    console.log("searchResult", searchResult);

    let parsedSearchResult = JSON.parse(searchResult);

    let newSearchResultList = [...this.state.searchResultList];
    newSearchResultList.push(parsedSearchResult);
    this.setState({ searchResultList: newSearchResultList }, () =>
      console.log(this.state.searchResultList)
    );
  };

  render() {
    return (
      <div className="search-results-overview">
        <SearchBar handleSearch={this.handleSearch} />
        <SearchResult searchResultList={this.state.searchResultList} />
      </div>
    );
  }
}

export default SearchCard;
