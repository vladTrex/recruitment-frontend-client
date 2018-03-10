import * as actionTypes from '../../constants/actionTypes';

export const vacancies = (state = [], action) => {
    switch (action.type) {
        case actionTypes.FETCH_VACANCIES:
            return [...action.payload, ...state]
        case actionTypes.ADD_VACANCY:
            return [action.payload, ...state]
        default:
            return state;
    }
};