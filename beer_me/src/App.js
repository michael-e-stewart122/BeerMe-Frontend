import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Layout from './components/Layout';
import Navbar from './components/Navbar';
import BackImage from './components/BackImage';
import Searching from './components/Searching';
// import components here
// define baseURL here
//
// /////// enewwwwwww
// import React from 'react';
import Login from './components/Login';
// import TopNav from './components/TopNav';
// import Signup from './components/Signup';
// import UserProfile from './components/UserProfile';
// import './App.css';

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <BackImage />
//         <Navbar />
//         <Layout />
//         <Searching />
//       </div>
//     )
//   }
// }

export const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
          {/* <Navbar />
          <BackImage />
          <Layout />
          <Searching /> */}
          <Route exact path="/" component={() => <Redirect to="/cheers" />} />
          <Route path="/login" component={Login} />
          <Route
            path="/cheers"
            render={props => (
              <div>
                <BackImage />
                <Layout />
                <Searching />
              </div>
            )}
          />
          {/* <Route path="/signup" component={Signup} /> */}
          {/* <Route path="/profile" component={UserProfile} /> */}
        </div>
      </Router>
    </div>
  );
};
export default App;
