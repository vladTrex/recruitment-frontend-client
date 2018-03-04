import React from 'react';
import { render } from 'react-dom';

window.React = React;

export const Home = () => 
    <div>
        <h4>Main page</h4>
        <p>Recruitment App.</p>
    </div>

render(
    <Home />,
    document.getElementById('rootApp')
);