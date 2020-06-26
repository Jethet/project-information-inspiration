import React from "react";

class NewCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: {
        cardTitle: "",
        cardDescription: "",
        dateCreated: "",
        searchTags: [],
      },
      cardList: [],
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const { cardTitle, cardDescription, dateCreated, searchTags } = this.state;
    
    let nameCheck = localStorage.getItem(cardTitle);
    if (nameCheck !== null) {
      alert("This card name already exists");
    } else {
      // set function for unique id to variable and add it to newCard
      let id = Math.random().toString(36).substr(2, 7);
      let newCard = {
        id,
        cardTitle,
        cardDescription,
        dateCreated,
        searchTags,
      };
      // When adding to local storage, make title lowercase for search (the
      // search value is also set to lowercase in SearchCard.js)
      localStorage.setItem(cardTitle.toLowerCase(), JSON.stringify(newCard));
    }

    this.setState({
      card: {
        cardTitle: "",
        cardDescription: "",
        dateCreated: "",
        searchTags: [],
      },
    });
  };

  render() {
    return (
      <div>
        <div className="create-card-container">
          <div id="card-header">
            <h3>Create a new information card</h3>
          </div>
          <div className="card-form">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="cardTitle">
                  Card title:
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter card title"
                    // required
                    autoComplete="off"
                    name="cardTitle"
                    value={this.state.cardTitle || ""}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="cardDescription">
                  Card description:
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter card description"
                    // required
                    autoComplete="off"
                    name="cardDescription"
                    value={this.state.cardDescription || ""}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="searchTags">
                  Search tags:
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter search tags separated by commas"
                    // required
                    autoComplete="off"
                    name="searchTags"
                    value={this.state.searchTags || ""}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="dateCreated" className="category-form-label">
                  Date created:
                  <input
                    className="form-control"
                    type="date"
                    name="dateCreated"
                    // required
                    value={this.state.dateCreated || ""}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <button type="submit" className="create-button">
                Create new card
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewCard;
