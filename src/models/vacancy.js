import { memoize } from 'lodash';

export const getVacancyById = (vacancies, id) => memoize(id => vacancies.find(vacancy => vacancy.id === id));