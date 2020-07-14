import React from "react";
import CardForm from "./CardForm"

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
        <CardForm
          cardTitle={this.state.cardTitle}
          cardDescription={this.state.cardDescription}
          dateCreated={this.state.dateCreated}
          searchTags={this.state.searchTags}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default NewCard;
