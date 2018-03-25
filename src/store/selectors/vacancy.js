import { createSelector } from 'reselect';

export const getAllVacancies = state => state.vacancies;

export const getVacancyById = id => createSelector(
    getAllVacancies,
    vacancies => vacancies.find(vacancy => vacancy.id === id)
);