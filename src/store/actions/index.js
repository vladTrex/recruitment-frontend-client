import { v4 } from 'uuid';

import * as actionTypes from '../../constants/actionTypes';

export const fetchVacancies = () => ({
    type: actionTypes.FETCH_VACANCIES,
    payload: [
        { id: v4(), title: 'Vacancy 1', description: 'Super cool description for Vacancy 1' },
        { id: v4(), title: 'Vacancy 2', description: 'Description for Vacancy 2' }
    ]
});

export const addVacancy = (payload = {}) => ({
    type: actionTypes.ADD_VACANCY,
    payload
});

export const setUser = (user = {}) => dispatch => {
    dispatch(addVacancy({ id: v4(), title: 'Vacancy 13', description: 'Some cool description' }));
    dispatch({
        type: actionTypes.SET_USER,
        user
    })
};