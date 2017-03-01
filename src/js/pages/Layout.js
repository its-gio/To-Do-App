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
  toggleTask(task){
    const foundToDo = _.find(this.state.todos, todo => todo.task === task);
    foundToDo.isComplete = !foundToDo.isComplete;
    this.setState({ todos: this.state.todos });
  }
  saveTask(oldTask, newTask){
    const foundToDo = _.find(this.state.todos, todo => todo.task === oldTask);
    foundToDo.task = newTask;
    this.setState({ todos: this.state.todos });
  }
  deleteTask(taskToDelete){
    _.remove(this.state.todos, todo => todo.task === taskToDelete);
    this.setState({ todos: this.state.todos });
  }
  render() {
    return (
      <div>
        <Header />
        <ListOfToDos
          todos={ this.state.todos }
          createTask={ this.createTask.bind(this) }
          toggleTask={ this.toggleTask.bind(this)}
          saveTask={ this.saveTask.bind(this) }
          deleteTask={ this.deleteTask.bind(this) }
        />
        <Footer />
      </div>
  )}
}
