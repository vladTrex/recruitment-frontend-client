import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import { fetchVacancies } from '../store/actions';
import Home from '../components/home';

const mapStateToProps = state => ({
    vacancies: state.vacancies
});


export default compose(
    connect(mapStateToProps, {fetchVacancies}),
    lifecycle({
        componentWillMount(){
            const {fetchVacancies} = this.props;

            fetch('/store.json')
                .then((res) => res.json())
                .then((data) => {
                    fetchVacancies(data.vacancies)
                });
        }
    })
)(Home);