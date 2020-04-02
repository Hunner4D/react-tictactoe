import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import Test2 from "./test/Test";
import Game from "./tic-tac-toe/Game.js";

// Use the default App cfiles to append all of components :)
function App() {
  return (
    // <header className="App-header">
    //   <Test2 />
    // </header>

    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to Hunner's React TicTacToe</h2>
        <Game />
      </div>
    </div>
  );
}

export default App;

//Research List:
//  super(props)
//  fragments - wrap sibling componenets in a empty tag
//  can a child componenet ever change information directly to the source of a prop?
//   you can have one default export but any number of named exports
