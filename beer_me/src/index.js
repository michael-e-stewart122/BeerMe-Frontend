import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootswatch/dist/materia/bootstrap.min.css';
import './index.css';
import checkAuthentication from './utils/checkAuthentication';
import env from './env';

async function render() {
  const authentication = await checkAuthentication({
    baseUrl: env.API_BASE_URL
  });
  ReactDOM.render(
    <App authentication={authentication} />,
    document.getElementById('root')
  );
}

render();
