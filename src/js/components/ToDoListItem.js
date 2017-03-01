import React from "react";


export default class ToDoListItem extends React.Component {
  render() {
    return (
      <div class="ToDoListItem">
        <div>{ this.props.task }</div>
        <div>
          <button class="edit">Edit</button>
          <button class="delete">Delete</button>
        </div>
      </div>
  )}
}
