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
  render() {
    return (
      <div>
        <Header />
        <ListOfToDos todos={ this.state.todos } />
        <Footer />
      </div>
  )}
}
