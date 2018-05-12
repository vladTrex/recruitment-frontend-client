import React from 'react';
import { Link } from 'react-router-dom';

import Menu from './menu'

export default ({ vacancies, authentificate, authentificated }) =>
    <div>
        <Menu 
        authentificate={authentificate}
        authentificated={authentificated}
         />
        {vacancies.map(vacancy => <p><Link to={`/vacancy/${vacancy.id}`}>{vacancy.title}</Link></p>)}
        <p>Recruitment App.</p>
    </div>