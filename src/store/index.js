
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'

import reducers from './reducers';

const persistConfig = {
    key: 'root',
    storage,
};

const logger = createLogger({
    collapsed: true
});

const persistedReducer = persistReducer(persistConfig, reducers);

let store = createStore(persistedReducer, applyMiddleware(thunk, logger));
let persistor = persistStore(store);

export { store, persistor };
