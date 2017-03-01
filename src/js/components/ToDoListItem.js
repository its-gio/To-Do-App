import React from "react";


export default class ToDoListItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isEditing: false
    }
  }
  onEditClick(){
    this.setState({ isEditing: true })
  }
  onCancelClick(){
    this.setState({ isEditing: false })
  }
  renderActionsSection(){
    if(this.state.isEditing){
      return(
        <div>
          <button class="save">Save</button>
          <button onClick={this.onCancelClick.bind(this)} class="cancel">Cancel</button>
        </div>
      );
    }
    return (
      <div>
        <button onClick={ this.onEditClick.bind(this) } class="edit">Edit</button>
        <button class="delete">Delete</button>
      </div>
    );
  }
  render() {
    return (
      <div class="ToDoListItem">
        <div>{ this.props.task }</div>
        { this.renderActionsSection() }
      </div>
  )}
}
