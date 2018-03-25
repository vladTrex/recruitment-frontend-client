import React from 'react';
import { connect } from 'react-redux';

import { getVacancyById } from '../store/selectors/vacancy';
import Vacancy from '../components/vacancy';

const mapStateToProps = (state, ownProps) => ({
    vacancy: getVacancyById(Number(ownProps.match.params.id))(state)
});

export default connect(mapStateToProps)(Vacancy);