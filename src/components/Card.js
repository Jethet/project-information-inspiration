import React from "react";
import moment from "moment"

class Card extends React.Component {
  state = {
    projectOne: {
      cardTitle: "Website project",
      cardDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      cardImage: "",
      dateCreated: "Jan 15, 2020",
      searchTags: ['website', 'React', 'DOM', 'Javascript'],
    },
    projectTwo: {
      cardTitle: "School project",
      cardDescription: "Aed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      cardImage: "",
      dateCreated: "March 25, 2020",
      searchTags: ['CRUD', 'React', 'React Router', 'Javascript'],
    },
    projectThree: {
      cardTitle: "Project Kid's Play",
      cardDescription: "Labore et dolore magna aliqua. Ut enim ad minim veniamLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      cardImage: "",
      dateCreated: "April 5, 2020",
      searchTags: ['Canvas', 'DOM', 'Javascript'],
    }
  }

  render() {
    return (
      // <div class="card">
      //   <div class="card-body">
      //     <h5 class="card-title">Card title</h5>
      //     <p class="card-text">
      //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      //       incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem
      //       ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      //       incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
      //     </p>
      //     <p>Tags: </p>
      //     <p class="card-text">
      //       <small class="text-muted">Created on {moment().format("DD-MM-YYYY")}</small>
      //     </p>
      //   </div>
      // </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{this.state.projectOne.cardTitle}</h5>
          <p class="card-text">
            {this.state.projectOne.cardDescription}
          </p>
          <p>Tags: {this.state.projectOne.searchTags}</p>
          <p class="card-text">
            <small class="text-muted">{this.state.projectOne.dateCreated}</small>
          </p>
        </div>
      </div>
    );
  }
}

export default Card;
