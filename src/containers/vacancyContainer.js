import React from 'react';
import { connect } from 'react-redux';

import Vacancy from '../components/vacancy';

const mapStateToProps = (state, ownProps) => ({
    vacancy: state.vacancies[0]
});

export default connect(mapStateToProps)(Vacancy);