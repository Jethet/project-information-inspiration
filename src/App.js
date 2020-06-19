import React from "react";
import "./App.css";
import SearchInfo from "./components/SearchInfo";
import NewCard from "./components/NewCard";
import Card from "./components/Card"

function App() {
  return (
    <div>
      <SearchInfo />
      {/* <Card /> */}
      <NewCard />
    </div>
  );
}

export default App;
