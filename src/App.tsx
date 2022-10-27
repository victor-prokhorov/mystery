import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MysteryContainer } from "./features/mystery/MysteryContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MysteryContainer />
      </header>
    </div>
  );
}

export default App;
