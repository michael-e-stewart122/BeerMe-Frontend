import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { isEmpty } from './utils/LangUtils';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Main from './components/Main/Main';

// signup/login

import auth_actions from './redux/actions/auth_actions';

// api calls to beers and breweries

import { getAuth } from './redux/actions/auth_actions';
import { fetchBeers } from './redux/actions/beers';
import { fetchBeer } from './redux/actions/fetchBeer';
import { fetchBreweries } from './redux/actions/breweries';
import { fetchBrewery } from './redux/actions/fetchBrewery';
import { beersByBrewery } from './redux/actions/beersByBrewery';
// beer and brewery components
import LoginPageContainer from './redux/containers/LoginPageContainer';
import Signup from './components/Signup/Signup';
import BeerPage from './components/BeerPage/BeerPage';
import FetchBeerPage from './components/FetchBeerPage/FetchBeerPage';
import BreweryPage from './components/BreweryPage/BreweryPage';
import FetchBreweryPage from './components/FetchBreweryPage/FetchBreweryPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
// redux store and routers

import setupStore from './redux/store';

const store = setupStore();

store.dispatch(fetchBeers());
store.dispatch(getAuth());
store.dispatch(fetchBreweries());
// store.dispatch(fetchBrewery());

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router>
            <div>
              <Navbar />
              <Route
                exact
                path="/"
                component={() => <Redirect to="/cheers" />}
              />
              <Route exact path="/login" component={LoginPageContainer} />
              <Route path="/cheers" component={Main} />
              <Route exact path="/beers" component={BeerPage} />
              <Route path="/signup" component={Signup} />
              <Route path="/profile" component={ProfilePage} />
              <Route exact path="/breweries" component={BreweryPage} />
              <Route
                exact
                path="/beers/:id"
                render={props => <FetchBeerPage />}
              />
              <Route
                exact
                path="/breweries/:id"
                render={props => <FetchBreweryPage />}
              />
              <Footer />
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}

const mapDispatchToProps = () => {
  return { auth: auth_actions.getAuth() };
};

connect(mapDispatchToProps)(App);
