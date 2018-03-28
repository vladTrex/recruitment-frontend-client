import { createSelector } from 'reselect';
import { memoize } from 'lodash';

import * as vacancyModel from '../../models/vacancy';

export const getAllVacancies = state => state.vacancies;

export const getVacancyById = createSelector(
    getAllVacancies,
    vacancyModel.getVacancyById
);