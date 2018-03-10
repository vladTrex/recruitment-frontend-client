import React from 'react';

export default ({ location }) =>
    <div className='whoops-404'>
        <h2>Resource not found at '{location.pathname}'</h2>
    </div>