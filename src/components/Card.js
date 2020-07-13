import React from "react";

function Card(props) {

  // console.log("This is card props.data", props.data);  ?????

  return (
    <div className="card-container">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.data.cardTitle}</h5>
          <p className="card-text">{props.data.cardDescription}</p>
          <p className="card-tags">{props.data.searchTags}</p>
          <p className="card-text">
            <small className="text-muted">{props.data.dateCreated}</small>
          </p>
           {/* <button
            className="edit-card-button"
            type="reset"
            value="Reset"
            onClick={props.handleEdit}
          >
            Edit card
          </button>
          {/* <button
            className="delete-card-button"
            type="reset"
            value="Reset"
            onClick={props.handleDelete}
          >
            Delete card
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Card;
