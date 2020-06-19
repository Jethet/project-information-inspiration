import React from "react";

class NewCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardTitle: "",
      cardDescription: "",
      dateCreated: "",
      searchTags: [],
      cardList: [],
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { cardTitle, cardDescription, dateCreated, searchTags } = this.state;
    let nameCheck = localStorage.getItem(cardTitle);

    // set function for unique id to variable and add it to JSON.stringify
    if (nameCheck === null) {
      let id = Math.random().toString(36).substr(2, 7);

      // state is an object and can be stringified
      let newCard = JSON.stringify({
        id,
        cardTitle,
        cardDescription,
        dateCreated,
        searchTags,
      });
      localStorage.setItem(cardTitle, newCard);
      console.log("This is a new card:", newCard);

      let parsedNewCard = JSON.parse(newCard);
      let parsedCardList = this.state.cardList.push(parsedNewCard);

      console.log("Parsed card array:", parsedCardList);
      return parsedCardList;
    } else {
      alert("This card name already exists");
    }

    this.setState({
      cardTitle: "",
      cardDescription: "",
      dateCreated: "",
      searchTags: [],
      // cardList: parsedCardList
    });

    console.log("This is outside handleSubmit", this.state.cardList);
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
                    value={this.state.cardTitle}
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
                    value={this.state.cardDescription}
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
                    value={this.state.searchTags}
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
                    value={this.state.dateCreated}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <button type="submit" className="btn btn-outline-success my-2 my-sm-0">
                Create Card
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewCard;
