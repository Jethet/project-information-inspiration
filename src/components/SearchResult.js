import React from "react";
import Card from "./Card";

function SearchResult(props) {
  return (
    <div>
      <div>
        <ul style={{ listStyle: "none" }}>
          {props.searchResultList.map((item, index) => {
            return <Card key={index} data={item} />;
          })}
        </ul>
      </div>
      <div className="close-cards">
        <button className="close-cards-button" type="submit">
          Close all
        </button>
      </div>
    </div>
  );
}

export default SearchResult;
