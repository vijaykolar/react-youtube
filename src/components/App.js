import React, { Component } from 'react';
import SearchBar from './SearchBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <SearchBar />
      </div>
    );
  }
}

export default App;
