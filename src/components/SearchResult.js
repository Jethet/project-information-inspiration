import React from "react";
import Card from "./Card";

function SearchResult(props) {

  function handleClick() {
    window.location.reload()
  }
  
  return (
    <div>
      <div className="search-result-container">
          {props.searchResultList.map((item, index) => {
            return <Card key={index} data={item} />;
          })}
      </div>
      <div className="close-cards">
        <button className="close-cards-button" type="reset" value="Reset" onClick={handleClick}>
          Close all
        </button>
      </div>
    </div>
  );
}

export default SearchResult;
