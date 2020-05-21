import React from "react";
import "./style.css";
import { Switch, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import SearchResults from "./components/SearchResults";
import CreateCard from "./components/CreateCard";
import Search from "./components/Search"

function App() {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact path="/" component={SearchResults} />
        <Route exact path="/search" component={Search} />
        <Route exact path="create" component={CreateCard} />
      </Switch>

    </div>
  );
}

export default App;
