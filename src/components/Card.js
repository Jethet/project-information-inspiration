import React from "react";

function Card(props) {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-body">
          {/* <h5 className="card-title">{props.data.cardTitle}</h5>
          <p className="card-text">{props.data.cardDescription}</p>
          <p className="card-tags">{props.data.searchTags}</p>
          <p className="card-text">
            <small className="text-muted">{props.data.dateCreated}</small>
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default Card;
