import React from "react";
import Card from "./Card";

class SearchResults extends React.Component {
  state = {
    searchName: []
  }

  render() {
    return (
      <div>
        <Card />
      </div>
    );
  }
}

export default SearchResults;
