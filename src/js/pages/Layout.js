import React from "react";

import Header from "../components/Header";
import ListOfToDos from "../components/ListOfToDos";
import Footer from "../components/Footer";

const todos = [
  {
    task: "Study React",
    isComplete: false
  },
  {
    task: "Make First App",
    isComplete: false
  }
]

export default class Layout extends React.Component {
  constructor(props){
    super(props);
    this.state = { todos: todos }
  }
  createTask(task){
    this.state.todos.push({
      task: task,
      isComplete: false
    });
    this.setState({ todos: this.state.todos});
  }
  render() {
    return (
      <div>
        <Header />
        <ListOfToDos
          todos={ this.state.todos }
          createTask={ this.createTask.bind(this) }
        />
        <Footer />
      </div>
  )}
}
