import React from 'react';
import { connect } from 'react-redux';
import {compose} from 'recompose';


import { getAllVacancies } from '../store/selectors/vacancy';
import Vacancies from '../components/vacancies';
import AuthHOC from "../components/HOCs/AuthHOC";

const mapStateToProps = state => ({
    vacancies: getAllVacancies(state)
});

export default compose(
    connect(mapStateToProps),
    AuthHOC
)(Vacancies)