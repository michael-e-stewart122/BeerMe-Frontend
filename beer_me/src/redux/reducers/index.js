import { combineReducers } from 'redux';
import beers from '../reducers/beers';
import auth from './auth.reducers';
export default combineReducers({ beers, auth });
