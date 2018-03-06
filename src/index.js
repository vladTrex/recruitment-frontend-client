import React from 'react';
import { render } from 'react-dom';

import Home from './containers/homeContainer';

window.React = React;

render(
    <Home />,
    document.getElementById('rootApp')
);