import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootswatch/dist/materia/bootstrap.min.css';
import './index.css';
import { fetchBeers } from './redux/actions/beers';
import { fetchBreweries } from './redux/actions/breweries';
import { featureBrewery } from './redux/actions/featureBrewery';

const newStore = store();

newStore.dispatch(fetchBeers());
newStore.dispatch(fetchBreweries());
newStore.dispatch(featureBrewery(1));

ReactDOM.render(
  <Provider store={newStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
