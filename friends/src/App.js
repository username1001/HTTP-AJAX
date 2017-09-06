import React, { Component } from 'react';
import FriendsList from './components/FriendsList'; 
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="input">
        <input type="text" placeholder="name"/>
        <input type="text" placeholder="age"/>
        <input type="text" placeholder="email"/>
   	    <button>Add Friend</button>
        <FriendsList />
      </div>
    );
  }
}

export default App;
