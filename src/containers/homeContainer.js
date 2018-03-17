import React from 'react';
import { connect } from 'react-redux';

import Home from '../components/home';

const mapStateToProps = state => ({
    vacancies: state.vacancies
});

export default connect(mapStateToProps)(Home);