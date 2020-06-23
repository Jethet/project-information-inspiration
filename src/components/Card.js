import React from "react";
import moment from "moment";

function Card(props) {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.cardTitle}</h5>
          <p className="card-text">{props.cardDescription}</p>
          <p className="card-tags">{props.searchTags}</p>
          <p className="card-text">
            <small className="text-muted">{props.dateCreated}</small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
