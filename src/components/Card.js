import React from "react";
import moment from "moment"

class Card extends React.Component {
  

  render() {
    return (
      <div className="card-container">
      {/* // <div className="card">
      //   <div className="card-body">
      //     <h5 className="card-title">Card title</h5>
      //     <p className="card-text">
      //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      //       incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem
      //       ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      //       incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
      //     </p>
      //     <p>Tags: </p>
      //     <p className="card-text">
      //       <small className="text-muted">Created on {moment().format("DD-MM-YYYY")}</small>
      //     </p>
      //   </div>
      // </div> */}
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{this.state.projectOne.cardTitle}</h5>
          <p className="card-text">
            {this.state.projectOne.cardDescription}
          </p>
          <p>Tags: {this.state.projectOne.searchTags}</p>
          <p className="card-text">
            <small className="text-muted">{this.state.projectOne.dateCreated}</small>
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{this.state.projectTwo.cardTitle}</h5>
          <p className="card-text">
            {this.state.projectTwo.cardDescription}
          </p>
          <p>Tags: {this.state.projectTwo.searchTags}</p>
          <p className="card-text">
            <small className="text-muted">{this.state.projectTwo.dateCreated}</small>
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{this.state.projectThree.cardTitle}</h5>
          <p className="card-text">
            {this.state.projectThree.cardDescription}
          </p>
          <p>Tags: {this.state.projectThree.searchTags}</p>
          <p className="card-text">
            <small className="text-muted">{this.state.projectThree.dateCreated}</small>
          </p>
        </div>
      </div>
      </div>
    );
  }
}

export default Card;
