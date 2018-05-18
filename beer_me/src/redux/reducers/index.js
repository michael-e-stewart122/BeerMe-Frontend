import { combineReducers } from 'redux';
import auth from './auth.reducers';
import beers from '../reducers/beers';
import filterBeers from '../reducers/filterBeers';
import filterBreweries from '../reducers/filterBreweries';
import fetchBeer from '../reducers/fetchBeer';
import breweries from '../reducers/breweries';
import fetchBrewery from '../reducers/fetchBrewery';
import beersByBrewery from '../reducers/beersByBrewery';

export default combineReducers({
  auth,
  beers,
  breweries,
  fetchBrewery,
  fetchBeer,
  filterBeers,
  filterBreweries,
  beersByBrewery
});
