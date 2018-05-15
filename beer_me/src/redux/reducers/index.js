import { combineReducers } from 'redux';
import beers from '../reducers/beers';
import breweries from '../reducers/breweries';
import featureBrewery from '../reducers/featureBrewery';
// import comments from '../reducers/comments';
// import filter from '../reducers/filter';

export default combineReducers({ beers, breweries, featureBrewery });
