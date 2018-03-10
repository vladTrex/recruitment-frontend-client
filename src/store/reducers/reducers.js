import { FETCH_VACANCIES } from '../../constants/actionTypes';

export const vacancies = (state = [], action) => {
    switch (action.type) {
        case FETCH_VACANCIES:
            return [action.payload, ...state]
        default:
            return state;
    }
};