import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import './App.css';
import { Provider } from 'react-redux';
import BoardContainer from './containers/BoardContainer';
import rootReducer from './reducers';
import { toLocalStore } from './middleWares';

const store = createStore(
  rootReducer,
  applyMiddleware(toLocalStore),
);

const App = (
  <Provider store={store}>
    <BoardContainer />
  </Provider>
);

export default App;
