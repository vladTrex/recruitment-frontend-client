import { v4 } from 'uuid';

import * as actionTypes from '../../constants/actionTypes';

export const fetchVacancies = payload => ({
    type: actionTypes.FETCH_VACANCIES,
    payload
});

export const addVacancy = (payload = {}) => ({
    type: actionTypes.ADD_VACANCY,
    payload
});

export const setUser = (user = {}) => dispatch => {
    dispatch(addVacancy({ id: 3, title: 'Vacancy 13', description: 'Some cool description' }));
    dispatch({
        type: actionTypes.SET_USER,
        user
    })
};