import React, { Component } from 'react';
import youtube from './apis/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      videos: []
    }
  }
   
  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });


    this.setState({
      videos: response.data.items
    })
    console.log(response)
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
