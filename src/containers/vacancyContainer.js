import React from 'react';
import { connect } from 'react-redux';

import Vacancy from '../components/vacancy';

const mapStateToProps = (state, ownProps) => ({
    vacancy: state.vacancies.find(vacancy => vacancy.id === Number(ownProps.match.params.id))
});

export default connect(mapStateToProps)(Vacancy);