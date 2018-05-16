import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { isEmpty } from './utils/LangUtils';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import { connect } from 'react-redux';
// signup/login
import Signup from './components/Signup/Signup';
import LoginPageContainer from './redux/containers/LoginPageContainer';
import { getAuth } from './redux/actions/auth_actions';
import auth_actions from './redux/actions/auth_actions';
import { Provider } from 'react-redux';
// api calls to beers and breweries
import { fetchBeers } from './redux/actions/beers';
import { fetchBeer } from './redux/actions/fetchBeer';
import { fetchBreweries } from './redux/actions/breweries';
import { fetchBrewery } from './redux/actions/fetchBrewery';
// beer and brewery components
import BeerPage from './components/BeerPage/BeerPage';
import FetchBeerPage from './components/FetchBeerPage/FetchBeerPage';
import BreweryPage from './components/BreweryPage/BreweryPage';
import FetchBreweryPage from './components/FetchBreweryPage/FetchBreweryPage';
// redux store and routers
import setupStore from './redux/store';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

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
              <Route path="/cheers" render={props => <Main />} />
              <Route exact path="/beers" component={BeerPage} />
              <Route
                exact
                path="/beers/:id"
                render={props => <FetchBeerPage />}
              />
              <Route path="/signup" component={Signup} />

              <Route exact path="/breweries" component={BreweryPage} />
              <Route
                exact
                path="/breweries/:id"
                render={props => <FetchBreweryPage />}
              />
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
