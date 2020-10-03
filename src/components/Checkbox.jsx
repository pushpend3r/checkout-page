import React, { Component } from "react";

class Checkbox extends Component {
  render() {
    const { name, id, value, label } = this.props;
    return (
      <div className="checkbox-container">
        <input type="checkbox" name={name} id={id} value={value} />
        <span className="checkbox"></span>
        <label htmlFor={id}>{label}</label>
        <br />
      </div>
    );
  }
}

export default Checkbox;
