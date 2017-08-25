import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import { initialState } from './globals';

const middlewares = [];
let enhancer;

if (process.env.NODE_ENV !== 'production') {
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ serialize: true }) : compose;
  /* eslint-enable no-underscore-dangle */

  enhancer = composeEnhancers(
    applyMiddleware(...middlewares)
  );
} else {
  enhancer = applyMiddleware(...middlewares);
}

export default function (initState = initialState) {
  const store = createStore(rootReducer, initState, enhancer);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
