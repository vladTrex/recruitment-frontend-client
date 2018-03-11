import * as actionTypes from '../../constants/actionTypes';

export const fetchVacancies = () => ({
    type: actionTypes.FETCH_VACANCIES,
    payload: [
        { title: 'Vacancy 1', description: 'Super cool description for Vacancy 1' },
        { title: 'Vacancy 2', description: 'Description for Vacancy 2' }
    ]
});

export const addVacancy = (payload = {}) => ({
    type: actionTypes.ADD_VACANCY,
    payload
});

export const setUser = (user = {}) => dispatch => {
    dispatch(addVacancy({ title: 'Vacancy 1', description: 'Some cool description' }));
    dispatch({
        type: actionTypes.SET_USER,
        user
    })
};