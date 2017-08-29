import React, { Component } from 'react';
import './App.css';
import RegInput from './RegInput';
import RegSubjectList from './RegSubjectList';

const availableSubjects = {
  '101': {
    id: '101',
    name: 'basic react'
  },
  '201': {
    id: '201',
    name: 'not basic react'
  },
  '301': {
    id: '301',
    name: 'strong react'
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      subjects: []
    }
    this.handleReg = this.handleReg.bind(this);
    this.handleUnreg = this.handleUnreg.bind(this);
    this.clearSubjects = this.clearSubjects.bind(this);
  }

  handleReg(id) {
    if(availableSubjects[id]) {
      this.setState({
        subjects: [
          ...this.state.subjects,
          availableSubjects[id]
        ]
      });
    } else {
      alert(`Subject ID ${id} not found.`);
    }
  }

  handleUnreg(index) {
    this.setState({
      subjects: [
        ...this.state.subjects.slice(0, index),
        ...this.state.subjects.slice(index + 1)
      ]
    });
  }

  clearSubjects() {
    this.setState({
      subjects: []
    });
  }

  render() {
    return (
      <div>
        <RegInput handleReg={this.handleReg} />
        <RegSubjectList handleUnreg={this.handleUnreg} subjects={this.state.subjects} />
        {this.state.subjects.length > 0 && (
          <button onClick={this.clearSubjects}>UNREKT ALL</button>
        )}
      </div>
    );
  }
}

export default App;
