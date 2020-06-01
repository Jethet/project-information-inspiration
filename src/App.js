import React from "react";
import "./style.css";
import { Switch, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import SearchResults from "./components/SearchResults";
import CreateCard from "./components/CreateCard";
import Card from "./components/Card"
import Search from "./components/Search"

function App() {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact path="/" component={SearchResults} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/create" component={CreateCard} />
        <Route exact path="/card" component={Card} />
      </Switch>

    </div>
  );
}

export default App;
