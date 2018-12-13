import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    return (
      <label className="todo-item">
        <input className="todo-item__checkbox" type="checkbox" />
        {this.props.text}
        <hr className="todo-item__hr" />
      </label>
    );
  }
}

export default TodoItem;
