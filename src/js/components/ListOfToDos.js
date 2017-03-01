import _ from "lodash";
import React from "react";

import ToDoListItem from './ToDoListItem'

export default class ListOfToDos extends React.Component {
  renderItem() {
    return _.map(this.props.todos, (todos, i) => <ToDoListItem key={ i } {...todos} />);
  }
  render() {
    return (
      <div>
        { this.renderItem() }
      </div>
  )}
}
