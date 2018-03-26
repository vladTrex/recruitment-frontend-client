import React from 'react';

import Menu from './menu';

export default ({ vacancy }) => 
    <div>
        <Menu />
        <h4>{vacancy.title}</h4>
        <p>Recruitment App.</p>
    </div>

