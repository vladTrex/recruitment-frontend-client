
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'


import reducers from './reducers';

const store = createStore(
    reducers,
    applyMiddleware(thunk, logger)
  );

export default store;