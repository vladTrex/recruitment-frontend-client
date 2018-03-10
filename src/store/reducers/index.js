import { combineReducers } from 'redux';

import { vacancies } from './reducers';

const rootReducer = combineReducers({
    vacancies
});

export default rootReducer;