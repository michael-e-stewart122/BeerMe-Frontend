import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootswatch/dist/materia/bootstrap.min.css';
import './index.css';
import { fetchBeers } from './redux/actions/beers';

const newStore = store();

newStore.dispatch(fetchBeers());

ReactDOM.render(
  <Provider store={newStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
