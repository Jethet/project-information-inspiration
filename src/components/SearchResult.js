import React from "react";
import Card from "./Card"

function SearchResult(props) {
  return (
    <div>
      <div>
        <ul style={{ listStyle: "none" }}>
          {props.searchResultList.map((item, index) => {
            return <Card key={index} data={item} />
          })}
        </ul>
      </div>
    </div>
  );
}

export default SearchResult;
