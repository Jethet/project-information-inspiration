import React from "react";

class CreateCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardTitle: "",
      cardDescription: "",
      cardImage: "",
      dateCreated: "",
      searchTags: [],
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { cardTitle } = e.target;
    let nameCheck = localStorage.getItem(cardTitle);

    if (nameCheck === null) {
      // state is an object and can be stringified
      localStorage.setItem(cardTitle, JSON.stringify(this.state));
    } else {
      alert("This card name already exists");
    }
    console.log(cardTitle);

    this.setState({
      cardTitle: "",
      cardDescription: "",
      cardImage: "",
      dateCreated: "",
      searchTags: [],
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
                    required
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
                    required
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
                    required
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
                    required
                    value={this.props.dateCreated}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <button
                type="submit"
                className="btn create-button"
                style={{ backgroundColor: "cornflowerblue" }}
              >
                Create Card
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateCard;
