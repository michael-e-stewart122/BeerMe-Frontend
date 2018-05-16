import { combineReducers } from 'redux';
import auth from './auth.reducers';
import beers from '../reducers/beers';
import fetchBeer from '../reducers/fetchBeer';
import breweries from '../reducers/breweries';
import fetchBrewery from '../reducers/fetchBrewery';

export default combineReducers({
  auth,
  beers,
  breweries,
  fetchBrewery,
  fetchBeer
});
