import { createStore, applyMiddleware } from 'redux';
import myApp from './reducers';
import { toLocalStore } from './toLocalStore';

export default function configureStore(initialState) {
  const store = createStore(
    myApp,
    initialState,
    applyMiddleware(toLocalStore),
  );

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextMyApp = require('./reducers');
      store.replaceReducer(nextMyApp);
    });
  }

  return store;
}
