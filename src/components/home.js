import React from 'react';
import { Link } from 'react-router-dom';

import Menu from './menu'

export default ({ vacancies }) =>
    <div>
        <Menu />
        {vacancies.map(vacancy => <p><Link to={`/vacancy/${vacancy.id}`}>{vacancy.title}</Link></p>)}
        <p>Recruitment App.</p>
    </div>