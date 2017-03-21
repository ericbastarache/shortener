import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import UrlForm from './components/UrlForm';

class App extends Component {
  render() {
    return (
      <div>
        <Header title="Simple URL Shortener" />
        <UrlForm />
      </div>
    );
  }
}

export default App;
