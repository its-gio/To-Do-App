import React, { Component } from "react";

import ToDoItem from "./components/ToDoItem";

class App extends Component {
  render() {
    return (
      <form>
        <ToDoItem />
      </form>
    );
  }
}

export default App;
