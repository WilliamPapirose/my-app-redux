import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import './App.css';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import BoardContainer from './containers/BoardContainer';
import rootReducer from './reducers';
import { toLocalStore } from './middleWares';

const store = createStore(
  rootReducer,
  applyMiddleware(toLocalStore),
);

render(
  <Provider store={store}>
    <BoardContainer />
  </Provider>,
  document.getElementById('root'),
);
