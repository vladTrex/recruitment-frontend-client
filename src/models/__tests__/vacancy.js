import { getVacancyById } from '../vacancy';

describe('getVacancyById', () => {
    it('should return found vacancy', () => {
        const vacancies = [
            {id: '123'},
            {id: '234'}
        ];
        const vacancyId = '123';
        const expected = {id: '123'};

        expect(getVacancyById(vacancies)(vacancyId)).toEqual(expected);
    });
});