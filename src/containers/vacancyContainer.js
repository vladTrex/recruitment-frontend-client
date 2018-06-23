import React from 'react';
import { connect } from 'react-redux';
import {compose} from 'recompose';

import { getVacancyById } from '../store/selectors/vacancy';
import Vacancy from '../components/vacancy';
import AuthHOC from "../components/HOCs/AuthHOC";

const mapStateToProps = (state, ownProps) => ({
    vacancy: getVacancyById(state)(ownProps.match.params.id)
});

export default compose(
    connect(mapStateToProps),
    AuthHOC
)(Vacancy)
