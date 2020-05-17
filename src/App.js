import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Dave', age: 25 },
      { name: 'Josh', age: 24 },
      { name: 'Joy', age: 20 },
    ],
    otherState: 'some other value',
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked');
    this.setState({
      persons: [
        { name: newName, age: 25 },
        { name: 'Josh', age: 24 },
        { name: 'Joy', age: 21 },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Dave', age: 25 },
        { name: event.target.value, age: 24 },
        { name: 'Joy', age: 21 },
      ],
    });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    return (
      <div className='App'>
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('David!!')} style={style}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Dave!')}
          changed={this.nameChangedHandler}
        >
          My Hobbies: Drawing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
