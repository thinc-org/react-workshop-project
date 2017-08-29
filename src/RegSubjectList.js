import React, { Component } from 'react';

class RegSubjectList extends Component {
  constructor() {
    super();
    this.handleUnreg = this.handleUnreg.bind(this);
  }

  handleUnreg(event) {
    this.props.handleUnreg(event.target.id);
  }

  render() {
    return (
      <ul>
        {this.props.subjects.map((subject, index) => (
          <li id={index} key={index}>{subject.id} : {subject.name} <button onClick={this.handleUnreg}>UNREKT</button></li>
        ))}
      </ul>
    );
  }
}

export default RegSubjectList;
