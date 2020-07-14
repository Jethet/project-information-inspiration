import React from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import DeleteCard from "./DeleteCard";

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
  }

  handleSearch = (e) => {
    e.preventDefault();
    // Set the search value to lowercase: card names are saved in local
    // storage with lowercase to avoid search problems with upper/lower
    let searchItem = e.target[0].value.toLowerCase();
    e.target[0].value = "";
    this.cardTitleToLowerCase(searchItem);
  };

  cardTitleToLowerCase = (searchItem) => {
    let storageObjects = this.state.allStorageObjects;
    let storageStrings = storageObjects.map((item) => {
      return item.cardTitle.toLowerCase();
    });
    this.getSearchResults(searchItem, storageStrings);
  };

  getSearchResults = (searchItem, storageStrings) => {
    let searchResult = "";

    for (let i = 0; i < storageStrings.length; i++) {
      const foundItem = storageStrings.find((item) => {
        return item.includes(searchItem);
      });
      if (foundItem) {
        searchResult = localStorage.getItem(foundItem);
      } else {
        alert("Not found");
        return;
      }
    }
    this.parseSearchResults(searchResult);
    console.log("searchResult", searchResult);
  };

  parseSearchResults = (searchResult) => {
    let parsedSearchResult = JSON.parse(searchResult);
    let newSearchResultList = [...this.state.searchResultList];
    newSearchResultList.push(parsedSearchResult);

    this.setState({ searchResultList: newSearchResultList }, () => {
      console.log("this.state.searchResultList:", this.state.searchResultList);
    });
  };

  handleClick = () => {
    this.setState({ searchResultList: [] });
  };

  render() {
    return (
      <div className="search-results-overview">
        <SearchBar handleSearch={this.handleSearch} />
        <SearchResult
          searchResultList={this.state.searchResultList}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default SearchCard;
