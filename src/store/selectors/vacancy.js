import { createSelector } from 'reselect';

import * as vacancyModel from '../../models/vacancy';

export const getAllVacancies = state => state.vacancies;

export const getVacancyById = id => createSelector(
    getAllVacancies,
    vacancies => vacancies.find(vacancy => vacancy.id === id)
);