import React from "react";
import moment from "moment"

class Card extends React.Component {
  state = {
    title: "",
    description: "",
    date: "",
    tags: [],
  };

  render() {
    return (
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <p>Tags: </p>
          <p class="card-text">
            <small class="text-muted">Created on {moment().format("DD-MM-YYYY")}</small>
          </p>
        </div>
      </div>
    );
  }
}

export default Card;
