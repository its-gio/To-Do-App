import _ from "lodash";
import React from "react";

import ToDoListItem from './ToDoListItem'
import CreateToDo from './CreateToDo'

export default class ListOfToDos extends React.Component {
  renderItem() {
    const props = _.omit(this.props, "todos");
    return _.map(this.props.todos, (todos, i) => <ToDoListItem key={ i } {...todos} {...props} />);
  }
  render() {
    return (
      <div>
        <CreateToDo createTask={this.props.createTask}/>
        { this.renderItem() }
      </div>
  )}
}
