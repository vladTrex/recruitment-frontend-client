import React from 'react';
import { connect } from 'react-redux';

import { getAllVacancies } from '../store/selectors/vacancy';
import Vacancies from '../components/vacancies';

const mapStateToProps = state => ({
    vacancies: getAllVacancies(state)
});

export default connect(mapStateToProps)(Vacancies);