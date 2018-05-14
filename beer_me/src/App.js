import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import Layout from './components/Layout/Layout';
import Navbar from './components/Navbar/Navbar';
// import BackImage from './components/BackImage/BackImage';
// import Searching from './components/Searching/Searching';
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import BeerPage from './components/BeerPage/BeerPage';

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={() => <Redirect to="/cheers" />} />
          <Route path="/login" component={Login} />
          <Route path="/cheers" render={props => <Main />} />
          <Route path="/beers" render={props => <BeerPage />} />
        </div>
      </Router>
    </div>
  );
};
export default App;
