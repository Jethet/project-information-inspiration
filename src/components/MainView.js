import React from "react"
import SearchInfo from "./components/SearchInfo";
import NewCard from "./components/NewCard";
import Card from "./components/Card"

class MainView extends React.Component {
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

  render() {
    return (
      <div>
        <SearchInfo />
      {/* <Card /> */}
      <NewCard />
      </div>
    )
  }


  export default MainView