import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Layout from './components/Layout/Layout';
import Navbar from './components/Navbar/Navbar';
import BackImage from './components/BackImage/BackImage';
import Searching from './components/Searching/Searching';
// import components here
// define baseURL here
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BackImage />
        <Navbar />
        <Layout />
        <Searching />
      </div>
    );
  }
}

export default App;
