import { combineReducers } from 'redux';
import beers from '../reducers/beers';
import auth from './auth.reducers';
import breweries from '../reducers/breweries';
import fetchBrewery from '../reducers/fetchBrewery';


export default combineReducers({ auth, beers, breweries, fetchBrewery });

