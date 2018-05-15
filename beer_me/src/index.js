import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootswatch/dist/materia/bootstrap.min.css';
import './index.css';


async function render() {
  ReactDOM.render(<App />, document.getElementById('root'));
}


render();
