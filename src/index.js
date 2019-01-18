import React from 'react';
import './index.css';
import './App.css';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import BoardContainer from './containers/BoardContainer';
import configureStore from './storeConfig';

const initialState = JSON.parse(window.localStorage.getItem('myAppInfo')) || {
  cards: {
    0: [],
    1: [],
    2: [],
    3: [],
  },
  columns: [
    { id: 0, columnName: 'TODO' },
    { id: 1, columnName: 'In Progress' },
    { id: 2, columnName: 'Testing' },
    { id: 3, columnName: 'Done' },
  ],
  comments: [],
  currentCardInfo: { card: {}, isShowed: false },
};

render(
  <Provider store={configureStore(initialState)}>
    <BoardContainer />
  </Provider>,
  document.getElementById('root'),
);
