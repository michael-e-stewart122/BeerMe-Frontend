import { combineReducers } from 'redux';
import beers from '../reducers/beers';
import auth from './auth.reducers';
import breweries from '../reducers/breweries';
import featureBrewery from '../reducers/featureBrewery';


export default combineReducers({ auth, beers, breweries, featureBrewery });

