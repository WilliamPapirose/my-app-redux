import React from 'react';
import './index.css';
import './App.css';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import BoardContainer from './containers/BoardContainer';
import configureStore from './storeConfig';

const initialState = JSON.parse(window.localStorage.getItem('myAppInfo'));

render(
  <Provider store={configureStore(initialState)}>
    <BoardContainer />
  </Provider>,
  document.getElementById('root'),
);
