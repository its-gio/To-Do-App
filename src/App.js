import React, { Component } from "react";

import TodoItem from "./components/TodoItem";
import todoList from "./data/data.js";

class App extends Component {
  render() {
    const todoItems = todoList.map(item => (
      <TodoItem key={item.id} text={item.text} completed={item.completed} />
    ));

    return <form className="todo-list">{todoItems}</form>;
  }
}

export default App;
