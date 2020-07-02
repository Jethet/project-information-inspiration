import React from "react";
import "./style.css";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar"
import StartPage from "./components/StartPage";
import SearchCard from "./components/SearchCard";
import NewCard from "./components/NewCard";
import Footer from "./components/Footer"
import Credits from "./components/Credits"

function App() {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact path="/" component={StartPage} />
        <Route exact path="/create" component={NewCard} />
        <Route exact path="/search" component={SearchCard} />
        <Route exact path="/credits" component={Credits} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
