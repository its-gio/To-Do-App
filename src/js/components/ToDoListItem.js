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
  renderTaskSection(){
    const { task, isComplete } = this.props;
    const taskStyle = {
      textDecorationLine: isComplete ? "line-through" : "none",
      color: isComplete ? "green" : "red",
      cursor: "pointer"
    }
    if(this.state.isEditing){
      return(
        <form onSubmit={ this.onSaveClick.bind(this) }>
          <input type="text" defaultValue={task} ref="editInput" />
        </form>
      )
    }
    return(
      <div style={ taskStyle }
        onClick={this.props.toggleTask.bind(this, task)}>
        { task }
      </div>
    );
  }
  onSaveClick(e){
    e.preventDefault();
    const oldTask = this.props.task;
    const newTask = this.refs.editInput.value;
    this.props.saveTask(oldTask, newTask);
    this.setState({ isEditing: false });
  }
  renderActionsSection(){
    if(this.state.isEditing){
      return(
        <div>
          <button onClick= { this.onSaveClick.bind(this) } class="save">Save</button>
          <button onClick={ this.onCancelClick.bind(this) } class="cancel">Cancel</button>
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
        { this.renderTaskSection() }
        { this.renderActionsSection() }
      </div>
  )}
}
