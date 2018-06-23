import React from 'react';
import { NavLink } from 'react-router-dom';

export default ({ authentificate, authentificated }) => 
    <div>
        <NavLink to='/'>Home</NavLink> |
        <NavLink to='/vacancies'>Vacancies</NavLink> |
        {authentificated ? 
            <button onClick={() => authentificate(false)}>Sign out</button> : 
            <button onClick={() => authentificate(true)}>Sign In</button> }
    </div>