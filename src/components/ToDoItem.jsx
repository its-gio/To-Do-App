import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    return (
      <label className="todo-item">
        <input
          className="todo-item__checkbox"
          type="checkbox"
          checked={this.props.completed}
          onChange={() => this.props.changeComplete(this.props.id)}
        />
        <p
          className={`todo-item__content ${this.props.completed && "checked"}`}
        >
          {this.props.text}
        </p>
      </label>
    );
  }
}

export default TodoItem;
