import React, { Component } from "react";


class Purchase extends Component {
  state = {
    textValue: "",
    checkedOptionValue: "",
    options: [],
  };

  handleOptionAdd = () => {
    const { options, textValue } = this.state;
    this.setState({ textValue: "" });
    this.setState({
      options: [
        ...options,
        {
          label: textValue,
          value: textValue.toLowerCase().replace(" ", "-"),
        },
      ],
    });
  };

  handleRadioChange = (e) =>
    this.setState({ checkedOptionValue: e.target.value });

  render() {
    const { options, textValue, checkedOptionValue } = this.state;
    return (
      <div className="App">
        <input
          type="radio"
          value={textValue}
          onClick={this.handleOptionAdd}
          onChange={(e) => this.setState({ textValue: e.target.value })}
        />
        <button >Add</button>

        <div>
          {options.map((option) => (
            <div>
              <input
                type="text"
                name="dynamic-radio"
                value={option.value}
                checked={checkedOptionValue === option.value}
                onChange={this.handleRadioChange}
              />
              <label>{option.label}</label>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Purchase;