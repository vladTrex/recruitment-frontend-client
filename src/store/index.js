
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const logger = store => next => action => {
    let result
    console.groupCollapsed("dispatching", action.type)
    console.log('prev state', store.getState())
    console.log('action', action)
    result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result
}

const storeFactory = applyMiddleware(thunk, logger)(createStore)

export default storeFactory
