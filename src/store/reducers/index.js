import { combineReducers } from 'redux';

import { vacancies, user } from './reducers';
import { auth } from './auth';

const rootReducer = combineReducers({
    vacancies,
    user,
    auth
});

export default rootReducer;