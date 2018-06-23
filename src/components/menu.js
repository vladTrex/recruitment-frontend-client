import React from 'react';
import { Link } from 'react-router-dom';

export default ({ authentificate, authentificated }) => 
    <div>
        <Link to='/'>Home</Link> |
        <Link to='/vacancies'>Vacancies</Link> |
        {authentificated ? 
            <button onClick={() => authentificate(false)}>Sign out</button> : 
            <button onClick={() => authentificate(true)}>Sign In</button> }
    </div>