import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddUser from './AddUserComponent';
 

class App extends Component {
  state = {
    users: [],
  };

  createContact = user => {
    user.numGamesPlayed = 0;
    this.setState(currState => ({
      users: [...currState.users, user],
    }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <AddUser users={this.state.users} onAddUser={this.createContact} />

        <br />
        2020
      </div>
    );
  }
}

export default App;
