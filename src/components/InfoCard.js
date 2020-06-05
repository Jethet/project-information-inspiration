import React from "react";

class InfoCard extends React.Component {
  render() {
    return (
      <div className="card-container">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Card Title</h5>
            <p className="card-text">Card Description</p>
            <p>Tags: </p>
            <p className="card-text">
              <small className="text-muted">Date Created</small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default InfoCard;
