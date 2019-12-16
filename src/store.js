import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { baseReducer } from './reducers/baseReducer'
import { themeReducer } from './reducers/themeReducer'
import { apiService } from './services/api';

const enhancer = compose(
    applyMiddleware(apiService),
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      : compose
  );

export const store = createStore(combineReducers({ baseReducer, themeReducer }), {}, enhancer);