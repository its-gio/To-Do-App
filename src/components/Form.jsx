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
      diet
    } = this.props.info;

    return (
      <form>
        <input name="firstName" type="text" placeholder="First Name..." />
        <input name="lastName" type="text" placeholder="Last Name..." />
        <legend>
          Age:
          <input name="age" type="number" min="18" value={age} />
        </legend>
        <legend>
          Gender:
          <input name="gender" type="radio" value="male" />
          Male
          <input name="gender" type="radio" value="female" />
          Female
          <input name="gender" type="radio" value="other" />
          Other...
        </legend>
        <select name="locationTo" type="text" placeholder="Location To...">
          <option value="Los Angeles, CA">Los Angeles, CA</option>
          <option value="San Fransisco, CA">San Fransisco, CA</option>
          <option value="Austin, TX">Austin, TX</option>
        </select>
        <legend>
          Diet Restrictions:
          <input name="diet" type="checkbox" value="Vegan" />
          Vegan
          <input name="diet" type="checkbox" value="Pescetarians" />
          Pescetarians
          <input name="diet" type="checkbox" value="Vegetarian" />
          Vegetarian
        </legend>
      </form>
    );
  }
}

export default Form;
