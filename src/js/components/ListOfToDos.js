import _ from "lodash";
import React from "react";

import ToDoListItem from './ToDoListItem'
import CreateToDo from './CreateToDo'

export default class ListOfToDos extends React.Component {
  renderItem() {
    return _.map(this.props.todos, (todos, i) => <ToDoListItem key={ i } {...todos} />);
  }
  render() {
    return (
      <div>
        <CreateToDo createTask={this.props.createTask}/>
        { this.renderItem() }
      </div>
  )}
}
