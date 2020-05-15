import React from "react";
import logo from "./logo.svg";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Aprendendo Mobx com Hooks</p>
      </div>
      <div>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
