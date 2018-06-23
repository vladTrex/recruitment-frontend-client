import React from 'react';
import {Link} from "react-router-dom";


export default ({vacancies}) => {
    return (
        <div>
            {vacancies.length ?
                vacancies.map(vacancy => <p><Link to={`/vacancy/${vacancy.id}`}>{vacancy.title}</Link></p>) :
                'Sorry no active vacancies'}
        </div>
    );
};