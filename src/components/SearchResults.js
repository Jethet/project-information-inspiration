import React from "react";
import Card from "./Card";

class SearchResults extends React.Component {
  // state = {
  //   searchName: []
  // }
  state = {
    projectOne: {
      cardTitle: "Website project",
      cardDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      cardImage: "",
      dateCreated: "Jan 15, 2020",
      searchTags: ["website ", "React ", "DOM ", "Javascript"],
    },
    projectTwo: {
      cardTitle: "School project",
      cardDescription:
        "Aed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      cardImage: "",
      dateCreated: "March 25, 2020",
      searchTags: ["CRUD ", "React ", "Router ", "Javascript "],
    },
    projectThree: {
      cardTitle: "Project Kid's Play",
      cardDescription:
        "Labore et dolore magna aliqua. Ut enim ad minim veniamLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      cardImage: "",
      dateCreated: "April 5, 2020",
      searchTags: ["Canvas ", "DOM ", "Javascript"],
    },
  };

  render() {
    return (
      <div>
        <div id="search-results-header">
          <h2>Here is some inspiration:</h2>
        </div>
          <div className="search-card-container">
            <div className="search-card">
                <h5 className="search-card-title">{this.state.projectOne.cardTitle}</h5>
                <p className="search-card-description">{this.state.projectOne.cardDescription}</p>
                <p>Tags: {this.state.projectOne.searchTags}</p>
                <p className="search-card-description">
                  <small className="text-muted">
                    {this.state.projectOne.dateCreated}
                  </small>
                </p>
              </div>
            <div className="search-card">
                <h5 className="search-card-title">{this.state.projectTwo.cardTitle}</h5>
                <p className="search-card-description">{this.state.projectTwo.cardDescription}</p>
                <p>Tags: {this.state.projectTwo.searchTags}</p>
                <p className="search-card-description">
                  <small className="text-muted">
                    {this.state.projectTwo.dateCreated}
                  </small>
                </p>
            </div>
            <div className="search-card">
                <h5 className="search-card-title">{this.state.projectThree.cardTitle}</h5>
                <p className="search-card-description">{this.state.projectThree.cardDescription}</p>
                <p>Tags: {this.state.projectThree.searchTags}</p>
                <p className="search-card-description">
                  <small className="text-muted">
                    {this.state.projectThree.dateCreated}
                  </small>
                </p>
            </div>
            <div className="search-card">
                <h5 className="search-card-title">{this.state.projectTwo.cardTitle}</h5>
                <p className="search-card-description">{this.state.projectTwo.cardDescription}</p>
                <p>Tags: {this.state.projectTwo.searchTags}</p>
                <p className="search-card-description">
                  <small className="text-muted">
                    {this.state.projectTwo.dateCreated}
                  </small>
                </p>
            </div>
            <div className="search-card">
                <h5 className="search-card-title">{this.state.projectThree.cardTitle}</h5>
                <p className="search-card-description">{this.state.projectThree.cardDescription}</p>
                <p>Tags: {this.state.projectThree.searchTags}</p>
                <p className="search-card-description">
                  <small className="text-muted">
                    {this.state.projectThree.dateCreated}
                  </small>
                </p>
            </div>
          </div>
        </div>
    );
  }
}

export default SearchResults;
