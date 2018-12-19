import React, { Component } from "react";

import TodoItem from "./components/TodoItem";
import Form from "./components/Form";
import todoList from "./data/data.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todoList,
      firstName: "",
      lastName: "",
      age: 18,
      gender: "",
      locationFrom: "",
      locationTo: "",
      vegan: false,
      pescetarians: false,
      vegetarian: false
    };

    this.changeComplete = this.changeComplete.bind(this);
    this.updateForm = this.updateForm.bind(this);
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

  updateForm(e) {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value
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

    return (
      <div>
        <form className="todo-list">{todoItems}</form>
        <Form updateForm={this.updateForm} info={this.state} />
      </div>
    );
  }
}

export default App;
