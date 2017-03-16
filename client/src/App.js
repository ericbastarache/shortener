import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import UrlForm from './components/UrlForm';
import LinksContainer from './components/LinksContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Header title="Simple URL Shortener" />
        <UrlForm />
        <LinksContainer />
      </div>
    );
  }
}

export default App;
