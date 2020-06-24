import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar"
import StartPage from "./components/StartPage";
import SearchInfo from "./components/SearchInfo";
import NewCard from "./components/NewCard";

function App() {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact path="/" component={StartPage} />
        <Route exact path="/create" component={NewCard} />
        <Route exact path="/search" component={SearchInfo} />
      </Switch>
    </div>
  );
}

export default App;
