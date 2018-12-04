import React, { Component } from "react";

import TodoItem from "./components/TodoItem";

class App extends Component {
  render() {
    return (
      <form className="todo-list">
        <TodoItem />
      </form>
    );
  }
}

export default App;
