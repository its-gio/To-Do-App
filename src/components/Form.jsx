import React, { Component } from "react";

class Form extends Component {
  render() {
    const {
      firstName,
      lastName,
      age,
      gender,
      locationFrom,
      locationTo,
      vegan,
      pescetarians,
      vegetarian
    } = this.props.info;

    return (
      <form>
        <input
          onChange={this.props.updateForm}
          value={firstName}
          name="firstName"
          type="text"
          placeholder="First Name..."
        />
        <input
          onChange={this.props.updateForm}
          value={lastName}
          name="lastName"
          type="text"
          placeholder="Last Name..."
        />
        <legend>Age:</legend>
        <input
          onChange={this.props.updateForm}
          name="age"
          type="number"
          min="18"
          value={age}
        />
        <legend>Gender:</legend>
        <label>
          <input
            onChange={this.props.updateForm}
            checked={gender === "male"}
            name="gender"
            type="radio"
            value="male"
          />
          Male
        </label>
        <label>
          <input
            onChange={this.props.updateForm}
            checked={gender === "female"}
            name="gender"
            type="radio"
            value="female"
          />
          Female
        </label>
        {/* <input
          onChange={this.props.updateForm}
          checked={gender == }
          name="gender"
          type="radio"
          value="other"
        />
        Other... */}
        <legend>Destination To:</legend>
        <select name="locationTo" onChange={this.props.updateForm}>
          <option value="" />
          <option value="Los Angeles, CA">Los Angeles, CA</option>
          <option value="San Fransisco, CA">San Fransisco, CA</option>
          <option value="Austin, TX">Austin, TX</option>
        </select>
        <legend>Diet Restrictions:</legend>
        <label>
          <input
            onChange={this.props.updateForm}
            name="vegan"
            type="checkbox"
            checked={vegan}
          />
          Vegan
        </label>
        <label>
          <input
            onChange={this.props.updateForm}
            name="pescetarians"
            type="checkbox"
            checked={pescetarians}
          />
          Pescetarians
        </label>
        <label>
          <input
            onChange={this.props.updateForm}
            name="vegetarian"
            type="checkbox"
            checked={vegetarian}
          />
          Vegetarian
        </label>
      </form>
    );
  }
}

export default Form;
