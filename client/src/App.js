import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom'
import React, {Component, useState, useEffect} from 'react'
import Welcome from './Welcome';
import Clock from './Clock';
import Table from './Table';
import Socket from './Socket';

class App extends Component {
  state = {
    users: [
      { name: 'foo', job: 'bar' }
    ]
  }

  removeUser = index => {
    const { users } = this.state;

    this.setState({
      users: users.filter((user, i) => {
          return i !== index;
      })
    });
  }

  handleSubmit = users => {
    this.setState({users: [...this.state.users, users]});
  }

  render() {
    const {
      users,
      removeUser,
      handleSubmit
    } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div id="root"></div>
          <Welcome name="勻勻" />
          <Socket />
          <Clock />
        </header>
      </div>
    );
  }
}

export default App;
