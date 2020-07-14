import React from "react";
import CardBody from "./CardBody"

class Card extends React.Component {
  state = {
    card: {
      cardTitle: "",
      cardDescription: "",
      dateCreated: "",
      searchTags: [],
      isEdited: false,
    },
  };

  handleClick = (e) => {
    console.log('This will be edited', e.target.value);  
  }

  handleEdit = (id, e) => {
    // const { cardTitle, cardDescription, dateCreated, searchTags } = this.state;
    const { card } = this.state;

    if (id === card.id && isEdited) {
      const editedCard = {
        ...card,
        [name]: e.target.value,
      };
      this.setState({ card: editedCard });
    }
  };

  render() {
    console.log("EDit card");
    
    return (
      <div>
        <CardBody
          // cardTitle={this.state.cardTitle}
          // cardDescription={this.state.cardDescription}
          // dateCreated={this.state.dateCreated}
          // searchTags={this.state.searchTags}
          handleClick={this.handleClick}
          // handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default Card