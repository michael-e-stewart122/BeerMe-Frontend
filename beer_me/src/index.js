import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './index.css';

async function render() {
  ReactDOM.render(<App />, document.getElementById('root'));
}

render();
