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
      locationFrom: "Nowhere",
      locationTo: "Now here",
      vegan: false,
      pescetarians: false,
      vegetarian: false
    };

    this.changeComplete = this.changeComplete.bind(this);
    this.updateForm = this.updateForm.bind(this);
    this.alertForm = this.alertForm.bind(this);
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
    const { name, value, type, checked } = e.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  alertForm(e) {
    e.preventDefault();
    const {
      firstName,
      lastName,
      age,
      gender,
      locationFrom,
      locationTo,
      vegan,
      pescetarians,
      vegetarian
    } = this.state;
    alert(`
    First Name: ${firstName}
    Last Name: ${lastName}
    Age: ${age}
    Gender: ${gender}
    Location From: ${locationFrom}
    Location To: ${locationTo}
    Vegan: ${vegan}
    Pescetarians: ${pescetarians}
    Vegetarian: ${vegetarian}
    `);
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
        <Form
          alertForm={this.alertForm}
          updateForm={this.updateForm}
          info={this.state}
        />
      </div>
    );
  }
}

export default App;
