import { FETCH_VACANCIES } from '../../constants/actionTypes';

export const fetchVacancies = () => ({
    type: FETCH_VACANCIES,
    payload: [
        { title: 'Vacancy 1', description: 'Super cool description for Vacancy 1' },
        { title: 'Vacancy 2', description: 'Description for Vacancy 2' }
    ]
});