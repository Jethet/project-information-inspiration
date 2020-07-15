import React from "react";
import CardBody from "./CardBody";

function SearchResult(props) {
  
  return (
    <div>
      <div className="search-result-container">
        {props.searchResultList.map((item, index) => {
          return <CardBody key={index} data={item} />;
        })}
      </div>
      <div className="close-cards">
        <button className="close-cards-button" onClick={props.handleClick}>
          Close all
        </button>
      </div>
    </div>
  );
}

export default SearchResult;
