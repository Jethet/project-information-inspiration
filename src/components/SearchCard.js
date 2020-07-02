import React from "react";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

class SearchCard extends React.Component {
  state = {
    searchResultList: [],
  };

  handleSearch = (e) => {
    e.preventDefault();
    // Set the search value to lowercase: card names are saved in local
    // storage with lowercase to avoid search problems with upper/lower
    let searchItem = e.target[0].value.toLowerCase();
    console.log(searchItem);
    e.target[0].value = "";

    let searchResult = "";
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.getItem(searchItem) !== null) {
        searchResult = localStorage.getItem(searchItem);
        console.log(searchResult);
      } else if (localStorage.getItem(searchItem) === null) {
        alert("Not found");
        e.target[0].value = "";
        return;
      } else {
        alert("Something went wrong");
      }
    }

    let parsedSearchResult = JSON.parse(searchResult);
    
    let newSearchResultList = [...this.state.searchResultList];
    console.log("This is newSearchResultList before push:", newSearchResultList);

    newSearchResultList.push(parsedSearchResult);
    console.log("This is newSearchResultList after push:", newSearchResultList);

    this.setState({ searchResultList: newSearchResultList });

    console.log("This is list of results:", newSearchResultList);
    console.log("This is the this.state.searchResultList", this.state.searchResultList);

  };

  render() {
    return (
      <div>
        <SearchBar handleSearch={this.handleSearch} />
        <SearchResult searchResultList={this.state.searchResultList} />
      </div>
    );
  }
}

export default SearchCard;
