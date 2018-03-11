import { combineReducers } from 'redux';

import { vacancies, user } from './reducers';

const rootReducer = combineReducers({
    vacancies,
    user
});

export default rootReducer;