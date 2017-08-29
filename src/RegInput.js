import React, { Component } from 'react';

class RegInput extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleReg = this.handleReg.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  handleReg() {
    this.props.handleReg(this.state.input);
  }

  render() {
    return (
      <div>
        ID: <input type="text" value={this.state.input} onChange={this.handleInputChange} />
        <button onClick={this.handleReg}>REKT</button>
      </div>
    );
  }
}

export default RegInput;
