import React, { Component } from "react";

import TodoItem from "./components/TodoItem";
import todoList from "./data/data.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todoList
    };

    this.changeComplete = this.changeComplete.bind(this);
  }

  changeComplete(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(Todo => {
        if (Todo.id === id) {
          Todo.completed = !Todo.completed;
        }
        return Todo;
      });

      return { todos: updatedTodos };
    });
  }

  render() {
    const todoItems = this.state.todos.map(item => (
      <TodoItem
        key={item.id}
        id={item.id}
        text={item.text}
        completed={item.completed}
        changeComplete={this.changeComplete}
      />
    ));

    return <form className="todo-list">{todoItems}</form>;
  }
}

export default App;
