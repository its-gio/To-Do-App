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
        <select name="locationTo" type="text" placeholder="Location To...">
          <option value="Los Angeles, CA">Los Angeles, CA</option>
          <option value="San Fransisco, CA">San Fransisco, CA</option>
          <option value="Austin, TX">Austin, TX</option>
        </select>
        <legend>Diet Restrictions:</legend>
        <label>
          <input name="vegan" type="checkbox" value="Vegan" />
          Vegan
        </label>
        <label>
          <input name="pescetarians" type="checkbox" value="Pescetarians" />
          Pescetarians
        </label>
        <label>
          <input name="vegetarian" type="checkbox" value="Vegetarian" />
          Vegetarian
        </label>
      </form>
    );
  }
}

export default Form;
